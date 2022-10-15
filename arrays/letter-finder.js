#!/bin/bash
var test = [" I love JavaScript, It is a relationship where we dont utter any word but each one of us move out satisfied"] 
function letterFinder(word, match) {
    for  i = 0; i < word.length; i++) {
	    if (word[i] == match) {console.log("Yay! We found the", match, "at" i)}
    else {
	    console.log("---No match found", i)
	   }
    }
letterFinder( test, "t")
