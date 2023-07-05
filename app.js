
import {setFlickering, revealContent, renderEmailDiv, copyToClipboard, 
    unrenderEmailDiv, renderContent, renderAboutMe} from './utils';

    


const worksBtnClickedModule = (function() { /*used in the event listener 'works-btn' and unrenderWorks */
    let worksBtnClickedOnce = false;
    function switchWorksBtnClicked() {
        worksBtnClickedOnce = !worksBtnClickedOnce
    }
    return {worksBtnClickedOnce, switchWorksBtnClicked};
})();



function render1work() {
    
    const htmlString = ` 
                            <h4 class='works-text works-text-upper intro-cont'>
                                Meme manager app (CRUD) which lets you: 
                            </h4>
                            
                            <h4 class='works-text intro-cont'>
                                ♦️ get meme templates from the dedicated API displayed on the main feed<br/>
                                ♦️ interact with them in a bunch of different ways (like, favourite, add comments)<br/>
                                ♦️ upload images from your computer as meme templates<br/>
                                ♦️ create memes using custom text position and other options (using the templates)<br/>
                                ♦️ view memes and meme templates in the dedicated sections 
                            </h4>
                           
                            <a href='https://meme-manager.netlify.app' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Link <span class='link-span'>></span>
                                </h5>
                            </a> 
                           
                            <a href='https://github.com/adamr7777/memesManager' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Code <span class='link-span'>></span>
                                </h5>
                            </a> 
                        `;
    renderContent(htmlString);
};


function render2work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>
                                Looking for an easy and convenient way to check the weather? 
                                Look no further than our weather app! With our app, you can stay up-to-date 
                                on the latest weather conditions in your area.
                            </h3>
                           
                            <h3 class='works-text intro-cont'>
                                Whether you're planning a trip or just need to know what to wear for the day, 
                                our weather app has got you covered!
                            </h3>
                           
                            <a href='https://weather-app-hot-not.netlify.app' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Link <span class='link-span'>></span>
                                </h5>
                            </a> 
                           
                            <a href='https://github.com/adamr7777/weatherApp-production' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Code <span class='link-span'>></span>
                                </h5>
                            </a> 
                        `;
    renderContent(htmlString);
};


function render3work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>
                                Introducing the chat app with a grumpy cat! 
                                Do you love cats but always wondered what they would say if they could talk? 
                                Well, now you can find out with our app!
                            </h3>
                            
                            <h3 class='works-text intro-cont'>
                                But be warned - our cat is not your average cuddly kitty. 
                                With a snarky attitude and a sharp tongue, this cat is not afraid to speak its mind.
                            </h3>
                           
                            <a href='https://grumpy-cat-cat.netlify.app' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Link <span class='link-span'>></span>
                                </h5>
                            </a> 
                            
                            <a href='https://github.com/adamr7777/project-x' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Code <span class='link-span'>></span>
                                </h5>
                            </a> 
                        `;
    renderContent(htmlString);
};

function render4work() {

    const htmlString = ` 
                            
                            <h3 class='works-text works-text-upper intro-cont'>
                                Portfolio of my frontend web development projects. 
                            </h3>
                            
                            <h3 class='works-text intro-cont'>
                                ♦️ built as a SPA where the various sections displaying the info 
                                    (projects, technologies and about me) are rendered on 
                                    the screen conditionally<br/>
                                ♦️ custom hand-made CSS - JS animations.
                            </h3>
                            
                            <a href='https://portfolio-appweb.netlify.app/' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Link <span class='link-span'>></span>
                                </h5>
                            </a> 
                           
                            <a href='https://github.com/adamr7777/portfolio_page' target='_blank'>
                                <h5 class='password-link intro-cont'>
                                    <span class='link-span'><</span> Code <span class='link-span'>></span>
                                </h5>
                            </a> 
                        `;
    renderContent(htmlString);
};





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
    `              /*add new projects */
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
};


function unrenderWorks() {
    const {switchWorksBtnClicked} = worksBtnClickedModule;
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
    switchWorksBtnClicked();
};


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
        const {worksBtnClicked, switchWorksBtnClicked} = worksBtnClickedModule;
        if (!worksBtnClicked) {
            renderWorks();
            switchWorksBtnClicked();
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
});



   setFlickering();
   revealContent();
   



   