let nowIndex = 1;

const imageslider = document.querySelector('#imageslider');


const bottomBn01 = document.querySelector('#imgTo1');
const bottomBn02 = document.querySelector('#imgTo2');
const bottomBn03 = document.querySelector('#imgTo3');

bottomBn01.addEventListener('click', moveA);
bottomBn02.addEventListener('click', moveB);
bottomBn03.addEventListener('click', moveC);

leftArrow.addEventListener('click', moveLeft);
rightArrow.addEventListener('click', moveRight);

//MOVE FIRST IMAGE
function moveA()
{
    imageslider.style.transform = 'translate(0px)';
    nowIndex =1;
}

function moveB()
{
    imageslider.style.transform = 'translate(-1920px)';
    nowIndex =2;
}

function moveC()
{
    imageslider.style.transform = 'translate(-3840px)';
    nowIndex =3;
}

function moveLeft()
{
    if(nowIndex == 1)
    {
        nowIndex ==1;
    }
    else
    {
        nowIndex --;
    }
    moveSlider(nowIndex);
}

function moveRight()
{
    if(nowIndex == 3)
    {
        nowIndex =3;
    }
    else
    {
        nowIndex ++;
    }
    moveSlider(nowIndex);
}

function moveSlider(index)
{
    switch(index)
    {
        case 1:
            moveA();
        break;
        case 2:
            moveB();
        break;
        case 3:
            moveC();
        break;
    }
}