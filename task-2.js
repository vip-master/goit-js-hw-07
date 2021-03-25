(() => {

    const ingredients = [
        'Картошка',
        'Грибы',
        'Чеснок',
        'Помидоры',
        'Зелень',
        'Приправы',
    ];

    document.querySelector("ul#ingredients").append(...ingredients.map(e => {
        const res = document.createElement("li");
        res.textContent = e;
        return res
    }))

})()