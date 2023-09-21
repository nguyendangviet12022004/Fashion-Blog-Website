const offButton = document.getElementById("offButton");
const subcribeForm = document.getElementById("subcribe");
const submitButton = document.querySelector("#subcribe button[type=submit]")
const openButton = document.querySelector(".img .content button");
console.log(submitButton)


offButton.addEventListener("click",(event) => {
    subcribeForm.classList.add("off");
    subcribeForm.classList.remove("on");
})


submitButton.addEventListener("click",(event)=>{
    subcribeForm.classList.add("off");
    subcribeForm.classList.remove("on");
})


openButton.addEventListener("click",(event)=>{
    subcribeForm.classList.add("on");
    subcribeForm.classList.remove("off")
    console.log(subcribeForm)
})



// 

const commentButton = document.querySelectorAll("#content ul li.post button.replies");
const comment = document.querySelectorAll("#content ul li.post ul.comment");

const liekButton = document.querySelectorAll(".like");

for(let i = 0 ;i < liekButton.length;i ++)
{
    liekButton[i].addEventListener("click",(event)=>{
        
        event.target.innerHTML = '<i class="fa-solid fa-check"></i>  Liked';
    })
}

for(let i = 0 ;i < commentButton.length;i ++)
{
    commentButton[i].addEventListener("click",(event)=>{
        comment[i].classList.toggle("show");
        comment[i].classList.toggle("off");
    })
}