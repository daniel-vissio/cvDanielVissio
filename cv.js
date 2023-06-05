let menuOn = false;

function menuNav(){
    if(menuOn){
        document.getElementById("nav").classList = "";
        menuOn = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuOn = true;
    }
}

function select(){

    document.getElementById("nav").classList ="";
    menuOn = false;

}

function effectSkills(){
    var skills = document.getElementById("skills");
    var dis_skills = window.innerHeight - skills.getBoundingClientRect().top;

    if(dis_skills >= 300){
        let skills = document.getElementsByClassName("progres");
        skills[0].classList.add("javascript");
        skills[1].classList.add("htmlcss");
        skills[2].classList.add("salesforce");
        skills[3].classList.add("java");
        skills[4].classList.add("typescriptangular");
        skills[5].classList.add("pythontkinter");
        skills[6].classList.add("teamwork");
        skills[7].classList.add("communication");
        skills[8].classList.add("autodidact");
        skills[9].classList.add("dedicated");
        skills[10].classList.add("friendly");
    }
}

window.onscroll = function(){
    effectSkills();
};