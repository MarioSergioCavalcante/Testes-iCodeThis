const cor = document.querySelectorAll("[data-color]");

function geraCor() {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);

  var cor = "#";
  if (r < 16) {
    cor += "0";
  }
  cor += r.toString(16);
  if (g < 16) {
    cor += "0";
  }
  cor += g.toString(16);
  if (b < 16) {
    cor += "0";
  }
  cor += b.toString(16);

  return cor;
}

cor.forEach((item) => {
    atribuiCor(item);
  item.addEventListener("click", function () {
    var colorname = document.querySelector("[data-colorinfo]");
   
    var colorcopied = document.querySelector("[data-colorcopied--active]");
    colorcopied.classList.add("colorcopied--active");
    colorcopied.innerHTML =   "<p>Color <span data-colorinfo class='color-name'>"+item.children[1].textContent+"</span> copied to your clipboard</p>"
    setTimeout(function () {
      colorcopied.classList.remove("colorcopied--active");
    }, 1000);
    navigator.clipboard.writeText(cor);

  });

});



const btn = document.querySelector(".btn--generate");

btn.addEventListener("click", function () {
  cor.forEach((item) => {
    atribuiCor(item);
  });
});

function atribuiCor(item) {
    var cor = geraCor();
    item.children[0].style = `background-color: ${cor}`;
    item.children[1].textContent = `${cor}`;
}


document.addEventListener("keydown", function (event) {
    if (event.code === "Space") {
        cor.forEach((item) => {
            atribuiCor(item);
        });
    }else{
        if(event.code === "KeyC"){
            var text = "";
       
            cor.forEach((item) => {
                text += item.children[1].textContent + " ";
            });
            navigator.clipboard.writeText(text);
            var colorcopied = document.querySelector("[data-colorcopied--active]");
            colorcopied.textContent = "Copied";
            colorcopied.classList.add("colorcopied--active");
            setTimeout(function () {
              colorcopied.classList.remove("colorcopied--active");
            }, 1000);
        
        }
    }
    }
);


