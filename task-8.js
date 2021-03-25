(() => {

    const controls = document.createElement("div")
    controls.setAttribute("id", "controls")

    const input = document.createElement("input")
    input.setAttribute("type", "number")
    input.setAttribute("min", "0")
    input.setAttribute("max", "100")
    input.setAttribute("step", "1")

    const render = document.createElement("button")
    render.setAttribute("type", "button")
    render.setAttribute("data-action", "render")
    render.textContent = "Создать"

    const destroy = document.createElement("button")
    destroy.setAttribute("type", "button")
    destroy.setAttribute("data-action", "destroy")
    destroy.textContent = "Очистить"
    destroy.disabled = true;

    const boxes = document.createElement("div")
    boxes.setAttribute("id", "boxes")

    const createBoxes = (num) => {
        for (let i = 0; i < num; i++) {
            const div = document.createElement("div")
            div.style.backgroundColor = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`
            div.style.width = `${30 + 10 * i}px`
            div.style.height = `${30 + 10 * i}px`
            boxes.appendChild(div)
        }
        destroy.disabled = false;
        render.disabled = true;
    }

    const destroyBoxes = () => {
        boxes.innerHTML = ""
        destroy.disabled = true;
        render.disabled = false;
    }

    render.addEventListener("click", () => createBoxes(input.value))

    destroy.addEventListener("click", destroyBoxes)

    controls.append(input, render, destroy)

    document.querySelector("script").insertAdjacentElement("beforebegin", controls)
    document.querySelector("script").insertAdjacentElement("beforebegin", boxes)

})()