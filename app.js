//variables 

const emailIcon = document.getElementById('email-icon');



//functions

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
       emailIcon.classList.remove('hidden');
       emailIcon.classList.add('fa-envelope');
    },1000)
}
    
function renderEmailDiv() {
    const isReverse = false;
    const emailModale = document.getElementById('email-modale');
    emailIcon.classList.add('hidden-email-icon');
    emailModale.classList.add('visible-email-modale');
    // emailModale.style.height = '350px';
    // emailModale.style.width = '350px';
    animateGrowth(emailModale, isReverse);
    //render content
    const content = document.getElementsByClassName('email-modal-content');
    const delayedContent = setTimeout(()=> {
        for (let element of content) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }
    }, 650)
}
    
    


function animateGrowth(emailModale, isReverse) {
    if (isReverse === false) {
        let size = 10;
        const theInterval = setInterval(()=> {
            emailModale.style.height = size + 'px';
            emailModale.style.width = size + 'px';
            size += 50;
            if (size >= 350) {
                clearInterval(theInterval);
            }
        }, 100)
    }
    else if (isReverse === true) {
        let size = 310;
        const theInterval = setInterval(()=> {
            emailModale.style.height = size + 'px';
            emailModale.style.width = size + 'px';
            size -= 50;
            if (size <= 0) {
                clearInterval(theInterval);
            }
        }, 100)
    }
}


function copyToClipboard() {
    const emailH4 = document.getElementById('email-h4');
        const infoP = document.getElementById('info-p');
        navigator.clipboard.writeText(emailH4.textContent)
            .then(()=> {
                infoP.textContent = 'Copied!'           //add async 
                infoP.style.color = '#a17917';
                infoP.classList.remove('info-p');
            })
            .catch(err=> {
                alert(`Failed to copy the text: ${err} Please try again`)
            })
}


function unrenderEmailDiv() {
    const isReverse = true;
    const emailModale = document.getElementById('email-modale');
    const content = document.getElementsByClassName('email-modal-content');
    const delayedContent = setTimeout(()=> {
        animateGrowth(emailModale, true);
    }, 500)
    for (let element of content) {
        element.classList.remove('visible');
        element.classList.add('hidden');
    }
    const displayEmailIcon = setTimeout (()=> {
        emailIcon.classList.remove('hidden-email-icon'); 
        emailModale.classList.remove('visible-email-modale'); 
    }, 1230)
}


//event listeners


document.addEventListener('click', (event)=> {
    if (event.target.id === 'email-icon') {
        renderEmailDiv() 
    }

    if (event.target.id === 'info-p') {
        copyToClipboard();
    }

    if (event.target.id === 'close-btn') {
        unrenderEmailDiv();
    }

    if (event.target.id === 'about-me-btn') {
       const introContent =  document.getElementsByClassName('intro-cont');
   
       const aboutMeHtml = ` 
                                <h3 class='first-item-aboutme'>I am a web developer that specialises in frontend.</h3> 
                                <h3 class='second-item-aboutme'>My current stack:</h3>
                                <ul class='about-me-stack'>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                    <li>Vanilla Java Script</li>
                                    <li>Git Version Control</li>
                                </ul>
                            `;
  
       const introDiv = document.getElementById('introduction');
       for (let element of introContent) {
        element.classList.add('hidden');
       }
       const displayCont = setTimeout(()=> {
            introDiv.innerHTML = aboutMeHtml;
       }, 700)
       
   
     
     

       
       
    // console.log(aboutMeSection);
    
    }
})


//init

   setFlickering();
   revealContent();
   



   