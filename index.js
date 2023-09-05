const s=document.querySelector('.nav-language');
const d=document.querySelector('.nav-language-drop');
const r=document.querySelectorAll('.c');
const l=document.querySelector('.l');
const j=()=>{
r.forEach((e)=>{
    e.addEventListener('click',()=>{
        const a=e.innerText;
        console.log(a);
        console.log(l);
        l.innerText=a;
    })
})
}
s.addEventListener('mouseenter',()=>{
    d.style.display="flex";
})
d.addEventListener('mouseenter',()=>{
    d.style.display="flex";
})
d.addEventListener('mouseleave',()=>{
    d.style.display="none";
})
s.addEventListener('mouseleave',()=>{
    d.style.display="none";
})
j();