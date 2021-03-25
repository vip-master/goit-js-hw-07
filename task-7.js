(() => {

    const input = document.createElement("input")
    const text = document.createElement("span")

    input.setAttribute("id", "font-size-control")
    input.setAttribute("type", "range")

    text.setAttribute("id", "text")
    text.textContent = "Абракадабра!"

    const setFont = () => text.style.fontSize = input.value + "px"

    setFont()

    input.addEventListener("input", setFont)

    document.querySelector("script").insertAdjacentElement("beforebegin", document.createElement("br"))
    document.querySelector("script").insertAdjacentElement("beforebegin", input)
    document.querySelector("script").insertAdjacentElement("beforebegin", document.createElement("br"))
    document.querySelector("script").insertAdjacentElement("beforebegin", text)
})()