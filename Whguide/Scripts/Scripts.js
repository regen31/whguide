
//wh class links
$('body').on('click', '.whclasslink', function (event) {

    event.preventDefault();
    
    var href = event.target.getAttribute('href');
    var currentlink = $(this);
    var currenthtml = $(this).html();
    
    $('.whclasslink').css({ 'background-color' : ''});    
    this.style.backgroundColor = "rgba(0,0,0,0.3)";
    

    $('.anomalycontainer').remove();
    $('.navigationcont').remove();
    

    $.ajax({
        url: href,
        type: "GET",
        datatype: "html",
        beforeSend: function () {
            $('#over-lay').css({ 'display': 'flex' });
            currentlink.html("<img align='center' id='overlay-image' src='/Content/Images/loader1.gif'/>");
        },
        success: function (result) {
            $('body').append(result);
            $(".anomalycontainer, table").animate({ opacity: 1 }, 300);           
        },
        complete: function () {
            currentlink.html(currenthtml);
            $('#over-lay').css({ 'display': 'none' });
        },
    });
    
});



//navigation links
$("body").on('click', '.navigationlink', function (event) {

    event.preventDefault();
    var href = $(this).attr('href');
    
    var destination = $(href).offset().top - 5;

    $('html, body').animate({ scrollTop: destination }, 400);    
});


//sleeper img zoom
$('body').on('mousemove', '.sleeperimg', function (event) {

    var src = event.target.getAttribute('src');
    $('body').append('<div class="popupimg"></div>');
    $('.popupimg').css('background-image', 'url(' + src + ')');

    var x = event.pageX;
    var y = event.pageY;

    var top = y + 10 + 'px';
    var left = x + 10 + 'px';

    $('.popupimg').css({
        display: "block",
        top: top,
        left: left
    })
});

$('body').on('mouseleave', '.sleeperimg', function (event) {
    $('.popupimg').remove();
});

//dps and mining calculator
function secondsToHms(d) {

    if (Number(d) && d != Infinity) {

        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h + ':'
        var mDisplay = m + ':'
        var sDisplay = s;
        if (m < 10) {
            mDisplay = '0' + mDisplay;
        }
        if (s < 10) {
            sDisplay = '0' + s;
        }
        
        return hDisplay + mDisplay + sDisplay;
    }
    else {
        return ' ';
    }
};

$('body').on('keyup', '.dpsinput', function (event) {

    var dps = event.target.value;

    $(function () {
        $('.dpsinput').val(dps);
    });

    var areas = $('.timearea');

    for (i = 0; i < areas.length; i++) {

        var ehp = areas[i].getAttribute('EHP');
        var seconds = ehp / dps;
        var time = secondsToHms(seconds);
        
        var areaid = areas[i].getAttribute('id');
        $('#' + areaid).text(time);
    }
});

$('body').on('keyup', '.mineinput', function (event) {

    var m3s = event.target.value;

    $(function () {
        $('.mineinput').val(m3s);
    });

    var areas = $('.timearea');

    for (i = 0; i < areas.length; i++) {

        var OreAmount = areas[i].getAttribute('OreAmount');
        var seconds = OreAmount / m3s;
        var time = secondsToHms(seconds);

        var areaid = areas[i].getAttribute('id');
        $('#' + areaid).text(time);
    }
});


//anomaly searching
var anomaliesArr = [
    "Forgotten Perimeter Coronation Platform",
    "Forgotten Perimeter Power Array",
    "Perimeter Ambush Point",
    "Perimeter Camp",
    "Phase Catalyst Node",
    "The Line",
    "Unsecured Perimeter Amplifier",
    "Unsecured Perimeter Information Center",
    "Forgotten Perimeter Gateway",
    "Forgotten Perimeter Habitation Coils",
    "Perimeter Checkpoint",
    "Perimeter Hangar",
    "Sleeper Data Signature Sanctuary",
    "The Ruins Of Enclave Cohort 27",
    "Unsecured Perimeter Comms Relay",
    "Unsecured Perimeter Transponder Farm",
    "Forgotten Frontier Quarantine Outpost",
    "Forgotten Frontier Recursive Depot",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
]

$('body').on('keyup', '#searchinput', function (event) {
    var text = event.target.value;
    $('.searchLi').remove();
    $('.searchresult').hide();

    if (text.length >= 3) {
        $('.searchresult').show();

        anomaliesArr.forEach(function (item, i, arr) {

            if (item.toUpperCase().includes(text.toUpperCase())) {
                $('#searchlist').append('<li class="searchLi"><a class="searchlink" href =/Home/Search/' + item.replace(/\s/g, '') + '>' + item + '</a></li>');
            }
        });
    }
});



$("body").click(function (event) {
    if (event.target.getAttribute('class') == "searchresult") {
        return
    }
    else
        $('.searchresult').hide();    
});
