    <div data-bw-component="EventWidget" id="brickwork-event-widget"></div>
    <script>
      /** REQUIRED CONFIGURATION VARIABLES **/
      var BrickworkSoftware = BrickworkSoftware || {};
      BrickworkSoftware.config = BrickworkSoftware.config || {};
      BrickworkSoftware.config.apiRoot = "//westelm-uat.brickworksoftware.com/en/api/v3/";
      BrickworkSoftware.config.baseURL = "//westelm-uat.brickworksoftware.com";
      BrickworkSoftware.config.storeNumber = "987"; // REPLACE WITH YOUR UNIQUE STORE NUMBER AS A *STRING*
      (function (d, s, id) {
        var t, js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
        js = d.createElement(s); js.id = id;
        js.src= "//westelm-uat.brickworksoftware.com/assets/v3/embed.js";
        fjs.parentNode.insertBefore(js, fjs);
        (t = { _e: [], ready: function (f) { t._e.push(f) } });
      }(document, "script", "brickwork-event-embed"));
    </script>
    <noscript>
      Please enable JavaScript to view events powered by 
      <a href="http://brickworksoftware.com/?ref_noscript" rel="nofollow">Brickwork</a>.
    </noscript>