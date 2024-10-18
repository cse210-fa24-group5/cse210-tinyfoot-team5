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


-----------------------------------------------------------------------------------------------









-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------


by [Chris Sauve](http://cmsauve.com/projects)

Bigfoot is a jQuery plugin that creates exceptional footnotes. Simply include the code on your pages and footnotes will be detected automatically and improved in the following ways:

- Links to footnotes will be replaced with clickable/ tappable buttons, making them substantially easier to hit.

- Footnote content will appear in a popover directly beside the footnote button when it is clicked/ tapped, which cuts out the annoying bouncing around the page that footnotes typically result in.

- The active popovers will be resized and repositioned to ensure that they continue to be completely visible on-screen and aesthetically pleasing: this makes it perfect for mobile devices and responsive designs.

This project includes both the script itself and a default style to apply to the footnote button/ content that are eventually generated. There are also a variety of additional styles that illustrate some of the possibilities for styling these components.

The script has many configurable options from having popovers instantiated on hover, to allowing multiple active footnotes, to setting specific timeouts for popover creation/ deletion. It also returns an object that allows you to activate, remove, add breakpoints, and reposition popovers properly. All of these options and return functions are shown in detail at the script's [project page](http://www.bigfootjs.com/). You can also see a [demo of the project in action](http://www.bigfootjs.com/#demo) on the same page.

Requires jQuery 1.7+ at a minimum (for `.on()`) and jQuery 1.8+ for full functionality (1.8 automatically prefixes the `transform`/ `transition` properties).

*Note:* Bigfoot is currently incompatible with jQuery 3.0+ (see [#54](https://github.com/lemonmade/bigfoot/issues/54))

Questions? Issues? Feature requests? Check out the [Github page](https://github.com/lemonmade/bigfoot) for this project.
