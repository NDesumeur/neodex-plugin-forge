// lancé par le test « local » de NeoDex : choisit un morceau intégré, lance la partie, tape quelques coups,
// vérifie que la chanson avance et que les notes sont jugées, puis pause (avec NEO_SHOTS : garde des images du jeu)
module.exports = async ({ pj, sleep }) => {
  const key = k => pj(`document.dispatchEvent(new KeyboardEvent('keydown', {key: '${k}', bubbles: true})), 0`);
  const label = () => pj(`document.getElementById('gc').getAttribute('aria-label') || ''`);
  const shot = async n => { if (!process.env.NEO_SHOTS) return; const d = await pj(`document.getElementById('gc').toDataURL()`); require('fs').writeFileSync(require('path').join(process.env.NEO_SHOTS, 'Forge-' + n + '.png'), Buffer.from(d.split(',')[1], 'base64')); };
  await pj(`document.querySelector('#rhSongs .rhSong .btn')?.click(), 0`); await sleep(1000);  // l'étiquette « prêt » du morceau d'avant doit d'abord disparaître
  for (let i = 0; i < 40 && !/: prêt,/.test(await label()); i++) await sleep(500);
  if (!/: prêt,/.test(await label())) throw new Error('le morceau devait se préparer : « ' + await label() + ' »');
  await shot('0-pret');
  await pj(`window.__e = []; addEventListener('error', e => __e.push(e.message)); addEventListener('unhandledrejection', e => __e.push(String(e.reason?.message || e.reason))); 0`);
  await key(' '); await sleep(6500);
  const errs = await pj(`window.__e.join(' | ')`); if (errs) throw new Error('erreur : ' + errs);
  const judged = l => { const m = /: en jeu, score (\d+), combo \d+, parfait (\d+), bien (\d+), ok (\d+), raté (\d+)/.exec(l); return m ? +m[2] + +m[3] + +m[4] + +m[5] : 0; };
  for (let i = 0; i < 80 && judged(await label()) < 3; i++) { await key(i % 2 ? 'f' : 'j'); await sleep(300); }  // le morceau lent commence par une intro sans notes
  await shot('1-partie');
  const l = await label(), m = /: en jeu, score (\d+), combo \d+, parfait (\d+), bien (\d+), ok (\d+), raté (\d+)/.exec(l);
  if (!m || +m[2] + +m[3] + +m[4] + +m[5] < 3) throw new Error('la partie devait avancer et des notes être jugées : « ' + l + ' »');
  // la manette : une fausse manette ; A puis la croix frappent le temps
  await pj(`(() => { window.__pad = {buttons: Array.from({length: 17}, () => ({pressed: false})), axes: [0, 0]}; navigator.getGamepads = () => [window.__pad]; return 0; })()`);
  const pad = async (b, on) => { await pj(`(__pad.buttons[${b}].pressed = ${on}, 0)`); await sleep(120); };
  const tap = () => pj(`document.getElementById('gc').__rh.st().tap`);
  const t0 = await tap(); await pad(0, true); await pad(0, false); const t1 = await tap(); await sleep(150); await pad(14, true); await pad(14, false); const t2 = await tap();
  if (!(t1 > t0 && t2 > t1)) throw new Error('la manette devait frapper le temps : ' + [t0, t1, t2]);
  await key('p'); for (let i = 0; i < 10 && !/: pause,/.test(await label()); i++) await sleep(200);
  if (!/: pause,/.test(await label())) throw new Error('P devait mettre en pause : « ' + await label() + ' »');
  // l'écran de fin et sa courbe de précision (une partie inventée : juste au début, des ratés au milieu)
  await pj(`(() => { const T = document.getElementById('gc').__rh, rh = T.st(), L = rh.c.len, h = []; for (let i = 0; i < 200; i++) { const t = i / 200 * L, mid = t > L * .4 && t < L * .6; h.push([t, mid ? (i % 3 ? 1 : 0) : (i % 7 ? 3 : 2)]); } T.finish(h); return 0; })()`);
  await sleep(1200); await shot('2-fin');
  const end = await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); return [rh.mode, rh.hist.length].join(','); })()`);
  if (end !== 'over,200') throw new Error('écran de fin attendu : ' + end);
  // les touches au choix : une case, puis X ; elle s'affiche en haut ; PAR DÉFAUT remet les touches d'origine
  const kb = await pj(`(async () => { const v = document, b = v.querySelector('.kb[data-a="a"][data-i="0"]'), def = b.textContent; b.click();
    v.dispatchEvent(new KeyboardEvent('keydown', {key: 'x', bubbles: true})); await new Promise(r => setTimeout(r, 50));
    const set = [b.textContent, v.querySelector('.kbA').textContent]; v.getElementById('kbReset').click(); return [def, ...set, b.textContent].join(','); })()`);
  if (!/^(\w),X,X\/\w,\1$/.test(kb)) throw new Error('touches au choix : ' + kb);
  await pj("(document.querySelector('.kbRow').scrollIntoView({block: 'center'}), 0)"); await sleep(300); await shot('3-touches');
  // l'armurerie se remplit (l'arme de la partie inventée y est), la commande du jour choisit l'arme
  const arm = await pj(`document.getElementById('gc').__rh.arm()`);
  if (!/^[1-9]\d* \/ 36 armes · lignes : fer, bronze/.test(arm)) throw new Error('armurerie : ' + arm);
  await pj("(document.getElementById('fgArm').scrollIntoView({block: 'center'}), 0)"); await sleep(300);
  // l'enchantement : un 4e acte de runes (gauche, droite, en alternance, sans notes tenues), puis la lueur sur l'arme finie
  await pj(`(() => { const s = document.getElementById('fgEnch'); s.value = '1'; s.dispatchEvent(new Event('change')); return 0; })()`); await sleep(1000);
  for (let i = 0; i < 40 && !/: prêt,/.test(await label()); i++) await sleep(500);
  const en = await pj(`(() => { const N = document.getElementById('gc').__rh.st().notes, R = N.filter(n => n.act === 3); return [new Set(N.map(n => n.act)).size, R.length > 4, R.every(n => !n.len), R.some(n => n.side < 0) && R.some(n => n.side > 0)].join(','); })()`);
  if (en !== '4,true,true,true') throw new Error('4e acte : ' + en);
  await shot('4-runes');
  await pj(`(() => { const rh = document.getElementById('gc').__rh.st(); for (const n of rh.notes) if (n.act === 3) { n.judged = 1; } rh.acts[3] = {sum: 9.5, n: 10}; return 0; })()`);
  await pj(`(() => { const T = document.getElementById('gc').__rh, rh = T.st(), L = rh.c.len, h = []; for (let i = 0; i < 200; i++) h.push([i / 200 * L, 3]); T.finish(h); return 0; })()`);
  await sleep(1200); await shot('5-enchantee');
  const ench = await pj(`document.getElementById('gc').__rh.st().ench?.[0] || ''`);
  await pj(`(() => { const s = document.getElementById('fgEnch'); s.value = '0'; s.dispatchEvent(new Event('change')); return 0; })()`);
  if (ench !== 'étoiles') throw new Error('enchantement attendu « étoiles » : ' + ench);
  return l + ' · armurerie ok · enchantement ok';
};
