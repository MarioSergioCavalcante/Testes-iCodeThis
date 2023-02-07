var JsonMusic = [
  {
    id: 1,
    title: "The Less I Know The Better",
    artist: "Tame Impala",
    album: "Currents",
    duration: "3:40",
    cover: "https://i.scdn.co/image/ab67616d0000b2739e1cfc756886ac782e363d79",
  },
  {
    id: 2,
    title: "505",
    artist: "Arctic Monkeys",
    album: "Favorite Worst Nightmare",
    duration: "4:13",
    cover:
      "https://i.pinimg.com/originals/12/32/63/1232632b5e262b335c84a13286753a01.jpg",
  },
  {
    id: 3,
    title: "Cold Heart - PNAU Remix",
    artist: "Elton John & Dua Lipa",
    album: "Cold Heart (PNAU Remix)",
    duration: "3:22",
    cover:
      "https://upload.wikimedia.org/wikipedia/pt/3/3f/Cold_Heart_-_Elton_John_%26_Dua_Lipa.png",
  },
  {
    id: 4,
    title: "As It Was",
    artist: "Harry Styles",
    album: "As It Was",
    duration: "2:47",
    cover:
      "https://e-cdn-images.dzcdn.net/images/cover/b0e936124f59e669ddba02ebe5893f95/264x264-000000-80-0-0.jpg",
  },
  {
    id: 5,
    title: "Construção",
    artist: "Chico Buarque",
    album: "Construção",
    duration: "6:23",
    cover:
      "https://cdns-images.dzcdn.net/images/cover/1ba965333c86fd5f3fb3a98d22b55bc6/500x500.jpg",
  },
];

var button = document.querySelector("[data-play]");
button.addEventListener("click", function () {
  if (button.textContent == "pause_circle_outline") {
    button.textContent = "play_circle_outline";
  } else {
    button.textContent = "pause_circle_outline";
  }
});

var bib = document.querySelector("[data-add]");
bib.addEventListener("click", function () {
  if (bib.textContent == "library_add_check") {
    bib.textContent = "library_add";
  } else {
    bib.textContent = "library_add_check";
  }
});

var current = 0;

var next = document.querySelector("[data-next]");
next.addEventListener("click", function () {
  current++;
  if (current > JsonMusic.length - 1) {
    current = 0;
  }
  TrocaMusica();
});

var prev = document.querySelector("[data-prev]");
prev.addEventListener("click", function () {
  current--;
  if (current < 0) {
    current = JsonMusic.length - 1;
  }

  TrocaMusica();
});
var list = document.querySelector("[data-list]");

function AddList() {
  var listMusic = "";
  for (var i = 0; i < JsonMusic.length; i++) {
    listMusic +=
      "<li><div class= 'lista--item'><span class='song--title' id='t-" +
      i +
      "'>" +
      JsonMusic[i].title +
      "</span><span> " +
      JsonMusic[i].duration +
      "</span></div></li>";
  }
  list.innerHTML = listMusic;
}

AddList();

function TrocaMusica() {
  for (var i = 0; i < list.children.length; i++) {
    list.children[i].classList.remove("active");
  }
  console.log("current: " + current);
  var cover = document.querySelector("[data-cover]");
  cover.src = JsonMusic[current].cover;
  list.children[current].classList.add("active");
  var title = document.querySelector("[data-title]");
  title.textContent = JsonMusic[current].title;
  var artist = document.querySelector("[data-artist]");
  artist.textContent = "- "+ JsonMusic[current].artist +" -";
  var tempo = document.querySelector("[data-tempoFinal]");
  tempo.textContent = JsonMusic[current].duration;

}

TrocaMusica();

function IniciaClick() {
  var listMusic = document.querySelectorAll("[data-list] li");
  console.log(listMusic);
  for (var i = 0; i < listMusic.length; i++) {
    console.log("i: " + i);
    listMusic[i].addEventListener("click", function () {
      console.log("i: ", this.children[0].children[0].id.split("-")[1]);
      current = this.children[0].children[0].id.split("-")[1];
      TrocaMusica();
    });
  }
}

IniciaClick();
