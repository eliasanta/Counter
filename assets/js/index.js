//get input with differente way 
const counter = document.getElementsByClassName('counter')[0];
const colourBtns = document.querySelectorAll('div.colour-btns>button');
const element = document.querySelector('.counter-obj');
const write=document.querySelector('.back');
//functions
const increase = () => counter.innerText++;
const decrease = () => counter.innerText--;
const setColour = (event) => (counter.style.color = event.target.style.backgroundColor);

function resetCounter() {
    counter.innerHTML = 0;
    
}

colourBtns.forEach(btn => btn.addEventListener('click', setColour));

function removeCounter(){
element.classList.add('animate__animated', 'animate__bounceOutLeft');
write.style.visibility = "visible";


}
function blink_one() {
    document.getElementById('blink').style.visibility='visible';
    setTimeout('blink_two()',700);
    }
function blink_two() {
    document.getElementById('blink').style.visibility='hidden';
    setTimeout('blink_one()',700);
    }
 blink_one();
