const video = document.querySelector("#video");
const snapBtn = document.querySelector(".snap-btn");
const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
const strip = document.querySelector("#strip");

async function getVideo() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: true,
      audio: false
    });
    video.srcObject = stream;
    await video.play();
  } catch (err) {
    console.error("Camera access denied:", err);
  }
}

getVideo();

function takePhoto() {
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

  // ✅ convert canvas to image
  const img = document.createElement("img");
  img.src = canvas.toDataURL("image/jpeg", 0.8);
  img.style.width = "200px";
  img.style.margin = "10px";

  strip.prepend(img);
}

snapBtn.addEventListener("click", takePhoto);
