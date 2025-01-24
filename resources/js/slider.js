
  jQuery(function() {
    tpj = jQuery;

    if(tpj("#rev_slider_3_1").revolution == undefined){
        revslider_showDoubleJqueryError("#rev_slider_3_1");

      }else{

        revapi3 = tpj("#rev_slider_3_1").show().revolution({
        sliderType:"standard",
        visibilityLevels:"1240,1240,778,480",
        gridwidth:"1240,1240,778,480",
        gridheight:"857,857,450,350",
        perspective:600,
        perspectiveType:"global",
        editorheight:"857,857,450,350",
        responsiveLevels:"1240,1240,778,480",
        progressBar:{disableProgressBar:true},
        navigation: {
          onHoverStop:false,
          arrows: {
            enable:false,
            style:"hesperiden",
            hide_onmobile:true,
            hide_under:778,
            hide_onleave:true,
            left: {
              h_offset:30
            },
            right: {
              h_offset:30
            }
          }
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid:true
        },
      });
    }
  });
