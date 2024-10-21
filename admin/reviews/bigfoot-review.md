# bigfoot_t5.js

## How to Run / How Got it Working
- npm install -g 
-- (1) grunt-cli (2) grunt (3) coffee-script
-- Open Powershell as admin, cd into project, Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope CurrentUser (CHANGE IT BACK to Undefined LATER!)
- (In Terminal) coffee Gruntfile.coffee
- Added index.html, tasks for generating the html and starting a server at localhost:9000/index.html
- Run grunt serve (alternatively, grunt) (lol)
- Need to include 2 scripts, bigfoot.js, as well as jquery.js

## Design Decisions:
- Bigfoot essentially dependent on 2 files, jquery-2.2.0.min.js and bigfoot.js
- What does Gruntfile do? What do the other files do? #TODO
- 

## Code Organization, Repo Organization and quality
- Github repo organization quality is pretty standard that the most difficult thing was comprehending a repo with old technologies
- All logic written inside bigfoot.coffee, a 1400 line giant file. It is very hard to find where to look to when we tried to change things.



## Pattern and language use
- Since all logic is in giant coffee file, since CoffeeScript's usage has been declining over the years, we can see that it would lead to BigFoot being harder to maintain and use nowadays and in the future. 
#TODO Add something about scss maybe?

## Code Review: 
- Requires Gruntfile to run, need to install Grunt
- Need to install sass, Ruby dependencies (had a lot of difficulty installing sass (Ruby sass is used in this project but deprecated, installed sass using npm but had to modify Gruntfile to get sass to work)
- Uses scss instead of css
- Written in CoffeeScript (Last updated 2 years ago) + JS so need to install CoffeeScript
- Requires installation of JQuery 
- We think that it is very counter-intuitive that in order to use bigfoot, we need to specifically give link to jquery version 2.2.0, a particularly old version. BigFoot is not self-contained
- HTML injected in button 'contentMarkup' variables in bigfoot.coffee (inefficient for making changes to button shape or style) 
- No unittests in the repository


## Use BigFoot?
- No. A lot of the dependencies are using older versions that have been deprecated or just aren't supported anymore
- The last commit is 8 years ago, not supported anymore
- Documentation / Tutorials are quite sparse, even the link on the repo to the project website doesn't work
- Since everything is inside giant coffee file, very hard to locate where to change when trying to change anything
- More or less a creation by 10x programmer who does not expect others to be able to maintain/update their code. We can see this by the many usages of using HTML as Strings, and injecting that String to achieve funcionalities in the code. 

-----------------------------------------------------------------------------------------------
## Suggestions for Changes to BigFoot:
- Make a footnote within a footnote with a backbutton between footnotes
- Change button to look like a traffic light


-------------------------------------------------------------------------