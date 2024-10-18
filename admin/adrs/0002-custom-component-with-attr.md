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
        - Cons:
            - might lose flexibility with options that a button component provides
            - user might have to override styling if they want a different look

- footnote text as attribute
    - If we let footnote text be an attribute, we allow for the user to define their own custom innerHTML for the footnote to be whatever they want for flexibility.
        - Cons: 
            - User can only have string content as footnote  

- check innerhtml before settings to dots by default
    - We want the user to use custom innerhtml on their footnote button, so its better to offer them that flexibility and if they choose not to have any content, we can format it to display dots automatically

- check for popover element existing before creating one in JS
    - We want the user to have flexibility in the style of popover so they can define it however they'd like in HTML/CSS, and if they choose not to provide their own popover, we can provide it for them.

- popover display set in JS to show/hide
    - This can accomodate custom popovers, as we dont have to save them and reinsert them each time a footnote is shown/hidden.



