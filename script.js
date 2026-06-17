function startAI(){

let recognition = new webkitSpeechRecognition();

recognition.lang = "kn-IN";

recognition.start();

recognition.onresult = function(event){

let text = event.results[0][0].transcript;

document.getElementById("kannada").innerHTML =
"Kannada: " + text;

document.getElementById("english").innerHTML =
"English: Demo Translation";

let speech =
new SpeechSynthesisUtterance(
"Hello, Welcome to AI English Tutor"
);

speech.lang = "en-US";

speechSynthesis.speak(speech);

};

}
