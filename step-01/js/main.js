'use strict';

// On this codelab, you will be streaming only video (video: true).
//비디오만 출력, 오디오는 false로(기본?) 되어있다.
const mediaStreamConstraints = {
  video: true,
};

// Video element where stream will be placed.
//비디오 요소 정의
const localVideo = document.querySelector('video');

// Local stream that will be reproduced on the video.
let localStream;


// Handles success by adding the MediaStream to the video element.
function gotLocalMediaStream(mediaStream) {
  localStream = mediaStream;
  localVideo.srcObject = mediaStream;
}

// Handles error by logging a message to the console with the error message.
//오류 처리
function handleLocalMediaStreamError(error) {
  console.log('navigator.getUserMedia error: ', error);
}

// Initializes media stream.
navigator.mediaDevices.getUserMedia(mediaStreamConstraints)
  .then(gotLocalMediaStream).catch(handleLocalMediaStreamError);


 //카메라에서 비디오 추출 예제