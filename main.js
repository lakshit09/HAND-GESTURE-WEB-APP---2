prediction_1 = "";


Webcam.set({
    width:350,
    height:300,
    image_format : 'png',
    png_quality:90
});
Webcam.attach('#camera');
camera = document.getElementById("camera");

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/nr3pFa2kU/model.json', modelLoaded);

function take_snapshot()
{
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version:', ml5.version);

function modelLoaded()
{
    console.log('Model Loaded');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The prediction is "+prediction_1;
    var utherThis = new SpeechSynthesisUtterance(speak_data_1);
    synth.speak(utherThis);
}