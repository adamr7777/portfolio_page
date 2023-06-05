

const emailIcon = document.getElementById('email-icon');
let worksBtnClickedOnce = false;





function getFlicker() {
    document.getElementById('web-dev-h2').classList.toggle('web-dev-red')
}


function setFlickering() {
        setTimeout(getFlicker, 3000); 
        setTimeout(getFlicker, 3150);
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
    animateGrowthEmail(emailModale, isReverse);
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
                infoP.textContent = 'Copied!'          
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
    const worksDiv = document.getElementById('works-div');
    const aboutmeBtn = document.getElementById('about-me-btn');
    const worksBtn = document.getElementById('works-btn');
    worksBtn.textContent += ':';
    worksBtn.classList.remove('nav-item');
    worksDiv.classList.add('works-clicked');
    aboutmeBtn.classList.add('about-me-btn-changed');
    worksDiv.style.background = '#080808';
    worksDiv.style.opacity = 0.80;
    worksDiv.innerHTML += `
        <button id='close-btn-works' class='close-btn-works projects'>X</button>
        <p class='projects hidden' id='meme-manager'>Meme Manager</p>
        <p class='projects hidden' id='weather-app'>Weather App</p>
        <p class='projects hidden' id='grumpy-cat'>Grumpy Cat</p>
        <p class='projects hidden' id='portfolio'>My Portfolio</p>
    `              /*add new works */
    const passwordG = document.getElementById('meme-manager');
    const weatherApp = document.getElementById('weather-app');
    const grumpyCat = document.getElementById('grumpy-cat');
    const portfolio = document.getElementById('portfolio');
    const appearingMemeManager = setTimeout(()=> {
        passwordG.classList.remove('hidden');
        passwordG.classList.add('visible');
    }, 250)
    const appearingWeatherApp = setTimeout(()=> {
        weatherApp.classList.remove('hidden');
        weatherApp.classList.add('visible');
    }, 250)
    const appearingCat= setTimeout(()=> {
        grumpyCat.classList.remove('hidden');
        grumpyCat.classList.add('visible');
    }, 250)
    const appearingPortfolio= setTimeout(()=> {
        portfolio.classList.remove('hidden');
        portfolio.classList.add('visible');
    }, 250)
}


function unrenderWorks() {
    const worksDiv = document.getElementById('works-div');
    const aboutmeBtn = document.getElementById('about-me-btn');
    const worksBtn = document.getElementById('works-btn');
    const passwordG = document.getElementById('meme-manager');
    const weatherApp = document.getElementById('weather-app');
    const grumpyCat = document.getElementById('grumpy-cat');
    const portfolio = document.getElementById('portfolio');
    const closeBtnWorks = document.getElementById('close-btn-works');
    passwordG.classList.remove('visible');
    passwordG.classList.add('hidden');
    weatherApp.classList.remove('visible');
    weatherApp.classList.add('hidden');
    grumpyCat.classList.remove('visible');
    grumpyCat.classList.add('hidden');
    portfolio.classList.remove('visible');
    portfolio.classList.add('hidden');
    const dissapearingWorksMenu = setTimeout(()=> {
        worksBtn.textContent = 'works';
        aboutmeBtn.classList.remove('about-me-btn-changed');
        worksDiv.classList.remove('works-clicked');
        worksBtn.classList.add('nav-item');
        closeBtnWorks.classList.add('hidden');
        worksDiv.innerHTML = `<p id='works-btn' class='works-btn nav-item'>works</p>`;
        worksDiv.style.opacity = 1;
    }, 750)
    worksBtnClickedOnce = !worksBtnClickedOnce;
}

function render1work() {
    
    const htmlString = ` 
                            <h3 class='works-text works-text-upper intro-cont'>Take control of your meme empire with our efficient meme manager. Organize, like, comment, upload, and make your own viral content effortlessly.</h3>
                            <h3 class='works-text intro-cont'>Unleash a wave of laughter and engagement with curated memes across platforms. Stay ahead of the meme game with our indispensable manager!</h3>
                            <a href='https://meme-manager.netlify.app' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Link <span class='link-span'>></span></h5></a> 
                            <a href='https://github.com/adomasr/memesManager' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Code <span class='link-span'>></span></h5></a> 
                        `;
    renderContent(htmlString);
}


function render2work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>
                            Looking for an easy and convenient way to check the weather? Look no further than our weather app! With our app, you can stay up-to-date on the latest weather conditions in your area.</h3>
                            <h3 class='works-text intro-cont'>Whether you're planning a trip or just need to know what to wear for the day, our weather app has got you covered!</h3>
                            <a href='https://adomasr.github.io/weatherApp-production/' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Link <span class='link-span'>></span></h5></a> 
                            <a href='https://github.com/adomasr/weatherApp-production' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Code <span class='link-span'>></span></h5></a> 
                        `;
    renderContent(htmlString);
}


function render3work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>
                            Introducing the chat app with a grumpy cat! Do you love cats but always wondered what they would say if they could talk? Well, now you can find out with our app!
                            </h3>
                            <h3 class='works-text intro-cont'>But be warned - our cat is not your average cuddly kitty. With a snarky attitude and a sharp tongue, this cat is not afraid to speak its mind.</h3>
                            <a href='https://grumpy-cat-cat.netlify.app' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Link <span class='link-span'>></span></h5></a> 
                            <a href='https://github.com/adomasr/project-x' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Code <span class='link-span'>></span></h5></a> 
                        `;
    renderContent(htmlString);
}

function render4work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>Welcome to my web development portfolio page. Discover a collection of my meticulously crafted websites and projects, showcasing my skills in front-end development. 
                            </h3>
                            <h3 class='works-text intro-cont'>Join me on a journey through clean designs and seamless user experiences. Let's bring your digital vision to life together!</h3>
                            <a href='https://adomasr.github.io/portfolio_page/' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Link <span class='link-span'>></span></h5></a> 
                            <a href='https://github.com/adomasr/portfolio_page' target='_blank'><h5 class='password-link intro-cont'><span class='link-span'><</span> Code <span class='link-span'>></span></h5></a> 
                        `;
    renderContent(htmlString);
}



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
        if (!worksBtnClickedOnce) {
            renderWorks();
            worksBtnClickedOnce = !worksBtnClickedOnce;
        }

    }

    if (event.target.id === 'close-btn-works') {
        unrenderWorks();
    }

    if (event.target.id === 'meme-manager') {
        render1work();
    }

    if (event.target.id === 'weather-app') {
        render2work();
    }

    if (event.target.id === 'grumpy-cat') {
        render3work();
    }

    if (event.target.id === 'portfolio') {
        render4work();
    }
})



   setFlickering();
   revealContent();
   



   