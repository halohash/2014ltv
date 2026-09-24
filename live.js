var _____WB$wombat$assign$function_____ = function(name) {
    return (globalThis._wb_wombat && globalThis._wb_wombat.local_init && globalThis._wb_wombat.local_init(name)) || globalThis[name];
};
if (!globalThis.__WB_pmw) {
    globalThis.__WB_pmw = function(obj) {
        this.__WB_source = obj;
        return this;
    }
}
{
    let window = _____WB$wombat$assign$function_____("window");
    let self = _____WB$wombat$assign$function_____("self");
    let document = _____WB$wombat$assign$function_____("document");
    let location = _____WB$wombat$assign$function_____("location");
    let top = _____WB$wombat$assign$function_____("top");
    let parent = _____WB$wombat$assign$function_____("parent");
    let frames = _____WB$wombat$assign$function_____("frames");
    let opener = _____WB$wombat$assign$function_____("opener");
    window.labels = {
        'default': ''
    };
    (function() {
        var a = window.labels;
        window.jstiming && window.jstiming.load && window.jstiming.load.tick("ld_s");
        var b = window.devjs
          , e = /[?&]debugjs=1/.exec(window.location.href)
          , f = /[?&]localPlayer=1/.exec(window.location.href)
          , g = /[?&]mediaDiagnostics=1/.exec(window.location.href)
          , h = window.local_label
          , k = /[?&]reversePairingCode=/.exec(window.location.href)
          , l = /[?&]launch=preload/.exec(window.location.href)
          , m = /[?&]v=[\w\+\/\-_=]+/.exec(window.location.href);
        window.label = h ? h : a && a["default"] ? a["default"] : "";
        var n = window.appRoot + window.label;
        function p(c) {
            document.write('<script src="' + c + '">\x3c/script>')
        }
        function q(c) {
            document.write("<script>" + c + "\x3c/script>")
        }
        function r(c) {
            var d = document.createElement("link");
            d.setAttribute("rel", "stylesheet");
            d.setAttribute("type", "text/css");
            d.setAttribute("href", c);
            document.head.appendChild(d)
        }
        window.initializeOrRedirect = function(c) {
            window.jstiming.load.tick("js_r");
            yt && yt.tv && yt.tv.initializer ? yt.tv.initializer(c) : window.location = "https://web.archive.org/web/20141111080104/http://www.youtube.com/error?src=404"
        }
        ;
        b ? (window.CLOSURE_BASE_PATH = "/javascript/closure/",
        window.loadStylesheets = function() {
            window.h5CssList.forEach(r)
        }
        ,
        p(n + "/lasagna-parse.js"),
        p(CLOSURE_BASE_PATH + "base.js"),
        p("/i18n/input/javascript/deps.js"),
        p("/video/youtube/src/web/javascript/deps-runfiles.js"),
        p(n + "/deps.js"),
        p(n + "/js/base_initializer.js"),
        p(n + "/js/initializer.js"),
        p(n + "/css-list.js"),
        q("loadStylesheets()")) : e ? (window.CLOSURE_NO_DEPS = !0,
        r(n + "/app-prod.css"),
        p(n + "/app-concat-bundle.js")) : (r(n + "/app-prod.css"),
        p(n + "/app-prod.js"),
        (k || l || m) && p(window.environment.player_url));
        window.checkBrokenLabel = function() {
            "undefined" == typeof yt && h && (window.location.href = window.location.href.replace(/([?&])label=[^&]+&?/, "$1stick=0&"))
        }
        ;
        q("checkBrokenLabel()");
        f && (window.environment.player_url = e || b ? "/video/youtube/src/web/javascript/debug-tv-player-en_US.js" : "/video/youtube/src/web/javascript/tv-player-en_US.js");
        g && (e || b ? p(n + "/modules/media-diagnostics-debug.js") : p(n + "/modules/media-diagnostics.js"));
        q("initializeOrRedirect('" + n + "');");
    }
    )();

}

/*
     FILE ARCHIVED ON 08:01:04 Nov 11, 2014 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 20:40:04 Jul 20, 2026.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/
/*
playback timings (ms):
  capture_cache.get: 0.598
  load_resource: 84.669
  PetaboxLoader3.resolve: 45.829
  PetaboxLoader3.datanode: 23.272
*/
