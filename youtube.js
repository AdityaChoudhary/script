WebFontConfig = {
    google: { families: [ 'Ek+Mukta:400:latin' ] }
};

var getScript = function (URL, callback, async) {
    var script = document.createElement('script');
    script.src = ('https:' == document.location.protocol ? 'https' : 'http') + ':' + URL;
    script.type = 'text/javascript';
    script.async = typeof async == 'undefined' ? 'true' : String(async);
    script.onload = script.onreadystatechange = function () {
        typeof callback == 'function' ? callback() : '';
    };
    var head = document.getElementsByTagName('script')[0];
    head.parentNode.insertBefore(script, head);
};

getScript('//ajax.googleapis.com/ajax/libs/webfont/1/webfont.js', function () {
    getScript('//ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js', function () {
        var VIDEO = 'https://www.youtube.com/watch?v=MNrLxhU_pWk';

        var HTML = '<section style="position: absolute;top: 0;left: 0;width: 100%;height: 75px;background: rgba(80, 80, 80, 0.5);z-index: 9999999999;">' +
            '<section style="border: 1px solid #000080;height: 100%;background: #3399CC;">' +
            '<section style="font-family: \'Ek Mukta\', sans-serif;color: #FFFFFF;font-size: 40px;margin: 5px 0 0 20px;padding: 0 10px 0 10px;float: left;">SERVED BY VIRALHO</section>' +
            '<section style="font-family: \'Ek Mukta\', sans-serif;color: #00CCFF;font-size: 40px;margin: 5px 20px 0 0;padding: 0 10px 0 10px;background: #E0E0E0;float: right;cursor: pointer;">' +
            'SKIP AD' +
            '</section>' +
            '</section>' +
            '</section>';

        $(document).ready(function () {
            $('body').append(HTML);
        });

        $('video').each(function (index, video) {
            video.volume = 0;
        });

        console.log(VIDEO);
    });
});