(() => {

    const input = document.createElement("input")
    const title = document.createElement("h1")
    const text = document.createElement("span")

    input.setAttribute('type', 'text')
    input.setAttribute('placeholder', 'Ваше имя?')
    input.setAttribute('id', 'name-input')

    text.setAttribute('id', 'name-output')

    title.append(document.createTextNode("Привет, "), text, document.createTextNode("!"))

    console.log(title)

    text.textContent = 'незнакомец'
    input.addEventListener("input", () => {
        text.textContent = input.value;
        if (input.value == "") text.textContent = 'незнакомец'
    })

    document.querySelector("script").insertAdjacentElement("beforebegin", input)
    document.querySelector("script").insertAdjacentElement("beforebegin", title)



})()