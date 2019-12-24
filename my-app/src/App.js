import React, { Component } from 'react';
import { Container,Row, Col} from 'react-bootstrap';
import $ from 'jquery';
import MetaTags from 'react-meta-tags';
import videos1 from '../src/videos/nityananda.mp4';
import Videos2 from '../src/videos/bowlgirl-disgust.mp4';
import Videos3 from '../src/videos/pagpag-disgust.mp4';
import Videos4 from '../src/videos/fear liftandpuppy.mp4';
import Videos5 from '../src/videos/fear-truckfalling.mp4';
import Videos6 from '../src/videos/helicopter-fear.mp4';
import Videos7 from '../src/videos/funny.mp4';
import Videos8 from '../src/videos/kidsinterview.mp4';
import Videos9 from '../src/videos/adoptedgirlsad.mp4';
import Videos10 from '../src/videos/babybox-southkorea.mp4';
import Videos11 from '../src/videos/womensday-sad and happy.mp4';
import Videos12 from '../src/videos/avacado-surprise.mp4';
import Videos13 from '../src/videos/mirnydiamondmine-russia.mp4';
import Videos14 from '../src/videos/penguinpoop-surprise.mp4';
import Videos15 from '../src/videos/asianpaints-angersadhappy.mp4';
import Videos16 from '../src/videos/dominos-sadangryhappy.mp4';
import Image from '../src/images/logowebsite.png';



let mediaRecorder;
let recorddata;
var chunks = [];
let video;

var count = 1
var questionvideo; 
var secondvideo;
var thirdvideo;
var fourthdvideo;
var fifthvideo;
var sixvideo;
var sevenvideo;
var eightvideo;
var ninevideo;
var tenvideo;
var elevenvideo;
var twelvevideo;
var thirteenvideo;
var fourteenvideo;
var fifteenvideo;
var sixteenvideo;


function nextvideo(){
   if(count == 1){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "initial");
  
    document.getElementById('Questionvideo').src += '';
   } else if(count == 2){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "initial");
  
    document.getElementById('secondvideo').src += '';
   } else if(count == 3){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "initial");
  
    document.getElementById('thirdvideo').src += '';
   } else if(count == 4){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "initial");
  
    document.getElementById('fourthdvideo').src += '';
   } else if(count == 5){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "initial");
  
    document.getElementById('fifthvideo').src += '';
   } else if(count == 6){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "initial");
  
    document.getElementById('sixvideo').src += '';
   } else if(count == 7){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "initial");

    document.getElementById('sevenvideo').src += '';

   } else if(count == 8){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "initial");

    document.getElementById('eightvideo').src += '';
   } else if(count == 9){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "initial");

    document.getElementById('ninevideo').src += '';
   } else if(count == 10){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "initial");

    document.getElementById('tenvideo').src += '';
   } else if(count == 11){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "none");
    $('#twelvevideo').css("display", "initial");

    document.getElementById('elevenvideo').src += '';
   } else if(count == 12){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "none");
    $('#twelvevideo').css("display", "none");
    $('#thirteenvideo').css("display", "initial");

    document.getElementById('twelvevideo').src += '';
   } else if(count == 13){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "none");
    $('#twelvevideo').css("display", "none");
    $('#thirteenvideo').css("display", "none");
    $('#fourteenvideo').css("display", "initial");

    document.getElementById('thirteenvideo').src += '';
   } else if(count == 14){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "none");
    $('#twelvevideo').css("display", "none");
    $('#thirteenvideo').css("display", "none");
    $('#fourteenvideo').css("display", "none");
    $('#fifteenvideo').css("display", "initial");

    document.getElementById('fourteenvideo').src += '';
   } else if(count == 15){
    count = count+1;
    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "none");
    $('#twelvevideo').css("display", "none");
    $('#thirteenvideo').css("display", "none");
    $('#fourteenvideo').css("display", "none");
    $('#fifteenvideo').css("display", "none");
    $('#sixteenvideo').css("display", "initial");

    document.getElementById('fifteenvideo').src += '';
   } else if(count == 16){

    $('#Questionvideo').css("display", "none");
    $('#secondvideo').css("display", "none");
    $('#thirdvideo').css("display", "none");
    $('#fourthdvideo').css("display", "none");
    $('#fifthvideo').css("display", "none");
    $('#sixvideo').css("display", "none");
    $('#sevenvideo').css("display", "none");
    $('#eightvideo').css("display", "none");
    $('#ninevideo').css("display", "none");
    $('#tenvideo').css("display", "none");
    $('#elevenvideo').css("display", "none");
    $('#twelvevideo').css("display", "none");
    $('#thirteenvideo').css("display", "none");
    $('#fourteenvideo').css("display", "none");
    $('#fifteenvideo').css("display", "none");
    $('#sixteenvideo').css("display", "none");
    $('#preview').css("display", "none");
    $('#nextbutton').css("display", "none");
    $('#stopbutton').css("display", "none");
    $('#startbutton').css("display", "none");
    $('#videodiv').css("display", "none");
    $('#finaldata').css("display", "block");

    document.getElementById('sixteenvideo').src += '';



   }
   console.log("count", count);
   
}






console.log("questionvideo", questionvideo);

function playVideo(){
  //questionvideo.play();


  console.log("count", count);

//console.log("duration", typeof questionvideo.duration);

   if(count == 1){
    questionvideo.play();
   } else if(count == 2){
    secondvideo.play();
   } else if(count == 3){
    thirdvideo.play();
   } else if(count == 4){
    fourthdvideo.play();
   } else if(count == 5){
    fifthvideo.play();
   } else if(count == 6){
    fifthvideo.pause();
    sixvideo.play();
   } else if(count == 7){
    sevenvideo.play();
   } else if(count == 8){
    eightvideo.play();
   } else if(count == 9){
    ninevideo.play();
   } else if(count == 10){
    tenvideo.play();
   } else if(count == 11){
    elevenvideo.play();
   } else if(count == 12){
    twelvevideo.play();
   } else if(count == 13){
    thirteenvideo.play();
   } else if(count == 14){
    fourteenvideo.play();
   } else if(count == 15){
    fifteenvideo.play();
   } else if(count == 16){
    sixteenvideo.play();
   }


  

  //var questionduration = Math.round(questionvideo.duration);
  //console.log("questionduration", questionduration);

 
  select();
   

  // setTimeout(function(){ 
  //   select();

  //   }, questionduration*1000);

  
}



function select() {


  var mediaConstraints = {
    audio: true,
    video: { 
      frameRate: { min: 29, max: 50, ideal: 29 },
      width: {ideal: 1280},
      height: {ideal: 1280}    
    }
        
   
};


navigator.mediaDevices.getUserMedia(mediaConstraints)
.then(function(stream) {
   console.log("stream", stream);
  mediaRecorder = new MediaRecorder(stream);
  //video = document.querySelector("video");
  video = document.getElementById("preview");
  video.srcObject = stream;
  recorddata = stream;
  mediaRecorder.start();

console.log("1111111111111");
}).catch(err => {
  console.log("Error", err);
})
// function onMediaSuccess(stream) {
//   console.log("stream", stream);
//   mediaRecorder = new MediaRecorder(stream);
//   let video = document.querySelector("video");
//   video.srcObject = stream;
//   recorddata = stream;
//   mediaRecorder.start();

// console.log("1111111111111");

// }
// function onMediaError() {
//   console.log("22222222222");
//   }
}


function stoprecording(stream){
  console.log("mediaRecorder.state", mediaRecorder);
 if(mediaRecorder !== undefined){
   if(mediaRecorder.state !== "inactive"){  
    mediaRecorder.stop();
    stop(video.srcObject);


    if(count == 1){
      questionvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 2){
      secondvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 3){
      thirdvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 4){
      fourthdvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 5){
      fifthvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 6){
      sixvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 7){
      sevenvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 8){
      eightvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 9){
      ninevideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 10){
      tenvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 11){
      elevenvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 12){
      twelvevideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 13){
      thirteenvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 14){
      fourteenvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 15){
      fifteenvideo.pause();
      $('#nextbutton').prop('disabled', true);
     } else if(count == 16){
      sixteenvideo.pause();
      $('#nextbutton').prop('disabled', true);

     }
    //questionvideo.pause();
    mediaRecorder.ondataavailable = handleDataAvailable;
   }
 } else {
   console.log("aaaaaaaaaaaa");
 }
}

function handleDataAvailable (e) {
  // POST/PUT "Blob" using FormData/XHR2
  
  if(e.data != undefined){
    
   if(chunks.length == 0){
    chunks.push(e.data);


    let recordedBlob = new Blob(chunks, { type: 'video/webm' });


    var blobURL = URL.createObjectURL(recordedBlob);
   
    //convertStreams(e.data);
  
    
    //console.log('<a href="' + blobURL + '">' + blobURL + '</a>');
    var formdata = new FormData();
    var Now = new Date();
    var milliseconds = Now.getTime();
    var videofilename = milliseconds+".mp4";
    formdata.append('videoname',recordedBlob, videofilename);
    var xhr = new XMLHttpRequest();
  
    xhr.onload = function() {
      if (this.status == 200) {
        chunks = [];
     
      var jsonResponse = JSON.parse(xhr.response);
      var videoname = jsonResponse.video;

      $('#nextbutton').prop('disabled', false);
      console.log("11111111111111111", videoname);
       
      
      


      //this.setState({ streamvideo: videoname });
          
      }
    };
    


    setTimeout(function(){ 
       
      xhr.open('post', 'http://localhost:2000/upload/interview/uploadvideo');
    xhr.send(formdata);
    
    }, 2000);

  
    
  
    console.log("blobURL", blobURL);




   } 

   
    console.log("e.data", e.data);
    console.log("chunks", chunks);
  }
  
  console.log("chunks11111111111111", chunks.length);

  

  
 // download();


};


function stop(stream) {
  stream.getTracks().forEach(track => track.stop());
}


function download(e) {

  console.log("chunks123", chunks);


var blob = new Blob(chunks, {
  type: "video/webm"
});
var url = URL.createObjectURL(blob);
console.log("url", url);
var a = document.createElement("a");
document.body.appendChild(a);
a.style = "display: none";
a.href = url;
a.download = "test.webm";
a.click();
//window.location.reload(true);
var data =  window.URL.revokeObjectURL(url);
console.log("data", data);
console.log("data", data);

  
}




function closedtap(){
  $('#instructiondata').css("display", "none");
}










const buttonstyles = {
  float:"right",
  marginTop: "10px"
}

const startalign = {
  float:"right",
  marginRight:"10px",
  height:"38px"
}
const stopalign = {
  float:"right",
  marginRight:"10px",
  height:"38px"
}
const iframevideo = {
  width: "100%",
  height: "408px",
}
const iframevideo1 = {
  display: "none",
  width: "100%",
  height: "408px",
}

const buttons = {
  marginTop:"1%",
  marginRight: "23px"
}

const recordvideo = {
  marginTop:"3%",
  width: "39%",
  height: "160px"
}

const finalpage = {
  display: "none",
  textAlign: "center",
  backgroundColor: "black",
  marginTop:"70px"
}


const modelpopup = {
  position: "fixed",
  zIndex: "9999",
  width: "80%",
  height: "350px",
  overflow: "auto",
  marginLeft: "110px",
  marginTop: "58px",
}

const closepopup = {
  cursor : "pointer",
  marginRight: "10px",
  color: "red"
}


class App extends Component {

 




  render(){
      
      return (
        <div>
          <Recordvideo />
         <QuestionVideo/>
        </div>
        );
      }
    }



    
        


class QuestionVideo extends Component {
  componentDidMount(){
    questionvideo = document.getElementById("Questionvideo");
    secondvideo = document.getElementById("secondvideo");
    thirdvideo = document.getElementById("thirdvideo");
    fourthdvideo = document.getElementById("fourthdvideo");
    fifthvideo = document.getElementById("fifthvideo");
    sixvideo = document.getElementById("sixvideo");
    sevenvideo = document.getElementById("sevenvideo");
    eightvideo = document.getElementById("eightvideo");
    ninevideo = document.getElementById("ninevideo");
    tenvideo = document.getElementById("tenvideo");
    elevenvideo = document.getElementById("elevenvideo");
    twelvevideo = document.getElementById("twelvevideo");
    thirteenvideo = document.getElementById("thirteenvideo");
    fourteenvideo = document.getElementById("fourteenvideo");
    fifteenvideo = document.getElementById("fifteenvideo");
    sixteenvideo = document.getElementById("sixteenvideo");
    console.log("questionvideo", questionvideo);
  }

  render(){
      
      return (
        <Container>
           <Row>
           <Col md="2">

           </Col>
           <Col md="8">
        <div className="card" id="videodiv">
         <video id="Questionvideo" src={videos1} autoPlay={false} type={"video/mp4"} style={iframevideo} controls></video>
         <video id="secondvideo" src={Videos2} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="thirdvideo" src={Videos3} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="fourthdvideo" src={Videos4} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="fifthvideo" src={Videos5} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="sixvideo" src={Videos6} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="sevenvideo" src={Videos7} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="eightvideo" src={Videos8} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="ninevideo" src={Videos9} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="tenvideo" src={Videos10} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="elevenvideo" src={Videos11} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="twelvevideo" src={Videos12} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="thirteenvideo" src={Videos13} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="fourteenvideo" src={Videos14} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="fifteenvideo" src={Videos15} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
         <video id="sixteenvideo" src={Videos16} autoPlay={false} type={"video/mp4"} style={iframevideo1} controls></video>
        
         </div>
         <div className="card" id="finaldata" style={finalpage}>
         <img src={Image} style={{height:"100px"}} title="RecruAssist" />
          <h3 style={{color:"white"}}>Thanks for participation</h3>
          </div>
        
           </Col>
           <Col md="2">
                
           </Col>
           </Row>
        </Container>
        
    );
  }
}



class Recordvideo extends Component {

  

  render(){
      
      return (

        <Container fluid="true">
         
        <Row>
          <Col md="6">
          <div>
          <video style={recordvideo} autoPlay={true} id="preview"></video>
        </div>
          </Col>
         <Col md="6">
         <div style={buttons}>
            <button type="button" id="nextbutton" style={startalign} onClick={nextvideo} className="btn btn-success">Next</button>
            <button type="button" id="stopbutton" style={stopalign} onClick={stoprecording} className="fa fa-stop btn btn-danger"></button>
            <button type="button" id="startbutton" style={startalign}  onClick={playVideo} className="btn btn-success"><i class="fas fa-video"></i></button>
            </div>
         </Col>
         
        </Row>

        </Container>
        );
      }

    }


    class Instructions extends Component {

  

      render(){
          
          return (
    
            <Container fluid="true">
               <Row>
               
               <Col md="12">
               <div id="instructiondata" style={modelpopup}>
               <div className="card">
                <div className="card-heading" style={{backgroundColor:"aliceblue"}}>
                <div class="close" style={closepopup} onClick={closedtap}>&times;</div>
                    <h3 id="qusreqid" class="text-center">Instructions</h3>
               </div>
               <div className="card-body">
                        <h5>1.</h5>
                        <h5>2.</h5>
                        <h5>3.</h5>
                        <h5>4.</h5>
                        <h5>5.</h5>
                        <h5>6.</h5>
                        <h5>7.</h5>
                        <h5>8.</h5>
               </div>
               </div>
             </div>
               </Col>
               </Row>
             
            </Container>
            );
          }
    
        }






export default App;
