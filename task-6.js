(() => {

    const input = document.createElement("input")

    input.setAttribute("type", "text")
    input.setAttribute("id", "validation-input")
    input.setAttribute("data-length", "6")
    input.setAttribute("placeholder", "Введи 6 символов")

    input.addEventListener("blur", () => {
        if (input.value.length < input.dataset.length) {
            input.classList.remove("valid")
            input.classList.add("invalid")
        } else {
            input.classList.add("valid")
            input.classList.remove("invalid")
        }
    })
    input.addEventListener("focus", () => {
        input.classList.remove("valid")
        input.classList.remove("invalid")
    })

    document.querySelector("script").insertAdjacentElement("beforebegin", input)

})()