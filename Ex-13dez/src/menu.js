const menu = [document.getElementById("menu__dash"),
              document.getElementById("menu__post"),
              document.getElementById("menu__live"),
              document.getElementById("menu__message"),
              document.getElementById("menu__library")];

menu.forEach(function (item) {
    item.addEventListener("click", function () {
        console.log("clicou no " + item.id);
        item.classList.add("menu__opcoes--ativo");
        menu.forEach(function (item2) {
            if (item2.id != item.id) {
                item2.classList.remove("menu__opcoes--ativo");
            }
        });
    });
});