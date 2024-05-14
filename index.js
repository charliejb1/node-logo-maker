const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./library/shapes")

console.log(Circle)

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Enter 3 Letters',
      name: 'letters',
      validate: function (input) {
        if (input.length === 3 && /^[a-zA-Z]+$/.test(input)) {
          return true
        }
      }
    },
    {
      type: 'input',
      message: 'Which color do you want your text to be?',
      name: 'textColor',
    },
    {
      type: 'list',
      message: 'Which shape do you want?',
      name: 'shape',
      choices: ['circle', 'triangle', 'square']
    },

    {
      type: 'input',
      message: 'Which color do you want your shape to be?',
      name: 'shapeColor',
    },
  ])

  .then(({ shape, shapeColor, textColor, letters }) => {
    let genericShape;
    if (shape === "circle") {
      genericShape = new Circle(shapeColor, textColor, letters);
    } else if (shape === "square") {
      genericShape = new Square(shapeColor, textColor, letters);
    } else if (shape === "triangle") {
      genericShape = new Triangle(shapeColor, textColor, letters);
    }

    fs.writeFile('./library/logo.svg', genericShape.renderSVG() ,(err) => {
      if (err) {console.log(err)}
      else {console.log("Successfully created logo")}

    })
  })
