/**
 * Old home-page anchors that belonged to the iqFleetSync sales page.
 */
(function () {
  var map = {
    miten: "iqfleetsync.html#miten",
    kenelle: "iqfleetsync.html#kenelle",
    roolit: "iqfleetsync.html#roolit",
    ominaisuudet: "iqfleetsync.html#ominaisuudet",
    hinnat: "iqfleetsync.html#hinnasto",
    luottamus: "iqfleetsync.html#luottamus",
    ukk: "iqfleetsync.html#ukk",
    "tuote-fleetsync": "iqfleetsync.html",
    "tuote-rallynote": "iqrallynote.html",
    "tuote-worklog": "tuntilappu.html",
  };
  var id = (window.location.hash || "").replace(/^#/, "");
  var dest = map[id];
  if (!dest) return;
  var search = window.location.search || "";
  var hashAt = dest.indexOf("#");
  var url = hashAt === -1 ? dest + search : dest.slice(0, hashAt) + search + dest.slice(hashAt);
  window.location.replace(url);
})();
