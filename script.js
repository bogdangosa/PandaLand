

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