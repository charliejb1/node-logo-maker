const fs = require('fs');

class Shape {
    constructor(shapeColor, textColor, letters) {
        this.shapeColor = shapeColor
        this.textColor = textColor
        this.letters = letters
    }


    renderSVG() {
        return `<svg  width="300" height="200" version="1.1" xmlns="http://www.w3.org/2000/svg">${this.create()}</svg>`
    }
}

class Circle extends Shape {
    constructor(shapeColor, textColor, letters) {
        super(shapeColor, textColor, letters)
    }
    create() {
        return `<circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/>
        <text x="150" y="118" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>`
    }
}

class Square extends Shape {
    constructor(shapeColor, textColor, letters) {
        super(shapeColor, textColor, letters)
    }
    create() {
        return `<rect x="60" y="40" width="150" height="150" fill="${this.shapeColor}"/>
        <text x="135" y="130" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>`
    }
}

class Triangle extends Shape {
    constructor(shapeColor, textColor, letters) {
        super(shapeColor, textColor, letters)
    }
    create() {
        return `<polygon points="150,0 0,200 300,200" fill="${this.shapeColor}"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.letters}</text>`
    }
}

module.exports = { Circle, Square, Triangle }


