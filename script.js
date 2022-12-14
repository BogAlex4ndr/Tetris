
let overlay = document.querySelector('.overlay');
let modal = document.querySelector('.modal');
let restart = document.querySelector('.restart__btn');
let pause = document.querySelector('.pause');
let speed = 0;
let showScore = document.querySelector('.best__score');
let scoreStorage = window.localStorage;
let arrowTop = document.querySelector('.top-arrow');
let arrowLeft = document.querySelector('.left-arrow');
let arrowRight = document.querySelector('.right-arrow');
let arrowDowd = document.querySelector('.bottom-arrow');



modal.addEventListener('click', function (e) {
    if (e.target.classList.contains('easy')) {
        speed = 900;
        main.style.boxShadow ='5px 5px 5px green';
    }else if (e.target.classList.contains('normal')) {
        speed = 600;
        main.style.boxShadow ='5px 5px 5px orange';
    }else if (e.target.classList.contains('hard')) {
        speed = 300;
        main.style.boxShadow ='5px 5px 5px red';
    }
    if (e.target.classList.contains('start__button')) {
        modal.style.display = 'none';
        overlay.style.display = 'none';
        startGame()
    }
});
restart.addEventListener('click', function (e) {
    if (e.target.classList.contains('restart__btn')) {
        location.reload()
    }
});


function startGame() {
    showScore.value = `Best score: ${scoreStorage.getItem('Gs')}`
let tetris = document.createElement('div');
tetris.classList.add('tetris');

for (let i = 1; i < 181; i++) {
    let excel = document.createElement('div');
    excel.classList.add('excel');
    tetris.appendChild(excel)
    
}

let main = document.getElementsByClassName('main')[0];
main.appendChild(tetris);

let excel = document.getElementsByClassName('excel');
let index = 0;

for (let y = 18; y>0; y--) {
   for (let x = 1; x < 11; x++) {
    excel[index].setAttribute('posX', x);
    excel[index].setAttribute('posY', y);
    index++
   }
    
}

let x = 5, y = 15;


let mainArr = [
    //Stick
    [
        [0,1],
        [0,2],
        [0,3],
    //поворот на 90 градусов    
        [
            [-1,1],
            [0,0],
            [1,-1],
            [2,-2],
        ],
        //поворот на 270 градусов 
        [
            [1,-1],
            [0,0],
            [-1,1],
            [-2,2],
        ],
        [
            [-1,1],
            [0,0],
            [1,-1],
            [2,-2],
        ],
        //поворот на 360 градусов 
        [
            [1,-1],
            [0,0],
            [-1,1],
            [-2,2],
        ],
    ],
    //square
    [
        [1,0],
        [0,1],
        [1,1],
        //поворот на 90 градусов
        [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
        //поворот на 180 градусов 
        [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
        //поворот на 270 градусов 
        [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
        //поворот на 360 градусов 
        [
            [0,0],
            [0,0],
            [0,0],
            [0,0],
        ],
    ],
    // L figure
    [
        [1,0],
        [0,1],
        [0,2],
         //поворот на 90 градусов
        [
            [0, 0],
            [-1,1],
            [1, 0],
            [2,-1],
        ],
        //поворот на 180 градусов 
        [
            [1,-1],
            [1,-1],
            [-1,0],
            [-1,0],
        ],
         //поворот на 270 градусов 
         [
            [-1,0],
            [0,-1],
            [2,-2],
            [1,-1],
        ],
         //поворот на 360 градусов 
         [
            [0,-1],
            [0,-1],
            [-2,0],
            [-2,0],
        ],
    ],
    // L reverse
    [
        [1,0],
        [1,1],
        [1,2],
          //поворот на 90 градусов
          [
            [0,0],
            [0,0],
            [1,-1],
            [-1,-1],
        ],
        //поворот на 180 градусов 
        [
            [0,-1],
            [-1,0],
            [-2,1],
            [1,0],
        ],
         //поворот на 270 градусов 
         [
            [2,0],
            [0,0],
            [1,-1],
            [1,-1],
        ],
         //поворот на 360 градусов 
         [
            [-2,0],
            [1,-1],
            [0,0],
            [-1,1],
        ],
    ],
    // Z figure
    [
        [1,0],
        [1,1],
        [2,1],
            //поворот на 90 градусов
            [
                [2,-1],
                [0,0],
                [1,-1],
                [-1,0],
            ],
            //поворот на 180 градусов 
            [
                [-2,0],
                [0,-1],
                [-1,0],
                [1,-1],
            ],
             //поворот на 270 градусов 
             [
                [2,-1],
                [0,0],
                [1,-1],
                [-1,0],
            ],
             //поворот на 360 градусов 
             [
                [-2,0],
                [0,-1],
                [-1,0],
                [1,-1],
            ],
    ],
    // Z reverse
    [
        [1,0],
        [-1,1],
        [0,1],
            //поворот на 90 градусов
            [
                [0,-1],
                [-1,0],
                [2,-1],
                [1,0],
            ],
            //поворот на 180 градусов 
            [
                [0,0],
                [1,-1],
                [-2,0],
                [-1,-1],
            ],
             //поворот на 270 градусов 
             [
                [0,-1],
                [-1,0],
                [2,-1],
                [1,0],
            ],
             //поворот на 360 градусов 
             [
                [0,0],
                [1,-1],
                [-2,0],
                [-1,-1],
            ],
    ],
    // T figure
    [
        [1,0],
        [2,0],
        [1,1],
            //поворот на 90 градусов
            [
                [1,-1],
                [0,0],
                [0,0],
                [0,0],
            ],
            //поворот на 180 градусов 
            [
                [0,0],
                [-1,0],
                [-1,0],
                [1,-1],
            ],
             //поворот на 270 градусов 
             [
                [1,-1],
                [1,-1],
                [1,-1],
                [0,0],
            ],
             //поворот на 360 градусов 
             [
                [-2,0],
                [0,-1],
                [0,-1],
                [-1,-1],
            ],
    ],

]

let curentFigure = 0;
let figureBody = 0;
let rotate = 1;

function createFigure() {
    function getRandom() {
        return Math.round(Math.random()*(mainArr.length-1))
        
    }
    rotate = 1;
    curentFigure = getRandom();
    console.log(curentFigure)
    figureBody = [
        document.querySelector(`[posX = "${x}"][posY = "${y}"]`),
        document.querySelector(`[posX = "${x + mainArr[curentFigure][0][0]}"][posY = "${y + mainArr[curentFigure][0][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[curentFigure][1][0]}"][posY = "${y + mainArr[curentFigure][1][1]}"]`),
        document.querySelector(`[posX = "${x + mainArr[curentFigure][2][0]}"][posY = "${y + mainArr[curentFigure][2][1]}"]`)
    ];
    for (let i = 0; i < figureBody.length; i++) {
        figureBody[i].classList.add('figure'); 
    }
}
createFigure();

let score = 0;
let input  = document.querySelector('.score');
input.value = `score: ${score}`;
let globalScore = 0;
function Move() {
    let moveFlag = true;
    let coordinates = [
        [figureBody[0].getAttribute('posX'), figureBody[0].getAttribute('posY')],
        [figureBody[1].getAttribute('posX'), figureBody[1].getAttribute('posY')],
        [figureBody[2].getAttribute('posX'), figureBody[2].getAttribute('posY')],
        [figureBody[3].getAttribute('posX'), figureBody[3].getAttribute('posY')],
    ]

    for (let i = 0; i < coordinates.length; i++) {
        if (coordinates[i][1] == 1 || document.querySelector(`[posX = "${coordinates[i][0]}"][posY = "${coordinates[i][1]-1}"]`).classList.contains('set')) {
            moveFlag = false;
            break;
        }   
    }
    if (moveFlag) {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure'); 
            
        }
        figureBody = [
            document.querySelector(`[posX = "${coordinates[0][0]}"][posY = "${coordinates[0][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[1][0]}"][posY = "${coordinates[1][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[2][0]}"][posY = "${coordinates[2][1]-1}"]`),
            document.querySelector(`[posX = "${coordinates[3][0]}"][posY = "${coordinates[3][1]-1}"]`),
        ];
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.add('figure'); 
    }
    }else {
        for (let i = 0; i < figureBody.length; i++) {
            figureBody[i].classList.remove('figure');
            figureBody[i].classList.add('set');
        }
        for (let i = 1; i < 15; i++) {
            let count = 0;
            for (let k = 1; k < 11; k++) {
                if (document.querySelector(`[posX = "${k}"][posY = "${i}"]`).classList.contains('set')) {
                    count++;
                    if (count == 10) {
                        score += 10;
                        input.value = `score: ${score}`;
                        for (let m = 1; m < 11; m++) {
                            document.querySelector(`[posX = "${m}"][posY = "${i}"]`).classList.remove('set')
                        }
                        let set = document.querySelectorAll('.set');
                        let newSet = [];
                        for (let s = 0; s < set.length; s++) {
                            let setCoordinates = [set[s].getAttribute('posX'), set[s].getAttribute('posY')];
                            if (setCoordinates[1] > i) {
                                set[s].classList.remove('set');
                                newSet.push(document.querySelector(`[posX = "${setCoordinates[0]}"][posY = "${setCoordinates[1]-1}"]`))
                            }
                        }
                        for (let a = 0; a < newSet.length; a++) {
                            newSet[a].classList.add('set')
                        }
                        i--;
                    }
                }
                
            }
            
        }
        for (let n = 1; n < 11; n++) {
         if (document.querySelector(`[posX = "${n}"][posY = "15"]`).classList.contains('set')) {
            clearInterval(interval);
            alert(`GAME OVER \n your score: ${score}`);
            if (score >= scoreStorage.getItem('Gs')) {
                globalScore = score;
                scoreStorage.setItem('Gs', globalScore);
            }
            break;
         }
        }
    createFigure()
    }
}

let interval = setInterval(() => {
    Move()
}, speed);

let flag = true;
/////////////// Управление стрелками на клавитатуре ////////////////////
window.addEventListener('keydown', function(e) {
    let coordinates1 = [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')];
    let coordinates2 = [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')];
    let coordinates3 = [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')];
    let coordinates4 = [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')];

    function getNewState(a) {

        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`),
        ];
        for (let i = 0; i < figureNew.length; i++) {
            if(!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
            } 
        }
        if (flag === true) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure'); 
        }
            figureBody = figureNew;
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure'); 
        }
        }
    }


    if(e.keyCode === 37 && onPause === false) {
        getNewState(-1)
    }else if(e.keyCode === 39 && onPause === false) {
        getNewState(1)
    }else if (e.keyCode === 40 && onPause === false) {
        Move()
    }else if (e.keyCode === 38 && onPause === false) {
        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + mainArr[curentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[curentFigure][rotate + 2][0][1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + mainArr[curentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[curentFigure][rotate + 2][1][1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + mainArr[curentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[curentFigure][rotate + 2][2][1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + mainArr[curentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[curentFigure][rotate + 2][3][1]}"]`),
        ];
        for (let i = 0; i < figureNew.length; i++) {
            if(!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
            } 
        }
        if (flag === true) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure'); 
        }
            figureBody = figureNew;
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure'); 
        }
        if (rotate < 4) {
            rotate++
        }else {
            rotate = 1;
        }
        }
    }      
});
/////////////////////////////////////////////////////////////////////////////////

///////////////////////////Кнопка Паузы /////////////////////////////////////////
onPause = false;

pause.addEventListener('click', function (e) {
    if (e.target.classList.contains('pause__btn')) {
        console.log(onPause)
        if (onPause === false) {
            clearInterval(interval);
            onPause = true;
        }else if (onPause === true) {
                interval = setInterval(() => {
                    Move()
                }, speed);
                onPause = false;
            }
    }
});
/////////////// Управление кнопками на экране ////////////////////
window.addEventListener('click', function(e) {
    let coordinates1 = [figureBody[0].getAttribute('posX'),figureBody[0].getAttribute('posY')];
    let coordinates2 = [figureBody[1].getAttribute('posX'),figureBody[1].getAttribute('posY')];
    let coordinates3 = [figureBody[2].getAttribute('posX'),figureBody[2].getAttribute('posY')];
    let coordinates4 = [figureBody[3].getAttribute('posX'),figureBody[3].getAttribute('posY')];

    function getNewState(a) {

        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + a}"][posY = "${coordinates1[1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + a}"][posY = "${coordinates2[1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + a}"][posY = "${coordinates3[1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + a}"][posY = "${coordinates4[1]}"]`),
        ];
        for (let i = 0; i < figureNew.length; i++) {
            if(!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
            } 
        }
        if (flag === true) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure'); 
        }
            figureBody = figureNew;
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure'); 
        }
        }
    }


    if(e.target.classList.contains('left-arrow') && onPause === false) {
        getNewState(-1)
    }else if(e.target.classList.contains('right-arrow') && onPause === false) {
        getNewState(1)
    }else if (e.target.classList.contains('bottom-arrow') && onPause === false) {
        Move()
    }else if (e.target.classList.contains('top-arrow') && onPause === false) {
        flag = true;

        let figureNew = [
            document.querySelector(`[posX = "${+coordinates1[0] + mainArr[curentFigure][rotate + 2][0][0]}"][posY = "${+coordinates1[1] + mainArr[curentFigure][rotate + 2][0][1]}"]`),
            document.querySelector(`[posX = "${+coordinates2[0] + mainArr[curentFigure][rotate + 2][1][0]}"][posY = "${+coordinates2[1] + mainArr[curentFigure][rotate + 2][1][1]}"]`),
            document.querySelector(`[posX = "${+coordinates3[0] + mainArr[curentFigure][rotate + 2][2][0]}"][posY = "${+coordinates3[1] + mainArr[curentFigure][rotate + 2][2][1]}"]`),
            document.querySelector(`[posX = "${+coordinates4[0] + mainArr[curentFigure][rotate + 2][3][0]}"][posY = "${+coordinates4[1] + mainArr[curentFigure][rotate + 2][3][1]}"]`),
        ];
        for (let i = 0; i < figureNew.length; i++) {
            if(!figureNew[i] || figureNew[i].classList.contains('set')) {
                flag = false;
            } 
        }
        if (flag === true) {
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.remove('figure'); 
        }
            figureBody = figureNew;
            for (let i = 0; i < figureBody.length; i++) {
                figureBody[i].classList.add('figure'); 
        }
        if (rotate < 4) {
            rotate++
        }else {
            rotate = 1;
        }
        }
    }      
});
/////////////////////////////////////////////////////////////////////////////////
} /////// конец функции startGame() /////////////
