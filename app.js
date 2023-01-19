



function getFlicker() {
    document.getElementById('web-dev-h2').classList.toggle('web-dev-red')
}


function setFlickering() {
        setTimeout(getFlicker, 3000); //tarp 1 ir 2 2000 tarp 2 ir 2 100
        setTimeout(getFlicker, 3150);//working
        setTimeout(getFlicker, 5150);
        setTimeout(getFlicker, 5300);
        setTimeout(getFlicker, 5600);
        setTimeout(getFlicker, 5750);
        setTimeout(setFlickering, 5751);
    }

function revealContent() {
    setTimeout(()=> {
       const navOptions = document.getElementById('nav-options');
       const introduction = document.getElementById('introduction');
       navOptions.classList.remove('hidden');
       navOptions.classList.add('visible');
       introduction.classList.remove('hidden');
       introduction.classList.add('visible');
    },1500)
}
    
   setFlickering();
   revealContent();
   



   