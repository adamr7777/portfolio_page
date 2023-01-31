//variables 

const emailIcon = document.getElementById('email-icon');
let clickedOnce = false;



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
    animateGrowthEmail(emailModale, isReverse);
    //render content
    const content = document.getElementsByClassName('email-modal-content');
    const delayedContent = setTimeout(()=> {
        for (let element of content) {
            element.classList.remove('hidden');
            element.classList.add('visible');
        }
    }, 650)
}


function animateGrowthEmail(emailModale, isReverse) {
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
        animateGrowthEmail(emailModale, true);
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


function renderContent(htmlString) {
    const introContent =  document.getElementsByClassName('intro-cont');
    const introDiv = document.getElementById('introduction');
    for (let element of introContent) {
    element.classList.add('hidden');
    }
    const displayCont = setTimeout(()=> {
        introDiv.innerHTML = htmlString;
    }, 700)
}


function renderAboutMe() {
    const htmlString = ` 
                            <h3 class='first-item-aboutme intro-cont'>I am a web developer that specialises in frontend.</h3> 
                            <h3 class='second-item-aboutme intro-cont'>My current stack:</h3>
                            <ul class='about-me-stack intro-cont'>
                                <li>HTML</li>
                                <li>CSS</li>
                                <li>Vanilla Java Script</li>
                                <li>Git Version Control</li>
                            </ul>
                        `;
    renderContent(htmlString);
  
    
}


function renderWorks() {
    // let isReverse = false;
    // if (isReverse === false) {

    //     isReverse = !isReverse;
    // } 
    const worksDiv = document.getElementById('works-div');
    const aboutmeBtn = document.getElementById('about-me-btn');
    const worksBtn = document.getElementById('works-btn');
    worksBtn
    worksBtn.textContent += ':';
    worksBtn.classList.remove('nav-item');
    // worksBtn.classList.add('works-btn-alt');
    // console.log(worksBtn.classList);
    // worksBtn.innerHTML += '<span id="span">:</span>';
    // document.getElementById('span').style.color = 'red';
    worksDiv.classList.add('works-clicked');
    aboutmeBtn.classList.add('about-me-btn-changed');
    worksDiv.innerHTML += `<p class='projects hidden' id='password-g'>Password generator</p><p class='projects hidden' id='word-w'>Word writer</p`
    const passwordG = document.getElementById('password-g')
    const wordW = document.getElementById('word-w')
    const appearingPassword = setTimeout(()=> {
        passwordG.classList.remove('hidden');
        passwordG.classList.add('visible');
    }, 250)
    const appearingWord= setTimeout(()=> {
        wordW.classList.remove('hidden');
        wordW.classList.add('visible');
    }, 250)
}


function render1work() {
    
    const htmlString = ` 
                            <h3 class='works-text works-text-upper intro-cont'>Introducing my secure password generator app! 
                            Say goodbye to weak and easily hacked passwords. With just a click, generate strong and unique passwords 
                            for all of your online accounts.</h3>
                            <h3 class='works-text intro-cont'>Experience the ease and peace of mind that comes with a secure password. 
                            Try it out today!</h3>
                            <a href='https://adomasr.github.io/password_app/' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Link <span class='link-span'>></span></h5></a> 
                        `;
    renderContent(htmlString);
}


function render2work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>
                            Discover my online writing app, designed to help you write more efficiently. 
                            No more cluttered notes, just a clean and organized workspace. 
                            Write and save with ease, wherever you are.</h3>
                            <h3 class='works-text intro-cont'>Take your writing to the next level with a simple and user-friendly platform. 
                            Get started today!</h3>
                            <a href='https://adomasr.github.io/Project/' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Link <span class='link-span'>></span></h5></a> 
                        `;
    renderContent(htmlString);
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
       renderAboutMe();
    }

    if (event.target.id === 'works-btn') {
        if (!clickedOnce) {
            renderWorks();
            clickedOnce = !clickedOnce;
        }
    }

    if (event.target.id === 'password-g') {
        render1work();
    }

    if (event.target.id === 'word-w') {
        render2work();
    }
})


//init

   setFlickering();
   revealContent();
   



   