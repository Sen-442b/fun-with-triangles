const inputs = document.querySelectorAll(".side");
const submitBtn  = document.querySelector("#btn-submit");
const message =  document.getElementById("message");


submitBtn.addEventListener("click",()=>{
    if(inputs[0].value>1 && inputs[1].value>1){
const answer = (Number(inputs[0].value)* Number(inputs[1].value))/2;

   message.innerText= `Area of the given triangle is ${answer}`
    }else{
        message.innerText="Enter all the required inputs"
    }
   
})

