const { File } = require('fileio');
const file = new File('D:\Dove-Projects\30-Days-Of-JavaScript\file.txt');

file.read(true) // If set to true, the data will be saved in File#cache
    .then(data => { /* Do something with the data */ })
    .catch(err => console.log(err));

file.write('data to be written', false /* <- if set to true the data will also be saved in the cache */ )
    .then(self => { /* do something */ })
    .catch(err => console.log(err));