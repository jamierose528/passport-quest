document.addEventListener("DOMContentLoaded", function () {
    const pageFlip = new St.PageFlip(document.getElementById("demoBookExample"), {
      width: 550, // base page width
      height: 733, // base page height
  
      size: "stretch",
      // set threshold values:
      minWidth: 315,
      maxWidth: 1000,
      minHeight: 420,
      maxHeight: 1350,
  
      maxShadowOpacity: 0.5, // Half shadow intensity
      showCover: true,
      mobileScrollSupport: false, // disable content scrolling on mobile devices
    });
  
    // load pages
    pageFlip.loadFromHTML(document.querySelectorAll(".page"));
  
    document.querySelector(".page-total").innerText = pageFlip.getPageCount();
    document.querySelector(".page-orientation").innerText =
      pageFlip.getOrientation();
  
    document.querySelector(".btn-prev").addEventListener("click", () => {
      pageFlip.flipPrev(); // Turn to the previous page (with animation)
    });
  
    document.querySelector(".btn-next").addEventListener("click", () => {
      pageFlip.flipNext(); // Turn to the next page (with animation)
    });
  
    // triggered by page turning
    pageFlip.on("flip", (e) => {
      document.querySelector(".page-current").innerText = e.data + 1;
    });
  
    // triggered when the state of the book changes
    pageFlip.on("changeState", (e) => {
      document.querySelector(".page-state").innerText = e.data;
    });
  
    // triggered when page orientation changes
    pageFlip.on("changeOrientation", (e) => {
      document.querySelector(".page-orientation").innerText = e.data;
    });
  });
  
  try {
    fetch(
      new Request(
        "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
        { method: "HEAD", mode: "no-cors" }
      )
    )
      .then(function (response) {
        return true;
      })
      .catch(function (e) {
        var carbonScript = document.createElement("script");
        carbonScript.src =
          "//cdn.carbonads.com/carbon.js?serve=CE7DC2JW&placement=wwwcssscriptcom";
        carbonScript.id = "_carbonads_js";
        document.getElementById("carbon-block").appendChild(carbonScript);
      });
  } catch (error) {
    console.log(error);
  }
  
  (function (i, s, o, g, r, a, m) {
    i["GoogleAnalyticsObject"] = r;
    (i[r] =
      i[r] ||
      function () {
        (i[r].q = i[r].q || []).push(arguments);
      }),
      (i[r].l = 1 * new Date());
    (a = s.createElement(o)), (m = s.getElementsByTagName(o)[0]);
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m);
  })(window, document, "script", "//www.google-analytics.com/analytics.js", "ga");
  
  ga("create", "UA-46156385-1", "cssscript.com");
  ga("send", "pageview");
  