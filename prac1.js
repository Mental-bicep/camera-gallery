let board=document.getElementById("board");
board.height=window.innerHeight;
board.width=window.innerWidth;
let pen=board.getContext("2d");

// window.addEventListener("resize",function(){
//     board.height=this.window.innerHeight;
//     board.width=this.window.innerWidth;
//     draw();
// })

// draw();

// function draw(){
//     pen.fillStyle="yellow";
//     pen.fillRect(0,0,board.width,board.height);
//     pen.strokeStyle="purple";
//     pen.lineWidth=10;
//     pen.strokeRect(0,0,board.width/2,board.height/2);
// }

pen.strokeStyle="yellow";
pen.lineWidth=5;

// pen.beginPath();
// pen.moveTo(10,10);
// // pen.moveTo(20,10);
// pen.lineTo(2100,10);
// pen.stroke();


//! Draw straight lines
// document.body.addEventListener("mousedown",function(e){
//     let x=e.clientX;
//     let y=e.clientY;
//     pen.beginPath();
//     pen.moveTo(x,y);
// })

// document.body.addEventListener("mouseup",function(e){
//     let x=e.clientX;
//     let y=e.clientY;
//     pen.lineTo(x,y);
//     pen.stroke();
// })

// console.log("working")
//! Draw any curves
// let mousePressed=false;
// document.body.addEventListener("mousedown",function(e){
//     let x=e.clientX;
//     let y=e.clientY;
//     pen.beginPath();
//     pen.moveTo(x,y);
//     mousePressed=true;
//     // console.log("mouse pressed");
// })

// document.body.addEventListener("mousemove",function(e){
//     let x=e.clientX;
//     let y=e.clientY;
//     if(mousePressed){
//         pen.lineTo(x,y);
//         pen.stroke();
//     }
// })

// document.body.addEventListener("mouseup",function(){
//     mousePressed=false;
// })


let redBox=document.querySelector(".red");
let blueBox=document.querySelector(".blue");
let greenBox=document.querySelector(".green");
let parent=document.querySelector(".parent");

function getCoordinates(initialY){
    let obj=parent.getBoundingClientRect();
    return initialY-obj.height;
}

redBox.addEventListener("click",function(e){
    pen.strokeStyle="red";
})

blueBox.addEventListener("click",function(e){
    pen.strokeStyle="blue";
})

greenBox.addEventListener("click",function(e){
    pen.strokeStyle="green";
})

let mousePressed=false;
document.body.addEventListener("mousedown",function(e){
    pen.beginPath();
    mousePressed=true;
})

document.body.addEventListener("mousemove",function(e){
    let x=e.clientX;
    let y=e.clientY;
    y=getCoordinates(y);
    if(mousePressed){
        pen.lineTo(x,y);
        pen.stroke();
    }
})

document.body.addEventListener("mouseup",function(e){
    mousePressed=false;
})