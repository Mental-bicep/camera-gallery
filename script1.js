let video=document.querySelector("video");

let constraints={
    audio:true,
    video:true
}

// navigator -> global window object
navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
    video.srcObject=stream;
})