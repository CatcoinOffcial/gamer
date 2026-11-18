(() => {
  // Meme folder: the 4 images seen in the original, then the rest; duplicated for a seamless loop
  const order = [5, 6, 7, 1, 2, 3, 4];
  const track = document.getElementById('track');
  const html = order.map(n => `<div class="item"><img src="assets/cats/gamer-${n}.png" alt="GAMER meme ${n}" loading="lazy"></div>`).join('');
  track.innerHTML = html + html;

  // Music toggle (assets/music.mp3). Hidden if the file is not present.
  const a = document.getElementById('audio'), b = document.getElementById('music');
  a.volume = 0.5;
  a.addEventListener('error', () => { b.hidden = true; });
  b.addEventListener('click', async () => {
    if (a.paused) { try { await a.play(); b.textContent = '♪ MUSIC: ON'; } catch (e) { b.hidden = true; } }
    else { a.pause(); b.textContent = '♪ MUSIC: OFF'; }
  });
})();
