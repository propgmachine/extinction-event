

//-----------------------------------------------------------------
const dinoList1 = document.querySelectorAll('#cross');
for (const cross of dinoList1) {
    dinoli.addEventListener('click', function (event){
        console.log(event);
        const clickedLi = event.target;
        clickedLi.style.textDecoration = 'line-through';
    });
}

const lineThrough = function (event) {
    event.target.style.textDecoration = 'line-through';
}


//-----------------------------------------------------------------
const dinoList2 = document.querySelectorAll('#fade');
for (const fade of dinoList2) {
    dinoLi.addEventListener('click',function (event){
        const clickedItem =event.target;
        clickedItem.style.opacity = '.1';
    });
}

const lineCollapse = function (event) {
    event.target.style.opacity = 0;
}

dino.addEventListener('click', 'lineCollapse');

//-----------------------------------------------------------------
const dinoImg = document.querySelectorAll('#row');
for (const collapse of dinoImage) {
    button.addEventListener('click', handleButtonPress);
    
    function handleButtonPress(event) {
    for (const dinoImage of dinoImages) {
        dinoImage.style.width = '0px';
    });

}







// === Bottom === / Meteor Me (Destroy Button)
const meteorMeButton = document.querySelectorAll('#destroy-all');

function handleMeteorMePressed(event) {
    button.style.backgroundColor = 'blue';
}

button.addEventListener('click', '#destroy-all');



