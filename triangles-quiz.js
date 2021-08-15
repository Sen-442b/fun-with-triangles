// const questionOne = document.quiz.rect.value;
// const questionTwo = document.quiz.persona.value;
const submitBtn =  document.getElementById("submit-btn");
const message = document.querySelector(".message");
const correctAnswers=["10cm","Ranveer Singh"];
const quizForm = document.querySelector("#quiz")

let score=0;
submitBtn.addEventListener("click",()=>{
   let score =0 ;
   let index = 0;
   const formData = new FormData(quizForm);
   for(value of formData.values()){
    if(value===correctAnswers[index]){
        score++
    }
    index++
 
   }
 message.innerText=`Your score is ${score}/2`
})


