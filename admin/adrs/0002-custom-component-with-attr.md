# ??

## Context and Problem Statement

How should we structure the interface that people using tinyfoot will work with?

## Considered Options

* button with a class
* custom component with a class
* custom component

and 

* footnote text as attribute
* footnote text as innerhtml

and 
* innerhtml set to dots automatically
* check innerhtml before setting to dots by default

and 

* have user place popover to be used in html
* generate popover document element in JS
* check for popover element existing before creating one in JS

and 

* popover display set in JS to show/hide
* popover removed/added in JS to show/hide

## Decision Outcome

- custom component without a class
    - This is currently the simplest syntax, and the easiest to use from a developer perspective. 
        - \<button class="tinyfoot"/> is a little clunkier than \<tiny-foot/>
        - signifies different functionality expected from the component compared to button
        - 

- footnote text as attribute
    - 

- check innerhtml before settings to dots by default
    - 

- check for popover element existing before creating one in JS
    - 

- popover display set in JS to show/hide
    - 




