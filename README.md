# [<img src="images/PacMan1.png" height="25px" width="25px"/>](PacManFront) PacMen [<img src="images/PacMan3.png" height="25px" width="25px"/>](PacManBack)

## Description 
PacMen move accross the browserfrom right to left within screen boundary, change direction on either hitting the border of the window and eating "air" as they move.
Originally, this showed how to move one Pacman from left to right and right to left in a straight line, changing direction upon hitting a border of the window. Next, it allowed the ability to add more than one Pacman and to have them move not just in a horizontal plane but a vertical plance as well.

---------

## How to Run 
- Open the .html file in a browser (Chrome, Edge, Safari, Firefox)
- When the browser is loaded, click on the 'Add PacMan' button *the more you click, the more Pacmen are created
- Click on the 'Start Game' button to have thhe Pacmen begin moving *You can add more Pacmen at any time by simply clicking on the 'Add Pacman' button

---------

## Improvements Made
- 2022-02-04: Randomized the size of the Pacman when created
- 2022-02-04: Upon hitting the left or right border of the window, change direction that PacMan is facing *each Pacman is controlled seperately
- 2022-02-04: Have Pacman eat "air" as it moves *while in the first version, it was not in the second version
- 2022-02-04: Changed z position of the buttons to ensure they are always on top *since start position of Pacmen are random, they could be on top of the buttons, and hence block user access
- 2022-02-04: Moved style to css and javascript to js files

---------

## Roadmap of future improvements
- Add ghosts
- Add the ability to delete a ghost upon clicking on the ghost

---------

## Files 
- **/images/PacMan1.png** - Facing left with mouth open 
- **/images/PacMan2.png** - Facing left with mouth closed 
- **/images/PacMan3.png** - Facing right with mouth open 
- **/images/PacMan4.png** - Facing right with mouth closed 
- **index.html** - Start-up File to be opened by browser 
- **styles.css** - Stylesheet file that positions objects, controls text, colors, and layout
- **pacman.js** - Javascript file manipulating what is occuring in the browser 

---------

## Purpose 

This was done as an assignment in the MIT course - Full Stack Development with Mern

---------

The MIT License (MIT)
=====================

Copyright © 2022 slumpbuster
Copyright © 2020 John Williams

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the “Software”), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
