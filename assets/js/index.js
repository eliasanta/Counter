const counter = document.querySelector('h2.counter')
const increaseBtn = document.querySelector('button.increase')
const decreaseBtn = document.querySelector('button.decrease')
const colourBtns = document.querySelectorAll('div.colour-btns>button')

const increase = () => counter.innerText++
const decrease = () => counter.innerText--
const setColour = e => (counter.style.color = e.target.style.backgroundColor)

increaseBtn.addEventListener('click', increase)
decreaseBtn.addEventListener('click', decrease)
colourBtns.forEach(btn => btn.addEventListener('click', setColour))
