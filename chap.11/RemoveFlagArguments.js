function bookConcert(isPermium) {
    if (isPermium) {

    } else {

    }
}

const concert = bookConcert(true);

///////////////////////////////////////////

function setDimension(name, value) {
    if (name == "height") {
        this.height = value;
        return;
    } else if (name == "width") {
        this.width = value;
        return;
    }
}

function setHeight(value) {
    this.height = value;
}

function setWidth(value) {
    this.width = value;
}
