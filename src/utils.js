
/*
 * Project final hand-in: Javascript File utils.js
 * 
 * Authors: Juan José Gómez Villegas (u1987338@campus.udg.edu)
 * 
 * Date: 2025-12-28
 */

/* FUNCTIONS */

/*
* getVarCss: return value of the css variable
* 
* Arguments is a property value, is the name of variable css
* 
* return:
*   void
*/
export function getCssVar(propertyValue) {
    return getComputedStyle(document.documentElement).getPropertyValue(propertyValue);
}

/*
* setCssVar: change value of the css variable
*
* Arguments is a property value, is the name of variable css, and the new value
* 
* return:
*   void
*/
export function setCssVar(propertyValue, newValue) {
    document.documentElement.style.setProperty(propertyValue, newValue);
}

/*
* setAnimation: set animation with name, duration and iteration count on the elem
* 
* Argument elem is the html element, followed by the properties of the rule animation the css
* for example: the name of animation, the duration and the iter count of animation
* 
* return:
*   void
*/
export function setAnimation(elem, animationName = "", animationDuration = "", animationIterCount = "") {
    elem.style.animationName = animationName;
    elem.style.animationDuration = animationDuration;
    elem.style.animationIterationCount = animationIterCount;
}
