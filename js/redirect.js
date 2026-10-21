/**
 * GitHub Pages has no server redirects. Meta refresh covers browsers
 * without JavaScript. This keeps the query string and any hash.
 */
(function () {
  var body = document.body;
  if (!body) return;
  var dest = body.getAttribute("data-redirect");
  if (!dest) return;
  var hash = window.location.hash;
  var fallback = body.getAttribute("data-redirect-hash");
  if ((!hash || hash === "#") && fallback) hash = "#" + fallback;
  var search = window.location.search || "";
  window.location.replace(dest + search + (hash || ""));
})();
