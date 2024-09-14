let square = document.getElementById('square');
let moving = false;

square.addEventListener('mousedown', startingMouse);

function startingMouse(e) {
    ejeX = e.clientX - square.offsetLeft
    ejeY = e.clientY - square.offsetTop
    moving = true;

    document.addEventListener('mousemove', movingMouse);
    document.addEventListener('mouseup', stoppingMouse);    
}

function movingMouse(e) {

    while(moving) {
        square.style.left = `${ejeX}px;`
        square.style.top = `${ejeY}px;`
        console.log('aaaa me muevooooo')
    }

    document.addEventListener('mouseup', stoppingMouse);
}

function stoppingMouse(e){
    moving = false;

}