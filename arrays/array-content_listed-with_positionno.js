#!/bin/node
var school = [ 'Order Of Merit', 'Positions', 'Class Teacher', 'Stream', 'Name', 'Course']
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++)
        console.log(i+1, arr[i])
}
listArrayItems(school)

