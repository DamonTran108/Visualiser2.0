function setup() {
    //setup code here
    model = new Model(500);
    width = windowWidth;
    height = windowHeight;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    shuffle = false;
    reset = false;
    createCanvas(width, height);
}

function draw() {
    //drawing code here
    background(51);
    for(var i = 0; i < model.getData().length; i++) {
        rect(i * rectWidth, height, rectWidth, -(rectHeight * model.getData()[i]));
    }

    if(shuffle) {
        model.shuffleData();
        shuffle = false;
    }

    if(reset) {
        model.resetData();
        reset = false;
    }
}

function windowResized() {
    width = windowWidth;
    height = windowHeight;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    resizeCanvas(width, height);
}
