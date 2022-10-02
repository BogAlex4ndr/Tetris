let changeBg = document.querySelector('.change__bg');
let clickCounter = 0;
changeBg.addEventListener('click', function (e) {
    if(clickCounter < 1) {
        clickCounter++
        document.querySelector('.tetris').classList.add('tetris__bg');
    } else if (clickCounter < 2) {
        clickCounter++
        document.querySelector('.tetris').classList.replace('tetris__bg','tetris__bg2'); 
    } else if (clickCounter < 3) {
        clickCounter++
        document.querySelector('.tetris').classList.replace("tetris__bg2",'tetris__bg3');    
    } else if (clickCounter < 4) {
        clickCounter++
        document.querySelector('.tetris').classList.replace("tetris__bg3",'tetris__bg4');    
    }else if (clickCounter < 5) {
        clickCounter++
        document.querySelector('.tetris').classList.replace("tetris__bg4",'tetris__bg5');    
    }else if (clickCounter < 6) {
        clickCounter++
        document.querySelector('.tetris').classList.replace("tetris__bg5",'tetris__bg6');    
    }else if (clickCounter < 7) {
        clickCounter++
        document.querySelector('.tetris').classList.replace("tetris__bg6",'tetris__bg7');    
    }
    else {
        clickCounter = 0;
        document.querySelector('.tetris').classList.remove('tetris__bg7');
    }
    console.log(clickCounter)
})