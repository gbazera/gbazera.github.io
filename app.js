function changeText(){
    const type = document.querySelector('.type');

    const keywords = ['Web Developer', 'Front-End Developer', 'UI/UX Designer', 'Game Developer'];
    const randomKeyword = Math.floor(Math.random() * keywords.length);

    type.innerHTML = keywords[randomKeyword];

    setTimeout(changeText, 2000);
}

changeText();
