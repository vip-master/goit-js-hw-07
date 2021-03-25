(() => {

    const list = document.querySelectorAll("ul#categories>li.item");
    console.log(`В списке ${list.length} категории.`);
    list.forEach(e => {
        console.log(`Категория: ${e.querySelector("h2").textContent}`);
        console.log(`Количество элементов: ${e.querySelectorAll("li").length}`);
    });

})()