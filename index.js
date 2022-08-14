// import {x} from './app'
const app  = require('./app');

// console.log(app)
// console.log(app.x,app.z())

var a = 20;
var b = 30;
var c = 50;
// console.log(a+b+c);

if(a === 20){
    // console.log("matched");
}

const arr = [2,3,4,5,8,1,3];
// console.log(arr);

let result = arr.filter((item) => {
    // return item === 3;
    return item >=4;
})
console.warn(result);

