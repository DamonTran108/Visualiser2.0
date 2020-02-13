function setup() {
    //setup code here
    model = new Model(100);
    width = windowWidth - 500;
    height = windowHeight - 200;
    rectWidth = width / model.getData().length;
    rectHeight = height / model.getData().length;
    shuffle = false;
    reset = false;
    sorting = false;
    var cnv = createCanvas(width, height);
    var x = (windowWidth - width) / 2;
    var y = (windowHeight - height) / 2;
    cnv.position(x, y);

}

function draw() {
    //drawing code here
    colorMode(RGB);
    background(173, 216, 230);

    if(shuffle) {
        model.shuffleData();
        shuffle = false;
        sorting = false;
    }

    if(reset) {
        model.resetData();
        reset = false;
        sorting = false;
    }

    if(sorting) {
        reset = false;
        shuffle = false;

    }

    var colorInterval = 315 / model.getData().length;
    for(var i = 0; i < model.getData().length; i++) {

        thisColor = colorInterval * model.getData()[i];
        colorMode(HSB);
        fill(thisColor, 100, 85);
        noStroke();
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

function shuffleData() {
    shuffle = !shuffle;
    reset = false;
}

function reset() {
    shuffle = false;
    reset = true;
}

async function bubbleSort(){

    shuffle = false;
    if(!sorting) {
        sorting = true;
        for(let i = 0; i < model.getData().length; i++){
            for(let j = 0 ; j < (model.getData().length-i); j++){
                if(model.getData()[j] > model.getData()[j+1]){
                    model.swap(j,(j+1));
                    await sleep(0);
                }
                if(shuffle || reset) {
                    break;
                }
            }
        }
        sorting = false;
    }
}

 function quickSort(start, end){

     if(start>= end){
       return;
     }



    let index =  partition(start, end);

    quickSort(start, index-1);
    quickSort(index+1, end);




}

 function partition(start, end){
  let pivotIndex = start;
  let pivotValue = model.getData()[end];


  for(let i = start; i < end; i++){
    if(model.getData()[i] <  pivotValue){

      model.swap(i, pivotIndex);

      pivotIndex++;
    }
  }
  model.swap(pivotIndex, end);
return pivotIndex;
}

function execute(){
  quickSort(0, model.getData().length-1);
  console.log(model.getData());
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
