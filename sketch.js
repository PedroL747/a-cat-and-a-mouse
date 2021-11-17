var bgImg
var gatu
var ratu
function preload() {
    //carregue as imagens aqui
    bgImg = loadImage("images/garden.png");
    imagemgatu1 = loadImage("images/cat1.png");
    imagemratu1 = loadImage("images/mouse1.png");
    imagemgatu2 = loadAnimation("images/cat2.png","images/cat3.png")
    imagemratu2 = loadAnimation("images/mouse2.png","images/mouse3.png")
    otraimagemgatu = loadImage("images/cat4.png")
    otraimagemratu = loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(1000,800);
    //crie os sprites de gato e rato aqui
    gatu = createSprite(870,600);
    gatu.addAnimation("sentaQlavemistoria", imagemgatu1)
    gatu.scale = 0.2
    ratu = createSprite(270,600)
    ratu.addAnimation("toma", imagemratu1)
    ratu.scale = 0.2
}

function draw() {

    background(bgImg);
    //Escreva a condição aqui para avaliar se o gato e o rato colidem
    if(gatu.x - ratu.x < (gatu.width - ratu.width)/2){
        gatu.velocityX=0
        gatu.addAnimation("eee",otraimagemgatu)
        gatu.changeAnimation("eee")
        gatu.x = 370;
        gatu.scale = 0.2
        ratu.addAnimation("pegadinhadomalandrohehe",otraimagemratu)
        ratu.changeAnimation("pegadinhadomalandrohehe")
        ratu.scale = 0.2
    }
    drawSprites();
}


function keyPressed(){

  //Para mover e alterar a animação, escreva o código aqui
    if(keyCode === LEFT_ARROW){
        ratu.addAnimation("naovaite", imagemratu2)
        ratu.changeAnimation("naovaite")
        ratu.frameDelay = 25
        gatu.velocityX = -5
        gatu.addAnimation("aseulixo",imagemgatu2)
        gatu.changeAnimation("aseulixo")
        gatu.frameDelay = 25
    }

}
