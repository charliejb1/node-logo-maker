const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require("./library/shapes")

// inquirer questions for user to input their desired text, shape and colors

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
// Defining the variable of genericShape based on user input. This also references the classes from shapes.j
  .then(({ shape, shapeColor, textColor, letters }) => {
    let genericShape;
    if (shape === "circle") {
      genericShape = new Circle(shapeColor, textColor, letters);
    } else if (shape === "square") {
      genericShape = new Square(shapeColor, textColor, letters);
    } else if (shape === "triangle") {
      genericShape = new Triangle(shapeColor, textColor, letters);
    }
// used for writing the code of the final shape and text to the SVG file.
    fs.writeFile('./library/logo.svg', genericShape.renderSVG() ,(err) => {
      if (err) {console.log(err)}
      else {console.log("Successfully created logo")}

    })
  })
