

const NavItems = document.querySelectorAll(".nav-item");
NavItems.forEach(item => {
    item.addEventListener("click",SetActiveLink);
});

function SetActiveLink(e){
    NavItems.forEach(item => {
        item.classList.remove('active');
    });
    e.currentTarget.classList.add('active');
}

const whitePandaBtn = document.getElementById("whitePandaBtn");
const redPandaBtn = document.getElementById("redPandaBtn");


const whitePandaImages = document.querySelectorAll(".whiteimg");
const redPandaImages = document.querySelectorAll(".redimg");

whitePandaBtn.addEventListener("click",ChangeGaleryMode);
redPandaBtn.addEventListener("click",ChangeGaleryMode);

function ChangeGaleryMode(e){
    if(e.currentTarget.classList.contains("btn-success")) return;
    whitePandaBtn.classList.toggle("btn-success");
    whitePandaBtn.classList.toggle("btn-light");

    redPandaBtn.classList.toggle("btn-success");
    redPandaBtn.classList.toggle("btn-light");

    whitePandaImages.forEach(image=>{
        image.classList.toggle("hide");
    });
    redPandaImages.forEach(image=>{
        image.classList.toggle("hide");
    });

}

let timer = 0;

window.addEventListener('load',function(){
    let intersectionObserverSlide = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                timer+=100;
                setTimeout(function(){entry.target.classList.add('slideinAnimationUp');},timer);
                intersectionObserverSlide.unobserve(entry.target);
                setTimeout(function(){timer=0},1000);
            }
        });
    });

    document.querySelectorAll('.slideinAnimation').forEach(obj=>{
        intersectionObserverSlide.observe(obj);
    });


    let intersectionObserverFade = new IntersectionObserver(entries =>{
        entries.forEach(entry=>{
            if(entry.isIntersecting){
                timer+=100;
                setTimeout(function(){entry.target.classList.add('fadeinAnimationUp');},timer);
                intersectionObserverFade.unobserve(entry.target);
                setTimeout(function(){timer=0},1000);
            }
        });
    });

    document.querySelectorAll('.fadeinAnimation').forEach(obj=>{
        intersectionObserverFade.observe(obj);
    });

});

