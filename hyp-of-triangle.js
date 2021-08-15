const inputs = document.querySelectorAll(".side-input");
const submitBtn  = document.querySelector("#btn-submit");
const message =  document.getElementById("message");


submitBtn.addEventListener("click",()=>{
    if(inputs[0].value && inputs[1].value){
 const answer=  sumOfSquares(Number(inputs[0].value),Number(inputs[1].value));
   message.innerText= `Hypotenuse of the given triangle is ${Math.sqrt(answer)}`
    }else{
        message.innerText="Enter all the required inputs"
    }
   
})


function sumOfSquares(num1,num2){
    return num1**2 + num2**2

}