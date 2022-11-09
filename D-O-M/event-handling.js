#!/bin/node
// This function querries and handles events associated with a specified element with reference to an event ie event listener

const target = document.querrySelector("body") // This querry targets all the body element in an html document.

// Event handling function.
function.handleClick(){
    console.log("Body Clicked")}
target.addEventListener("click", handleClick)
function handleClick(){
console.log("Clicked the heading")

}
