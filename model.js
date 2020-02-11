class Model {
    constructor(sizeOfData) {
        this._data = new Array();

        for(var i = 0; i < sizeOfData; i++) {
            this._data.push(i+1);
        }
    }

    swap(a, b) {
        var tempValue;

        tempValue = this._data[a];
        this._data[a] = this._data[b];
        this._data[b] = tempValue;
    }

    shuffleData() {
        var currentIndex = this._data.length;
        var randomIndex;
        var tempValue;

        while(currentIndex !== 0) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;
            this.swap(currentIndex, randomIndex);
        }
    }

    resetData() {
        for(var i = 0; i < this._data.length; i++) {
            this._data[i] = (i+1);
        }
    }

    getData() {
        return this._data;
    }

}
