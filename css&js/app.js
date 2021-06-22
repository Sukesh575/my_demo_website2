const backtoTop = document.querySelector("#backtoTop a")
const client_Counter = document.querySelector("#client_Counter")
const experience = document.querySelector("#experience_counter")
const member_counter = document.querySelector("#member_counter")
const awward_Counter = document.querySelector("#awward_Counter")

// let numCounter = 0
// function counter () {
//     document.addEventListener("scroll", function(){

//         let anotherTopScroll = window.scrollY
//         console.log(anotherTopScroll)


//         if (anotherTopScroll >= 2182) {
//             let wraperFunc = setInterval(function(){
//                 client_Counter.innerHTML = numCounter;
//                 numCounter++
//                 if (numCounter >= 50) {
//                     clearInterval(wraperFunc)
//                 }
//             },100)
//         }

//     })
// }
// counter()


function backTO_Top (){
    document.addEventListener("scroll", function(){
        let topScroll = window.scrollY
        if(topScroll >= 100){
            backtoTop.style.display = "block"
        }else{
            backtoTop.style.display = "none"
        }
    })
}
backTO_Top()