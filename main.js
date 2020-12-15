var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start(){
 document.getElementById("textarea").innerHTML="";
 recognition.start();
}

recognition.onresult=function run(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    console.log(content);
    document.getElementById("textarea").innerHTML=content;
    if (content == "take my selfie"){
        speak();
    }
}

function speak(){
 var synthysys=window.speechSynthesis;
 speak_data="taking your selfie in 5 seconds";
 var utterthis=new SpeechSynthesisUtterance(speak_data);
 synthysys.speak(utterthis);
 Webcam.attach(camera);
 setTimeout(function() {
     takephoto();
     save();
 },5000)
}

Webcam.set({
width:250,
height:360,
image_format:'png',
png_quality:100
});
camera=document.getElementById("camera");

function takephoto(){
 Webcam.snap(function(data_uri){
     document.getElementById("result").innerHTML='<img src="'+data_uri+'" id="capture_pic">';
 });   
}

function save() {
    link=document.getElementById("link");
    image=document.getElementById("capture_pic").src;
    link.href=image;
    link.click();
}