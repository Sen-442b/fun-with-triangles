const angleOne = document.getElementById("angle-one");
const angleTwo = document.getElementById("angle-two");
const angleThree = document.getElementById("angle-three");
const submitBtn  = document.getElementById("submit-btn");
const message = document.getElementById("message");
const aot = document.getElementById("aot-link");


submitBtn.addEventListener("click",()=>{
    const angleOneValue  = Number(angleOne.value)
    const angleTwoValue  = Number(angleTwo.value)
    const angleThreeValue  = Number(angleThree.value)
    if(angleOneValue>=1 && angleTwoValue>=1 && angleThreeValue>=1){
    if(angleOneValue+angleTwoValue+angleThreeValue===180){
        message.innerText="Yeah it is a triangle"
    
    }else{
        message.innerText="Sorry not a triangle"

    }
}else{
    message.innerText="Kindly fill all the inputs "
}
}

)
