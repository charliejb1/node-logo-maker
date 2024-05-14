const Shapes = require("./shapes.js")


describe('Circle', () => {
    test("It should return correct SVG if create is called", () => {
        const shape = new Shapes.Circle("green", "white", "abc",);
        expect(shape.create()).toEqual(`<circle cx="150" cy="100" r="80" fill="green"/>
        <text x="150" y="118" font-size="60" text-anchor="middle" fill="white">abc</text>`);
    })

})

describe('Square', () => {
    test("It should return correct SVG if create is called", () => {
        const shape = new Shapes.Square("green", "white", "abc",);
        expect(shape.create()).toEqual(`<rect x="60" y="40" width="150" height="150" fill="green"/>
        <text x="135" y="130" font-size="60" text-anchor="middle" fill="white">abc</text>`);
    })

})

describe('Triangle', () => {
    test("It should return correct SVG if create is called", () => {
        const shape = new Shapes.Triangle("green", "white", "abc",);
        expect(shape.create()).toEqual(`<polygon points="150,0 0,200 300,200" fill="green"/>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">abc</text>`);
    })

})