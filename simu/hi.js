document.addEventListener('DOMContentLoaded' , ()=>{
    console.log("done came to the dom content loader",)
    $("#click-me").on("click",()=>{
        console.log("button clicked")
    })
})