(function() {

    var __hs_cta_json = {"css":"a#cta_button_1769626_4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5 {\n  -webkit-font-smoothing:antialiased !important; \n  cursor:pointer !important; \n  -moz-user-select:none !important; \n  -webkit-user-select:none !important; \n  -o-user-select:none !important; \n  user-select:none !important; \n  display:inline-block !important; \n  font-weight:normal !important; \n  text-align:center !important; \n  text-decoration:none !important; \n  font-family:sans-serif !important; \n  background:rgb(53,116,227) !important; \n  color:rgb(255, 255, 255) !important; \n  border-radius:6px !important; \n  border-width:0px !important; \n  transition:all .4s ease !important; \n  -moz-transition:all .4s ease !important; \n  -webkit-transition:all .4s ease !important; \n  -o-transition:all .4s ease !important; \n  text-shadow:none !important; \n  line-height:1.5em !important; \n  padding:6px 18px !important; \n}\na#cta_button_1769626_4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5:hover {\nbackground:rgb(58,127,249) !important; \ncolor:rgb(255,255,255) !important; \n}\na#cta_button_1769626_4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5:active, #cta_button_1769626_4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5:active:hover {\nbackground:rgb(42,92,181) !important; \ncolor:rgb(244,244,244) !important; \n}\n\n","image_html":"<a id=\"cta_button_1769626_4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5\" class=\"cta_button\" href=\"https://info.liquidweb.com/cs/c/?cta_guid=4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5&placement_guid=ff21f374-9fe6-46ad-9d6c-c2b70913f0bf&portal_id=1769626&canon=https%3A%2F%2Fwww.liquidweb.com%2Fkb%2Fhow-to-install-apache-on-centos-7%2F&redirect_url=APefjpGTWSYJUyHoYfHumJPubJGaOxOgNnRm0NNQywylDbSDBTQFmkUwMaC4cANfOpHOVuZyjnJwd_J-MnnuFWtQ7yFbyPie1nO6ItZHiQTIT7GbK_zLJ85NcxxMJqZkIg8uyybCwswp&click=14a50473-6afb-4d2f-8836-f3768cb1436e&hsutk=c7a0000015b81a8e12fe01652e67ffc7&utm_referrer=https%3A%2F%2Fwww.google.com%2F\"  target=\"_blank\"  cta_dest_link=\"https://www.liquidweb.com/products/vps/\"><img id=\"hs-cta-img-ff21f374-9fe6-46ad-9d6c-c2b70913f0bf\" class=\"hs-cta-img \" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Save 33% for 3 Months on VPS Plans\" src=\"https://cdn2.hubspot.net/hubfs/1769626/hub_generated/resized/64412643-19ea-4b5c-a759-ce39a7a82a8f.gif\" /></a>","is_image":true,"placement_element_class":"hs-cta-ff21f374-9fe6-46ad-9d6c-c2b70913f0bf","raw_html":"<a id=\"cta_button_1769626_4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5\" class=\"cta_button \" href=\"https://info.liquidweb.com/cs/c/?cta_guid=4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5&placement_guid=ff21f374-9fe6-46ad-9d6c-c2b70913f0bf&portal_id=1769626&canon=https%3A%2F%2Fwww.liquidweb.com%2Fkb%2Fhow-to-install-apache-on-centos-7%2F&redirect_url=APefjpGTWSYJUyHoYfHumJPubJGaOxOgNnRm0NNQywylDbSDBTQFmkUwMaC4cANfOpHOVuZyjnJwd_J-MnnuFWtQ7yFbyPie1nO6ItZHiQTIT7GbK_zLJ85NcxxMJqZkIg8uyybCwswp&click=14a50473-6afb-4d2f-8836-f3768cb1436e&hsutk=c7a0000015b81a8e12fe01652e67ffc7&utm_referrer=https%3A%2F%2Fwww.google.com%2F\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.liquidweb.com/products/vps/\" title=\"Save 33% for 3 Months on VPS Plans\"><span style=\"color: #ffffff; font-size: 24px; font-family: sans-serif; line-height: 1.5em;\">New Call-to-action</span></a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }

            html = __hs_cta_json.raw_html;
        }

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('ff21f374-9fe6-46ad-9d6c-c2b70913f0bf');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', 'ff21f374-9fe6-46ad-9d6c-c2b70913f0bf', '4e9fcb5d-1023-4058-8a5f-f1f77a4cccd5']);
}());
