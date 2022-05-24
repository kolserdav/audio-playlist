// @ts-check
import Hls from "hls.js";
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
    content-type="video/MP2T"
    src="seg-1-a1.ts">
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
    if (!Hls.isSupported()) {
      console.error('Hls decoder is not supported');
      return;
    }

    var hls = new Hls();
    // bind them together
    hls.attachMedia(audio);
    hls.on(Hls.Events.MEDIA_ATTACHED, function () {
      console.log('video and hls.js are now bound together !');
      hls.loadSource('http://89.223.70.28/file.php?audio=-2001547492_108547492&action=play');
      hls.on(Hls.Events.MANIFEST_PARSED, function (event, data) {
        console.log(data);
      });
    });
    audio.play();

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
      // console.log(41, d)
    } 
    audio.onvolumechange = (d) => {
      console.log(44, d)
    } 
  });
}