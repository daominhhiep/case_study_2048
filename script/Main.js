function myFunction(){              //Khi vào game tạo sẵn 1 số ngẫu nhiên
    swal ( "Di chuyển và cộng điểm các ô vuông lại với nhau." ) ;
    let key = Math.floor(Math.random() * 16);   //Random 1 trong 16 ô
    if(cell[key].innerHTML === ""){
        cell[key].innerHTML = Math.random()<1 ? 2 : 4;
        designNumber();
    }
}
function randomNumber(){
    let ramdomNum = Math.floor(Math.random() * 16);
    if(cell[ramdomNum].innerHTML === ""){                          // Nếu ô trống
        cell[ramdomNum].innerHTML = Math.random() < 0.95 ? 2 : 4;   //xuất hiện ngẫu nhiên số 2 hoặc 4 với tỷ lệ số 2 là 95%
    }
    else{
        randomNumber();
    }
}

function startGame(event){
    if(Math.floor(Math.random() * 10) >= 5){            //random nhạc nền
        audio2.play();
    } else {
        audio3.play();
    }
    let move = new Move();
    onKeyDown = event.keyCode;
    if(onKeyDown === KEY_UP || onKeyDown === KEY_W){
        move.moveUp();
        randomNumber();
        designNumber();
        audio1.play();
    }
    else if(onKeyDown === KEY_DOWN || onKeyDown === KEY_S){
        move.moveDown();
        randomNumber();
        designNumber();
        audio1.play();
    }
    else if(onKeyDown === KEY_LEFT || onKeyDown === KEY_A){
        move.moveLeft();
        randomNumber();
        designNumber();
        audio1.play();
    }
    else if(onKeyDown === KEY_RIGHT || onKeyDown === KEY_D){
        move.moveRight();
        randomNumber();
        designNumber();
        audio1.play();
    }
}

function restart() {
    document.location.reload();
}

document.addEventListener('keydown',startGame);
