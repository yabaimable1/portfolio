const skillSection = document.getElementById('skill');

const header = document.getElementById('header');

const percents = document.querySelectorAll('.percent');


function showprogress(){
    percents.forEach(percents=>{
        const value = percents.dataset.progress;
        
            console.log(value);
        percents.style.opacity = 1;
        percents.style.width = `${value}%`;
    });
}

function hideprogress(){
    percents.forEach(p=> {
        p.style.opacity=0;
        p.style.width=0;
    })
}

window.addEventListener('scroll',()=>{
    const section = skillSection.getBoundingClientRect().top;

    const screen = window.innerHeight;

    if (section < screen){
        showprogress();
    }else{
        hideprogress();
    }

}) 