/* Écran d'accueil animé de Hepsy, repris du site actuel : joué à la première visite seulement ;
   « Passer l'introduction », Échap, Entrée ou un clic l'arrêtent ; désactivé si le mouvement réduit est demandé. */
var CATFULL = `<svg class="isa" viewBox="0 0 320 330" aria-hidden="true">
<defs>
<radialGradient id="gW" cx="45%" cy="28%" r="85%"><stop offset="0" stop-color="#FFFFFF"/><stop offset=".65" stop-color="#FBF4E9"/><stop offset="1" stop-color="#E9DDCA"/></radialGradient>
<radialGradient id="gO" cx="38%" cy="25%" r="90%"><stop offset="0" stop-color="#FFB760"/><stop offset="1" stop-color="#E37B1F"/></radialGradient>
<radialGradient id="gK" cx="38%" cy="25%" r="90%"><stop offset="0" stop-color="#4C4756"/><stop offset="1" stop-color="#211E27"/></radialGradient>
<radialGradient id="gE" cx="50%" cy="30%" r="75%"><stop offset="0" stop-color="#3B3453"/><stop offset="1" stop-color="#12101A"/></radialGradient>
<radialGradient id="gB" cx="50%" cy="50%" r="50%"><stop offset="0" stop-color="#FF8FA3" stop-opacity=".95"/><stop offset="1" stop-color="#FF8FA3" stop-opacity="0"/></radialGradient>
<linearGradient id="gP" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#FFC1CC"/><stop offset="1" stop-color="#F28FA3"/></linearGradient>
<filter id="fb" x="-30%" y="-60%" width="160%" height="220%"><feGaussianBlur stdDeviation="7"/></filter>
<clipPath id="cH"><ellipse cx="160" cy="136" rx="104" ry="84"/></clipPath>
<clipPath id="cT"><path d="M100 276 C80 236 98 200 160 196 C222 200 240 236 220 276 C206 300 114 300 100 276 Z"/></clipPath>
</defs>
<ellipse cx="160" cy="304" rx="104" ry="13" fill="#000" opacity=".5" filter="url(#fb)"/>
<g class="tail"><path d="M214 280 C284 292 306 228 270 194" fill="none" stroke="url(#gO)" stroke-width="25" stroke-linecap="round"/><circle cx="270" cy="194" r="12.5" fill="url(#gW)"/><path d="M226 276 C262 282 284 262 288 236" fill="none" stroke="#fff" stroke-opacity=".18" stroke-width="5" stroke-linecap="round"/></g>
<g class="torso">
<path d="M100 276 C80 236 98 200 160 196 C222 200 240 236 220 276 C206 300 114 300 100 276 Z" fill="url(#gW)"/>
<g clip-path="url(#cT)"><ellipse cx="102" cy="240" rx="36" ry="46" fill="url(#gK)"/><ellipse cx="224" cy="248" rx="38" ry="40" fill="url(#gO)"/><ellipse cx="152" cy="300" rx="28" ry="11" fill="url(#gO)"/><ellipse cx="160" cy="250" rx="30" ry="34" fill="#fff" opacity=".55"/></g>
</g>
<g fill="url(#gW)"><ellipse cx="128" cy="299" rx="28" ry="15"/><ellipse cx="192" cy="299" rx="28" ry="15"/></g>
<g stroke="#D8CCB8" stroke-width="2" stroke-linecap="round"><path d="M120 295 V303"/><path d="M129 297 V305"/><path d="M137 295 V303"/><path d="M183 295 V303"/><path d="M191 297 V305"/><path d="M199 295 V303"/></g>
<path d="M134 214 C124 240 126 268 131 286" fill="none" stroke="url(#gW)" stroke-width="28" stroke-linecap="round"/>
<ellipse cx="160" cy="214" rx="76" ry="17" fill="#7a6a55" opacity=".28" filter="url(#fb)"/>
<g class="head">
<g class="earL"><path d="M70 112 C54 80 54 48 70 24 C102 32 130 52 144 78 Z" fill="url(#gK)" stroke="#2a2630" stroke-width="7" stroke-linejoin="round"/><path d="M82 96 C73 76 73 56 82 42 C98 48 112 58 122 74 Z" fill="url(#gP)"/></g>
<g><path d="M250 112 C266 80 266 48 250 24 C218 32 190 52 176 78 Z" fill="url(#gO)" stroke="#E98A2E" stroke-width="7" stroke-linejoin="round"/><path d="M238 96 C247 76 247 56 238 42 C222 48 208 58 198 74 Z" fill="url(#gP)"/></g>
<ellipse cx="160" cy="136" rx="104" ry="84" fill="url(#gW)"/>
<g clip-path="url(#cH)"><ellipse cx="86" cy="106" rx="62" ry="60" fill="url(#gK)"/><ellipse cx="242" cy="118" rx="56" ry="66" fill="url(#gO)"/><path d="M160 52 C146 70 146 94 160 108 C174 94 174 70 160 52 Z" fill="url(#gO)"/></g>
<path d="M58 150 L36 158 L54 164 L40 176 L66 176 Z" fill="url(#gW)"/><path d="M262 150 L284 158 L266 164 L280 176 L254 176 Z" fill="url(#gW)"/>
<g class="eyes">
<ellipse cx="116" cy="142" rx="18.5" ry="23" fill="url(#gE)"/><ellipse cx="204" cy="142" rx="18.5" ry="23" fill="url(#gE)"/>
<ellipse cx="116" cy="156" rx="12" ry="8" fill="#6FD3B2" opacity=".5"/><ellipse cx="204" cy="156" rx="12" ry="8" fill="#6FD3B2" opacity=".5"/>
<circle cx="123" cy="133" r="7.5" fill="#fff"/><circle cx="211" cy="133" r="7.5" fill="#fff"/><circle cx="109" cy="151" r="3.6" fill="#fff" opacity=".95"/><circle cx="197" cy="151" r="3.6" fill="#fff" opacity=".95"/><circle cx="125" cy="148" r="1.8" fill="#fff" opacity=".9"/><circle cx="213" cy="148" r="1.8" fill="#fff" opacity=".9"/>
</g>
<ellipse cx="80" cy="172" rx="23" ry="12.5" fill="url(#gB)"/><ellipse cx="240" cy="172" rx="23" ry="12.5" fill="url(#gB)"/>
<path d="M150 162 Q160 155 170 162 Q166 172 160 174 Q154 172 150 162 Z" fill="#F2788C"/><ellipse cx="157" cy="161" rx="3.4" ry="1.7" fill="#fff" opacity=".6"/>
<path d="M160 174 V179" stroke="#2A2530" stroke-width="3" stroke-linecap="round" fill="none"/>
<path d="M144 179 Q160 206 176 179 Z" fill="#C9475F" stroke="#2A2530" stroke-width="3" stroke-linejoin="round"/><path d="M153 193 Q160 200 167 193 Q160 188 153 193 Z" fill="#FF9DAC"/>
<path d="M144 179 Q136 179 131 172 M176 179 Q184 179 189 172" stroke="#2A2530" stroke-width="3" stroke-linecap="round" fill="none"/>
<g stroke="#DAD5E2" stroke-width="2" stroke-linecap="round" fill="none" opacity=".9"><path d="M66 166 Q38 156 14 160"/><path d="M68 177 Q40 180 18 190"/><path d="M254 166 Q282 156 306 160"/><path d="M252 177 Q280 180 302 190"/></g>
</g>
<g class="arm"><path d="M198 218 C232 222 254 200 264 162" stroke="url(#gW)" stroke-width="28" stroke-linecap="round" fill="none"/>
<g class="paw"><ellipse cx="270" cy="142" rx="23" ry="26" fill="url(#gW)"/><ellipse cx="270" cy="151" rx="9.5" ry="7.5" fill="#F5A3B3"/><circle cx="258" cy="137" r="3.8" fill="#F5A3B3"/><circle cx="270" cy="131" r="3.8" fill="#F5A3B3"/><circle cx="282" cy="137" r="3.8" fill="#F5A3B3"/></g></g>
<g class="spark"><path d="M26 76 l3.4 9 9 3.4 -9 3.4 -3.4 9 -3.4 -9 -9 -3.4 9 -3.4z" fill="#E3B65B"/></g><g class="spark" style="animation-delay:.5s"><path d="M298 40 l2.6 7 7 2.6 -7 2.6 -2.6 7 -2.6 -7 -7 -2.6 7 -2.6z" fill="#E3B65B"/></g>
<g transform="translate(300 118)"><path class="heart" d="M0 -5 C-9 -15 -21 0 0 13 C21 0 9 -15 0 -5 Z" fill="#FF8FA3"/></g>
</svg>`;
(function () {
  var reduce = matchMedia("(prefers-reduced-motion: reduce)").matches, vu = false;
  try { vu = !!localStorage.getItem("hepsy3-intro"); } catch (e) {}
  if (location.hash === "#intro") vu = false;
  if (vu || reduce) return;
  var w = document.createElement("div");
  w.innerHTML = '<div class="splash" id="splash" aria-label="Présentation de Hepsy"><button type="button" class="splash-skip">Passer l’introduction</button><div class="stagebox"><div class="row"><div class="word">HEPS<i>Y</i></div><div class="who"><span id="catslot"></span></div></div></div><div class="welcome"><div class="w1"><em>Bienvenue sur</em> <b>HEPS<i>Y</i></b></div><div class="rule"></div><div class="w2">Ton compagnon de révision pour le CAPES d’Histoire-Géographie : des fiches claires, des notions à portée de clic, des repères en couleur et de quoi t’entraîner.</div></div></div>';
  var s = w.firstElementChild; document.body.appendChild(s);
  s.querySelector("#catslot").innerHTML = CATFULL;
  var fini = false, retour = document.activeElement;
  function fin() { if (fini) return; fini = true; document.removeEventListener("keydown", cle, true); s.classList.add("out"); setTimeout(function () { s.remove(); document.dispatchEvent(new Event("hepsy-intro-fin")); }, 900); if (retour && retour.focus) retour.focus(); }
  function cle(e) { if (e.key === "Escape" || e.key === "Enter" || e.key === " ") { e.preventDefault(); e.stopPropagation(); fin(); } }
  s.addEventListener("click", fin); document.addEventListener("keydown", cle, true);
  s.querySelector(".splash-skip").focus({ preventScroll: true });
  try { localStorage.setItem("hepsy3-intro", "1"); } catch (e) {}
  setTimeout(fin, 9000);
})();
