const container = document.createElement('div')
const btnIncr = document.createElement('button')
const counter = document.createElement('span')
const btnDecr = document.createElement('button')

container.setAttribute("id", "counter")

btnIncr.setAttribute("type", "button")
btnIncr.setAttribute("data-action", "decrement")
btnIncr.textContent = "+1"

counter.setAttribute("id", "value")
let counterValue = 0
counter.textContent = counterValue

btnDecr.setAttribute("type", "button")
btnDecr.setAttribute("data-action", "increment")
btnDecr.textContent = "-1"

container.append(btnIncr, counter, btnDecr)

document.querySelector("script").insertAdjacentElement("beforebegin", container)

btnIncr.addEventListener("click", () => {
    counterValue++
    counter.textContent = counterValue
})
btnDecr.addEventListener("click", () => {
    counterValue--
    counter.textContent = counterValue
})