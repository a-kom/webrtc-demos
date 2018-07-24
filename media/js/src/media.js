'use strict';

// On this codelab, you will be streaming only video (video: true).
const mediaStreamConstraints = {
  video: true,
  // audio: true,
};

// Video element where stream will be placed.
const localVideo = document.querySelector('video');

// Handles success by adding the MediaStream to the video element.
/**
 * Gets local media stream.
 * @param {MediaStream} mediaStream
 */
function gotLocalMediaStream(mediaStream) {
  localVideo.srcObject = mediaStream;
  console.log('Audio tracks %O', mediaStream.getAudioTracks());
  console.log('Video tracks %O', mediaStream.getVideoTracks());
}

// Handles error by logging a message to the console with the error message.
/**
 * Runs on error.
 * @param {Error} error
 */
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);
