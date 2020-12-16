# Sudoku
## Rules of the game
A sudoku is a 9*9 grid, it solved when all grid cells have been filled with numbers from 1 to 9 according to the following rules:
- Each row and column must contain numbers 1-9 (once only)
- Each 3*3 must contain numbers 1-9 (also once only)

![Alt text](./images/sudoku1.jpg)

## Pre-generate the game
- Some cells will be pre-filled 
- The number of these cells depend on difficulty (easy, medium or hard)

![Alt text](./images/sudoku_diffculty.jpg)

## Algorithm
1. Check if the rows and columns contain values 1-9, without repetition.
2. Check if each of the 9 sub-squares contains values 1-9, without repetition.
3. If the previous two conditions are true then the Sudoku board is valid; otherwise, it is invalid.

## Technologies used and structure
HTML, CSS, JavaScript and jQuery using Visual Studio Code.
HTML pages: 
- landing page (index.html) contains information and rules of the game and three options to start and play 
- (level1.html, level2.html, level3.html) difficulty pages: easy, medium and hard
CSS file (style.css) control the style of the HTML pages
(script.js) contains JavaScript and jQuery functions that run website
Images folder contains background picture and some screenshots

## Getting Started
After choosing a level you will see a board with empty cells and some of them have numbers, as shown in below screen shot

![Alt text](./images/start_game.jpg)

You have to fill all empty cells following previous rules if you feel need help you can click 'Hint' button but there are only five hints. 
If you want to calculate the time spent solving the puzzel just click the 'start' button on the timer side.
