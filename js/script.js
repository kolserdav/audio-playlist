// @ts-check
const playerId = '#player';
const player = document.querySelector(playerId);

/**
 * 
 * @returns {HTMLAudioElement}
 */
function createAudio() {
  /**
   * @type {any}
   */
  const div = document.createElement('div');
  div.innerHTML = `<audio
    id="a"
    preload="none"
    src="data/seg-1-a1.ts">
      Your browser does not support the
      <code>audio</code> element.
  </audio>`
  return div.firstChild;
}

window.onload = () => {
  if (!player) {
    console.error('Player div with id', playerId, 'is missing')
  }
  document.querySelector('#play').addEventListener('click', async () => {
    const audio = createAudio();
    console.log(audio)
    setTimeout(() => {
      audio.play();
    }, 0)
  
    audio.onended = () => {
      console.log('ended');
    }
    audio.onloadedmetadata = (d) => {
      console.log(35, d)
    } 
    audio.onloadeddata = (d) => {
      console.log(38, d)
    } 
    audio.ontimeupdate = (d) => {
      console.log(41, d)
    } 
    audio.onvolumechange = (d) => {
      console.log(44, d)
    } 
  });
}