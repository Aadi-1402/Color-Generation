// let btn = document.querySelector("#btn");
// let currMode ="light";

// btn.addEventListener("click", () =>{
//     if(currMode ==="light"){
//         currMode="dark";
//         document.querySelector("body").style.backgroundColor ="black" ;
    
//         }else{
//             currMode="light";
//             document.querySelector("body").style.backgroundColor ="white" ;
    
//         }
//         console.log(currMode);
// });

// #### by writing code in css #### //

// let body =document.querySelector("body");
// btn.addEventListener("click",() => {
//     if(currMode === "light"){
//         currMode="dark";
//         body.classList.add("drk");
//         body.classList.remove("light");
        
//     }
//     else{
//         currMode = "light";
//         body.classList.add("light");
//         body.classList.remove("drk");

//     }
//     console.log(currMode);
// });


let btn = document.querySelector("#btn");
let currMode="light";
let body = document.querySelector("body");
 btn.addEventListener("click",() => {
    if(currMode === "light"){
        currMode="drk";
        body.classList.add("drk");
        body.classList.remove("light");
    }
    else{
        currMode = "light";
        body.classList.add("light");
        body.classList.remove("drk");

    }
    console.log(currMode);

 });
