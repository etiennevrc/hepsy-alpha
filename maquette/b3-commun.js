/* Maquette B3 : coque commune (rail, en-tête mobile, onglets) et choix du fond, mémorisé sur l'appareil.
   La page déclare la rubrique courante par <body data-page="themes|metier|train|suivi">. */
(function () {
  var page = document.body.dataset.page;
  var ICO = {
    themes: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5"/></svg>',
    metier: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M3 9l9-5 9 5M5 10v8M9.5 10v8M14.5 10v8M19 10v8M3 20.5h18"/></svg>',
    train: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><rect x="4" y="5" width="13" height="15" rx="2"/><path d="M8 3h11a2 2 0 0 1 2 2v13M8 10l2 2 4-4"/></svg>',
    suivi: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M4 20V10M10 20V4M16 20v-7M21 20H3"/></svg>'
  };
  var NAV = [["themes", "Thèmes", "b3-accueil.html"], ["metier", "Le métier", "b3-metier.html"], ["train", "S’entraîner", "b3-entrainement.html"], ["suivi", "Mon suivi", "b3-suivi.html"]];
  function liens() { return NAV.map(function (n) { return '<a href="' + n[2] + '"' + (n[0] === page ? ' aria-current="page"' : '') + '>' + ICO[n[0]] + n[1] + '</a>'; }).join(""); }
  var loupe = '<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.6" aria-hidden="true"><circle cx="7" cy="7" r="5"/><path d="M11 11l4 4"/></svg>';
  var lune = '<svg width="18" height="18" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path d="M13.5 9.6A5.8 5.8 0 0 1 6.4 2.5a5.8 5.8 0 1 0 7.1 7.1z"/></svg>';
  var app = document.querySelector(".app");
  app.insertAdjacentHTML("afterbegin",
    '<aside class="rail"><a class="logo" href="b3-accueil.html"><svg class="chat" viewBox="30 18 200 170" aria-hidden="true"><path d="M52 92 L46 30 L108 62 Z" fill="#2B2A30" stroke="#2B2A30" stroke-width="12" stroke-linejoin="round"/><path d="M208 92 L214 30 L152 62 Z" fill="#E8913A" stroke="#E8913A" stroke-width="12" stroke-linejoin="round"/><ellipse cx="130" cy="122" rx="94" ry="62" fill="#FBF8F2"/><ellipse cx="66" cy="104" rx="34" ry="34" fill="#2B2A30"/><path d="M168 66 C220 62 232 124 196 150 C170 140 160 100 168 66Z" fill="#E8913A"/><ellipse cx="96" cy="126" rx="12" ry="15" fill="#1B1A1F"/><ellipse cx="164" cy="126" rx="12" ry="15" fill="#1B1A1F"/><circle cx="100" cy="120" r="5" fill="#fff"/><circle cx="168" cy="120" r="5" fill="#fff"/><path d="M114 148 Q130 168 146 148 Z" fill="#D9566A"/></svg>Hepsy</a>' +
    '<button class="q" type="button" aria-label="Rechercher">' + loupe + '<span class="lbl">Rechercher</span><kbd>/</kbd></button>' +
    '<nav class="menu" aria-label="Navigation principale">' + liens() + '</nav>' +
    '<div class="bas"><div><span class="fond-l" id="fond-l">Fond</span><div class="fond-choix" role="group" aria-labelledby="fond-l">' +
    '<button type="button" data-t="auto"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><rect x="1.5" y="2.5" width="13" height="9" rx="1.5"/><path d="M5 14h6"/></svg>Système</button>' +
    '<button type="button" data-t="clair"><svg viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><circle cx="8" cy="8" r="3"/><path d="M8 1v1.6M8 13.4V15M1 8h1.6M13.4 8H15M3 3l1.1 1.1M11.9 11.9 13 13M3 13l1.1-1.1M11.9 4.1 13 3"/></svg>Clair</button>' +
    '<button type="button" data-t="sombre">' + lune.replace('width="18" height="18" ', '') + 'Sombre</button></div></div>' +
    '<p><b>Version alpha</b><br>Le contenu évolue. Ta progression reste sur cet appareil, sans compte.</p></div></aside>');
  var col = app.children[1];
  col.insertAdjacentHTML("afterbegin", '<header class="mtete"><a class="logo" href="b3-accueil.html"><svg class="chat" viewBox="30 18 200 170" aria-hidden="true"><path d="M52 92 L46 30 L108 62 Z" fill="#2B2A30" stroke="#2B2A30" stroke-width="12" stroke-linejoin="round"/><path d="M208 92 L214 30 L152 62 Z" fill="#E8913A" stroke="#E8913A" stroke-width="12" stroke-linejoin="round"/><ellipse cx="130" cy="122" rx="94" ry="62" fill="#FBF8F2"/><ellipse cx="66" cy="104" rx="34" ry="34" fill="#2B2A30"/><path d="M168 66 C220 62 232 124 196 150 C170 140 160 100 168 66Z" fill="#E8913A"/><ellipse cx="96" cy="126" rx="12" ry="15" fill="#1B1A1F"/><ellipse cx="164" cy="126" rx="12" ry="15" fill="#1B1A1F"/><circle cx="100" cy="120" r="5" fill="#fff"/><circle cx="168" cy="120" r="5" fill="#fff"/><path d="M114 148 Q130 168 146 148 Z" fill="#D9566A"/></svg>Hepsy</a><button class="q" type="button" aria-label="Rechercher">' + loupe + '</button><button class="tb" type="button" aria-label="Changer de fond">' + lune + '</button></header>');
  document.body.insertAdjacentHTML("beforeend", '<nav class="onglets" aria-label="Navigation principale">' + liens() + '</nav>');

  document.body.insertAdjacentHTML("beforeend", '<a class="retour-avis" href="./">Donner mon avis</a>');
  function lire() { try { return localStorage.getItem("hepsy3-theme") || "auto"; } catch (e) { return "auto"; } }
  function appliquer(t) {
    if (t === "auto") delete document.documentElement.dataset.theme; else document.documentElement.dataset.theme = t;
    try { if (t === "auto") localStorage.removeItem("hepsy3-theme"); else localStorage.setItem("hepsy3-theme", t); } catch (e) {}
    document.querySelectorAll(".fond-choix button").forEach(function (b) { b.setAttribute("aria-pressed", b.dataset.t === t); });
  }
  document.querySelectorAll(".fond-choix button").forEach(function (b) { b.onclick = function () { appliquer(b.dataset.t); try { localStorage.setItem("hepsy3-theme-choisi", "1"); } catch (e) {} }; });
  document.querySelector(".mtete .tb").onclick = function () { appliquer(getComputedStyle(document.documentElement).colorScheme === "dark" ? "clair" : "sombre"); };
  appliquer(lire());
})();
