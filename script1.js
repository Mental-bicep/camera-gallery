let video=document.querySelector("video");
let recordBox=document.querySelector(".record-box");
let recordBtn=recordBox.querySelector(".record-btn");
let captureBox=document.querySelector(".capture-box");
let captureBtn=captureBox.querySelector(".capture-btn");

let captureFlag=false;
let recordFlag=false;
let mediaRecorder;

let constraints={
    audio:true,
    video:true
}
// console.log("working fine");
// navigator -> global window object
navigator.mediaDevices.getUserMedia(constraints).then((stream)=>{
    video.srcObject=stream;
    console.log(stream);
    mediaRecorder=new MediaRecorder(stream);
    console.log(mediaRecorder);
})

recordBox.addEventListener("click",(e)=>{
    if(!mediaRecorder) return ;
    if(recordFlag==false){ 
        recordBtn.classList.add("scale-record");
        console.log("started");
        mediaRecorder.start();
    }
    else {
        mediaRecorder.stop();
        recordBtn.classList.remove("scale-record");
    }
    recordFlag=!recordFlag;
})

captureBox.addEventListener("click",(e)=>{
    if(captureFlag==false) captureBtn.classList.add("scale-capture");
    else captureBtn.classList.remove("scale-capture");

    captureFlag=!recordFlag;
})