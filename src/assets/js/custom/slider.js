jQuery(function($) {
    /* start closure */
    "use strict";
    /* Markup enhancements */
    // Initialise slideshows
    // Options
    var slideshowOptions = {
        type: "slideshow",
        controlsPosition: "after",
        slideshowInterval: 8e3,
        variableHeight: !1,
        slideshowAutoStart: !0,
        rememberStateInCookie: !1,
        supportCSSImgReplace: !0,
        clearPixelImg: "/assets/images/displacement.png"
    };
    // only initialise slideshow if there's more than one featured item
    0 === $("body.home").length && $(".news-items .section").length > 1 && $(".news-items").compact(slideshowOptions);

});