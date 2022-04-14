const txtInput = document.querySelector("#txt-input");
const btnTrnslt = document.querySelector("#btn-trnslt");
const output = document.querySelector("#output");

btnTrnslt.addEventListener("click", clickHandler) 

function clickHandler (){
    var inputText = txtInput.value;

    fetch(getTranslationURL (inputText))
    .then(response => response.json())
    .then (json => {
var translatedText = json.contents.translated;
output.innerText = translatedText;
    })
    .catch(errorHandler)
};

function errorHandler(error){
    console.log("error occured", error)
    alert ("server is down my frend ! please come after sometime")
}

function getTranslationURL(text){
    return serverURL + "?" + "text=" + text
}

var serverURL = "https://api.funtranslations.com/translate/yoda.json"
