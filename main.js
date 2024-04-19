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
