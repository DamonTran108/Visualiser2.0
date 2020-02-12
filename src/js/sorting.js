function setup() {
    //setup code here
    model = new Model(500);
    width = windowWidth;
    height = windowHeight;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    shuffle = true;
    reset = false;
    createCanvas(width, height);
}

function draw() {
    //drawing code here
    background(51);

    
    if(mouseIsPressed) {
        model.shuffleData();
    }

    if(reset) {
        model.resetData();
        reset = false;
    }

    var colorInterval = 360 / model.getData().length;
    for(var i = 0; i < model.getData().length; i++) {

        thisColor = colorInterval * model.getData()[i];
        colorMode(HSB);
        fill(thisColor, 100, 100);

        rect(i * rectWidth, height, rectWidth, -(rectHeight * model.getData()[i]));
    }
}

function windowResized() {
    width = windowWidth;
    height = windowHeight;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    resizeCanvas(width, height);
}
