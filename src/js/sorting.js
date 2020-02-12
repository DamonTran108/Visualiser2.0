function setup() {
    //setup code here
    model = new Model(100);
    width = windowWidth - 500;
    height = windowHeight - 200;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    shuffle = true;
    reset = false;
    var cnv = createCanvas(width, height);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);
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
    width = windowWidth - 500;
    height = windowHeight - 200;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    resizeCanvas(width, height);
}
