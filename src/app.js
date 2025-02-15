import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

window.onload = function() {
  //write your code here
  let randomNumberWho = getRandomInt(who.length);
  let randomNumberaction = getRandomInt(action.length);
  let randomNumberwhat = getRandomInt(what.length);
  let randomNumberwhen  = getRandomInt(when.length);
  let whoExcuse = who[randomNumberWho];
  let actionExcuse = action[randomNumberaction];
  let whatExcuse = what[randomNumberwhat];
  let whenExcuse = when[randomNumberwhen];
  let space = " ";
  let excuse = whoExcuse + space + actionExcuse + space + whatExcuse + space + whenExcuse;
  var elemento = document.getElementById('excuse');
  console.log(elemento);
  elemento.innerHTML = excuse;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
