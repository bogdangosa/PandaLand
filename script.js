

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

whitePandaBtn.addEventListener("click",ChangeGaleryMode);
redPandaBtn.addEventListener("click",ChangeGaleryMode);

function ChangeGaleryMode(){
    whitePandaBtn.classList.toggle("btn-success");
    whitePandaBtn.classList.toggle("btn-light");

    redPandaBtn.classList.toggle("btn-success");
    redPandaBtn.classList.toggle("btn-light");
}