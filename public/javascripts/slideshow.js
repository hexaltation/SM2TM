function draw(counter, images, ctx){
    var image = new Image();
    image.src = "/images/" + images[String(counter)];
    image.onload = ()=>{
        ctx.clearRect(0,0,1920,1080);
        ctx.drawImage(image,0,0,1920,1080,0,0,1920,1080);
    }
}

function update(counter){
    var xhr = new XMLHttpRequest();
    xhr.open('PUT', 'http://soutenance.coding-academy.fr:3000/'+counter);
    xhr.send(null);
}

function start_timer(){
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'http://soutenance.coding-academy.fr:3000/starttimer');
    xhr.send(null);
}

document.addEventListener("DOMContentLoaded",()=>{
    var counter = 1;
    var max = Object.keys(images).length;
    var canvas = document.getElementById("slideshow");
    var ctx = canvas.getContext("2d");
    ctx.canvas.width  = 1920;
    ctx.canvas.height = 1080;
    ctx.font = "30px Arial";
    draw(counter, images, ctx);
    update(counter);
    
    document.addEventListener('keyup', (event) => {
        const keyCode = event.keyCode;
    
        if (keyCode === 186) {
            counter -= 1;
            if (counter < 1){
                counter = 1;
            }
            draw(counter, images, ctx);
            update(counter);
        }
        if (keyCode === 187) {
            counter += 1;
            if (counter >= max){
                counter = max;
            }
            draw(counter, images, ctx);
            update(counter);
        }
        if(keyCode === 220) {
            start_timer();
        }
    }, false);

});