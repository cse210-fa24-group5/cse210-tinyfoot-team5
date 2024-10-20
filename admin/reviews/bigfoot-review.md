# bigfoot_t5.js

## How to Run / How Got it Working
- npm install -g 
-- (1) grunt-cli (2) grunt (3) coffee-script
-- Open Powershell as admin, cd into project, Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser (CHANGE IT BACK to Undefined LATER!)
- (In Terminal) coffee Gruntfile.coffee
- Added index.html, tasks for generating the html and starting a server at localhost:9000/index.html
- Run grunt serve (alternatively, grunt) (lol)
- 

## Code Review: 
- Requires Gruntfile to run, need to install Grunt
- Need to install sass, Ruby dependencies (had a lot of difficulty installing sass (Ruby sass is used in this project but deprecated, installed sass using npm but had to modify Gruntfile to get sass to work)
- Uses scss instead of css
- Written in CoffeeScript (Last updated 2 years ago) + JS so need to install CoffeeScript
- Requires installation of JQuery 
- HTML injected in button 'contentMarkup' variable in bigfoot.coffee (inefficient for making changes to button shape or style) 


## Use BigFoot?
- No. A lot of the dependencies are using older versions that have been deprecated or just aren't supported anymore
- Documentation / Tutorials are quite sparse, the link on the repo doesn't work

-----------------------------------------------------------------------------------------------
## Suggestions for Changes to BigFoot:
- Make a footnote within a footnote with a backbutton between footnotes
- Change button to look like a traffic light


-------------------------------------------------------------------------