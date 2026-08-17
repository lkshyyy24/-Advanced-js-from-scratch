let btn=document.querySelector("button")
let text=document.querySelector("textarea")

btn.addEventListener("click", () =>{
    let random=Math.floor(Math.random()*91)

    text.value=random;
})