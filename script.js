const projects = document.querySelector('.projects');
const projItems = projects.querySelectorAll('.item');
const overlay = document.querySelector('.overlay');
const themeBtn = document.querySelector('.theme');

var darkTheme = false;

projItems.forEach(item => {
    item.addEventListener('click', ()=>{
        item.classList.toggle('view');
        overlay.classList.toggle('visible');
        document.body.classList.toggle('noscroll');
        window.scrollTo(0, 0);
    });
});

themeBtn.addEventListener('click', ()=>{
    toggleDarkTheme();
});

function toggleDarkTheme(){
    themeBtn.querySelector('i').classList.toggle('bxs-moon');
    themeBtn.querySelector('i').classList.toggle('bxs-sun');
    darkTheme = document.body.classList.toggle('dark');
    localStorage.setItem('dark-theme', darkTheme);
}

// Languages
var georgian = false;

const logo = document.querySelector('.logo');
const about = document.querySelector('.about');
const skills = document.querySelector('.skills');
// const projects = document.querySelector('.projects');
const contact = document.querySelector('.contact');

const langBtn = document.querySelector('.lang');

langBtn.addEventListener('click', ()=>{
    setGeorgian(!georgian);
});

function setGeorgian(condition){
    if(!condition){
        document.title = 'Giorgi Bazerashvili';

        logo.innerText = 'Giorgi Bazerashvili';

        about.querySelector('h1').innerText = 'About Me';
        about.querySelector('p').innerText = 'My name is giorgi, I am 16 years old high school student from Republic of Georgia.\
        I started learning programming 3-4 years ago. I may not have working experience but I am very hard worker. I am currently\
        on the stage where I can call myself junior web developer.';

        skills.querySelector('h1').innerText = 'Skills';
        skills.querySelector('p').innerText = 'I can code in HTML, CSS, JS and little bit in Solidity. \
        I am currently learning Vue.js for front-end and Web3.js for blockchain development.';

        projects.querySelector('h1').innerText = 'Projects';
        projects.querySelector('p').innerText = 'These are the projects i have worked on.'

        contact.querySelector('h1').innerText = 'Contact Me';

        langBtn.innerText = 'KA';

        georgian = false;
        localStorage.setItem('ka', false);
    }else{
        document.title = 'გიორგი ბაზერაშვილი';

        logo.innerText = 'გიორგი ბაზერაშვილი';

        about.querySelector('h1').innerText = 'ჩემ შესახებ';
        about.querySelector('p').innerText = 'გამარჯობა, ჩემი სახელია გიორგი, მე ვარ 16 წლის სკოლის მოსწავლე საქართველოდან.\
        მე დავიწყე პროგრამირების სწავლა 3-4 წლის წინ. მე შეიძლება არ ვიყო ისეთი გამოცდილი როგორც სხვა პროფესიონალები,\
        მაგრამ ვარ ძალიან შრომისმოყვარე. ახლა ვარ ისეთ ეტაპზე, რომ შემიძლია ჩემ თავს ვუწოდო ჯუნიორ ვებ დეველოპერი.';

        skills.querySelector('h1').innerText = 'უნარები';
        skills.querySelector('p').innerText = 'მე შემიძლია კოდი ვწერო HTML-ით, CSS-ით, JS-ით და ცოტა Solidity-თ.\
        ამ ეტაპზე ვსწავლობ Vue.js-ს ფრონტ-ენდ დეველოფმენტისთვის და Web3.js-ს ბლოქჩეინ დეველოფმენტისთვის.';

        projects.querySelector('h1').innerText = 'პროექტები';
        projects.querySelector('p').innerText = 'ეს ის პროექტებია რომლებზეც ნამუშევარი მაქვს.'

        contact.querySelector('h1').innerText = 'დამიკავშირდით';

        langBtn.innerText = 'EN';

        georgian = true;
        localStorage.setItem('ka', true);
    }
}

//

window.addEventListener('load', ()=>{
    darkTheme = JSON.parse(localStorage.getItem('dark-theme'));
    if(darkTheme == true) toggleDarkTheme();

    georgian = JSON.parse(localStorage.getItem('ka'));
    console.log(georgian);
    if(georgian == true){ setGeorgian(true); }
});