let localStream;
const localVideo = document.getElementById("localVideo");
const startButton = document.getElementById("startButton");
startButton.addEventListener("click", start);

async function start() {
  console.log("Requesting local stream");
  startButton.disabled = true;
  //   getDisplayMedia;
  //   getUserMedia
  var stream = await navigator.mediaDevices.getUserMedia({
    audio: true,
    video: true,
  });
  localVideo.srcObject = stream;
  localVideo.play();

  //   try {
  //     const stream = await navigator.mediaDevices.getUserMedia({
  //       audio: true,
  //       video: true,
  //     });
  //     console.log("Received local stream");
  //     // localVideo.srcObject = stream;
  //     // localStream = stream;
  //     // callButton.disabled = false;
  //   } catch (e) {
  //     alert(`getUserMedia() error: ${e.name}`);
  //   }
}
