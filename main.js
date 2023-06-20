var SpeechRecognition = window.webkitSpeechRecognition;
var recognition = new SpeechRecognition();

function start()
{

    document.getElementById("textbox").innerHTML = "";
    recognition.start();
}

recognition.onresult = function(event) {

    console.log(event);
    var Content = event.results[0][0].transcript;
    console.log(Content);
    speak();
    document.getElementById("textbox").innerHTML = Content;

}

function speak(){

    var synth = window.speechSynthesis;

    speak_data = document.getElementById("textbox").ariaValueMax;

    var utterThis = new SpeechSynthesisUtteranace(speak_data);

    synth.speak(utterThis);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({

    width:360,
    height:250,
    image_format : 'png',
    png_quality:90
});




