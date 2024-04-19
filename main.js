const sec = document.querySelectorAll('.iSec')

const options = {
    root:null,
    threshold:0.1,
    rootMargin:"0px"
}

const observer = new IntersectionObserver(function(entries,observer){
    entries.forEach((elem)=>{
        if(!elem.isIntersecting){
            elem.target.classList.remove('show_anim')
            return
        }
        elem.target.classList.add('show_anim')
        console.log(elem.target);
    })
},options)
 
sec.forEach((e)=>{
    observer.observe(e)
})


const open = document.querySelector('.nav_btn img');
const close_div = document.querySelector('.nav_btn2');
const nav_lists = document.querySelector('.nav_lists')
const nav_main = document.querySelector('.nav_main')

open.onclick = ()=>{
    nav_lists.style.display = 'block';
    nav_main.classList.add('nav_stl');
    document.body.style.overflow = 'hidden';
    close_div.style.display = 'block'
    close_div.style.zIndex = '999'
    open.style.display = 'none'
}
close_div.onclick = ()=>{
    nav_lists.style.display = 'none';
    nav_main.classList.remove('nav_stl');
    document.body.style.overflow = 'unset';
    close_div.style.zIndex = '1'
    close_div.style.display = 'none'
    open.style.display = 'block'
}
