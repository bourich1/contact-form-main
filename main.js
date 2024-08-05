const checkBox  = document.querySelectorAll('.query');
const btnSubmit = document.querySelector("button");
const inputs    = document.querySelectorAll('.inp');
const Check = document.querySelectorAll(".inpe");
const errorcheck = document.querySelectorAll(".error-check");
// select one input only
checkBox.forEach(chekItem =>{
    chekItem.addEventListener('change' , ()=>{
        if(chekItem.checked){
            
            checkBox.forEach(ortherCheckeBox  =>{
                if(ortherCheckeBox !== chekItem){
                    ortherCheckeBox.checked = false;
                    btnSubmit.classList.remove("disabled");
                }
            })
        }
    })
});

// function test(){
//     Check.forEach(err =>{
//         if(err.checked === true){
//             console.log("yess");
//         }else{
//             errorcheck.forEach(er =>{
//                 er.classList.remove("hide")
//             })
//         }
//     })
// }

btnSubmit.addEventListener("click" , ()=>{
    
    inputs.forEach(inp =>{
        if(inp.value !== ""){
        
            
            
        }else if(inp.value === ""){
             inp.nextElementSibling.classList.remove("hide");
             
        }
    //    if(inp.checked === true){
    //     console.log(inp)
    // }else if(){
    //     inp.nextElementSibling.classList.remove("hide")
    // }
    })
});


