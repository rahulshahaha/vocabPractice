var data = null;
var numberOfQuestions = 0;
var currentQuestion = 0;
var dataJSON;

var word1 = document.getElementById('word1');
var word2 = document.getElementById('word2');
var word3 = document.getElementById('word3');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');

var xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        dataJSON = JSON.parse(this.responseText);
        numberOfQuestions = dataJSON.quizlist.length;
        handleData();
	}
});

xhr.open("GET", "https://twinword-word-association-quiz.p.rapidapi.com/type1/?area=gre&level=10");
xhr.setRequestHeader("x-rapidapi-host", "twinword-word-association-quiz.p.rapidapi.com");
xhr.setRequestHeader("x-rapidapi-key", "3a99267676msh9d8c78a636dcd41p12797cjsn3b6fab53e8a6");

xhr.send(data);


function handleData(){
    

    word1.innerHTML = dataJSON.quizlist[currentQuestion].quiz[0];
    word2.innerHTML = dataJSON.quizlist[currentQuestion].quiz[1];
    word3.innerHTML = dataJSON.quizlist[currentQuestion].quiz[2];

    option1.innerHTML = dataJSON.quizlist[currentQuestion].option[0];
    option2.innerHTML = dataJSON.quizlist[currentQuestion].option[1];

    console.log(dataJSON);

}


function next(){
    if(currentQuestion != numberOfQuestions - 1){
        currentQuestion++;
    }else{
        currentQuestion = 0;
    }
    handleData();
}