
//wh class links
$('body').on('click', '.whclasslink', function (event) {

    var href = event.target.getAttribute('href');

    $('.anomalycontainer').remove();

    $.ajax({
        url: href,
        type: "GET",
        datatype: "html",
        success: function (result) {
            $('body').append(result);
        }
    })
    return false;
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

//dps calculator
function secondsToHms(d) {
    if (Number(d) && d != Infinity) {

        d = Number(d);
        var h = Math.floor(d / 3600);
        var m = Math.floor(d % 3600 / 60);
        var s = Math.floor(d % 3600 % 60);

        var hDisplay = h + ':'
        var mDisplay = m + ':'
        if (m < 10) {
            mDisplay = '0' + mDisplay;
        }
        var sDisplay = s;
        return hDisplay + mDisplay + sDisplay;
    }
    else {
        return 'Error';
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