let video=document.getElementById("video")

const setupCamera=()=> {
    navigator.mediaDevices
     .getUserMedia({video: true})
     .then(stream => this.video.srcObject = stream)
     .catch(console.log);
   }
setupCamera();