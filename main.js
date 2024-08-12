const btnSubmit = document.querySelector("button");
const inputs    = document.querySelectorAll('.inp');
const Check = document.querySelectorAll(".inpe");
const errorcheck = document.querySelector(".error-check");
const checkInput = document.querySelector(".check");


function checking(){
    if(Check[0].checked === true || Check[1].checked === true){
        errorcheck.classList.add("hide")
    }else{
        errorcheck.classList.remove("hide")
    }
   for (let i = 0; i < inputs.length; i++) {
    if(inputs[i].value === ""){
       if(inputs[i].dataset.err === `${inputs[i].dataset.err}`){
        document.querySelector(`.${inputs[i].dataset.err}`).classList.remove("hide")
       }
    }else{
        if(inputs[i].dataset.err === `${inputs[i].dataset.err}`){
            document.querySelector(`.${inputs[i].dataset.err}`).classList.add("hide")
           }
    }
    
}
if(checkInput.checked === true){
    document.querySelector(".err").classList.add("hide")
}else{
    document.querySelector(".err").classList.remove("hide")
    
}
}

btnSubmit.addEventListener("click" , ()=>{
    checking();
});
document.querySelector(".form").addEventListener("submit" , (event)=>{
    event.preventDefault();
    sentSuccces();
    
});

function sentSuccces(){
    document.querySelector(".msg-scuses").classList.remove("hide");
    document.querySelector(".form").innerHTML = `<div style="width:100%;display:flex;justify-content:center; align-items:center;">
    <img src="success-svgrepo-com.svg" alt="" style="width: 80%;">
    </div>`
    setTimeout(() => {
        window.location.reload();
    }, 3000);
}

