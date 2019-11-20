
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

        if (time.length <= 8) {
            $('#' + areaid).text(time);
        }
        else {
            $('#' + areaid).text("unknown");
        };
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
        
        if (time.length <= 8) {
            $('#' + areaid).text(time);
        }
        else {
            $('#' + areaid).text("unknown");
        };
    }
});


//anomaly searching
var anomaliesArr = [

    { name: "Forgotten Perimeter Coronation Platform", type: "combat" },
    { name: "Forgotten Perimeter Power Array", type:"combat" },
    { name: "Perimeter Ambush Point", type: "combat" },
    { name: "Perimeter Camp", type: "combat" },
    { name: "Phase Catalyst Node", type: "combat" },
    { name: "The Line", type: "combat" },
    { name: "Unsecured Perimeter Amplifier", type: "combat" },
    { name: "Unsecured Perimeter Information Center", type: "combat" },

    { name: "Forgotten Perimeter Gateway", type: "combat" },
    { name: "Forgotten Perimeter Habitation Coils", type: "combat" },
    { name: "Perimeter Checkpoint", type: "combat" },
    { name: "Perimeter Hangar", type: "combat" },
    { name: "Sleeper Data Signature Sanctuary", type: "combat" },
    { name: "The Ruins Of Enclave Cohort 27", type: "combat" },
    { name: "Unsecured Perimeter Comms Relay", type: "combat" },
    { name: "Unsecured Perimeter Transponder Farm", type: "combat" },

    { name: "Forgotten Frontier Quarantine Outpost", type: "combat" },
    { name: "Forgotten Frontier Recursive Depot", type: "combat" },
    { name: "Fortification Frontier Stronghold", type: "combat" },
    { name: "Outpost Frontier Stronghold", type: "combat" },
    { name: "Solar Cell", type: "combat" },
    { name: "The Oruze Construct", type: "combat" },
    { name: "Unsecured Frontier Database", type: "combat" },
    { name: "Unsecured Frontier Receiver", type: "combat" },

    { name: "Forgotten Frontier Conversion Module", type: "combat" },
    { name: "Forgotten Frontier Evacuation Center", type: "combat" },
    { name: "Frontier Barracks", type: "combat" },
    { name: "Frontier Command Post", type: "combat" },
    { name: "Integrated Terminus", type: "combat" },
    { name: "Sleeper Information Sanctum", type: "combat" },
    { name: "Unsecured Frontier Digital Nexus", type: "combat" },
    { name: "Unsecured Frontier Trinary Hub", type: "combat" },

    { name: "Core Garrison", type: "combat" },
    { name: "Core Stronghold", type: "combat" },
    { name: "Forgotten Core Data Field", type: "combat" },
    { name: "Forgotten Core Information Pen", type: "combat" },
    { name: "Oruze Osobnyk", type: "combat" },
    { name: "Quarantine Area", type: "combat" },
    { name: "Unsecured Frontier Enclave Relay", type: "combat" },
    { name: "Unsecured Frontier Server Bank", type: "combat" },

    { name: "Core Bastion", type: "combat" },
    { name: "Core Citadel", type: "combat" },
    { name: "Forgotten Core Assembly Hall", type: "combat" },
    { name: "Forgotten Core Circuitry Disassembler", type: "combat" },
    { name: "Strange Energy Readings", type: "combat" },
    { name: "The Mirror", type: "combat" },
    { name: "Unsecured Core Backup Array", type: "combat" },
    { name: "Unsecured Core Emergence", type: "combat" },

    { name: "Barren Perimeter Reservoir", type: "gas" },
    { name: "Bountiful Frontier Reservoir", type: "gas" },
    { name: "Instrumental Core Reservoir", type: "gas" },
    { name: "Minor Perimeter Reservoir", type: "gas" },
    { name: "Ordinary Perimeter Reservoir", type: "gas" },
    { name: "Sizeable Perimeter Reservoir", type: "gas" },
    { name: "Token Perimeter Reservoir", type: "gas" },
    { name: "Vast Frontier Reservoir", type: "gas" },
    { name: "Vital Core Reservoir", type: "gas" },

    { name: "Average Frontier Deposit", type: "ore" },
    { name: "Common Perimeter Deposit", type: "ore" },
    { name: "Exceptional Core Deposit", type: "ore" },
    { name: "Infrequent Core Deposit", type: "ore" },
    { name: "Isolated Core Deposit", type: "ore" },
    { name: "Ordinary Perimeter Deposit", type: "ore" },
    { name: "Rarified Core Deposit", type: "ore" },
    { name: "Uncommon Core Deposit", type: "ore" },
    { name: "Unexceptional Frontier Deposit", type: "ore" },
    { name: "Unusual Core Deposit", type: "ore" },
]

$('body').on('keyup', '#searchinput', function (event) {
    var text = event.target.value;
    $('.searchLi').remove();
    $('.searchresult').hide();

    if (text.length >= 3) {
        $('.searchresult').show();

        anomaliesArr.forEach(function (item, i, arr) {

            if (item.name.toUpperCase().includes(text.toUpperCase())) {
                $('#searchlist').append('<li class="searchLi"><a class="searchlink" anomalytype=' + item.type + " ' " + 'href = "/Home/Search/" > ' + item.name + '</a ></li > ');
            }
        });
    }
});

$('body').on('click', '.searchlink', function (event) {

    event.preventDefault();

    var href = event.target.getAttribute('href');
    var anomalytype = event.target.getAttribute('anomalytype');    
    var anomalyname = event.target.innerHTML.replace(/ /g, '');
    
    $.ajax({
        url: href,
        type: "GET",
        data: { Name: anomalyname, Type: anomalytype },
        datatype: "html",
        beforeSend: function () {
            $('.anomalycontainer').remove();
            $('.navigationcont').remove();
        },
        success: function (result) {
            $('body').append(result);
            $(".anomalycontainer, table").animate({ opacity: 1 }, 300);
        },
        complete: function () {            
        },
    });
});

$("body").click(function (event) {
    if (event.target.getAttribute('class') == "searchresult") {
        return
    }
    else
        $('.searchresult').hide();    
});