let cards = Array.from(document.querySelectorAll(".card"));
let clicked1;
let clicked2;

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", () => {
    cards[i].classList.add("open");
    if (!clicked1) {
      clicked1 = cards[i];
    } else {
      clicked2 = cards[i];
      verify();
    }
    console.log(clicked1);
  });
}

function verify() {
  if (clicked1.getAttribute("data-key") === clicked2.getAttribute("data-key")) {
    
  } else {
    clicked1.classList.remove("open");
    clicked2.classList.remove("open");
  }
  clicked1 = null;
  clicked2 = null;
}

function melange() {
  const results = [];
  const length = cards.length
  for (let i = 0; i < length; i++) {
    const random = Math.floor(Math.random() * cards.length)
    results.push(cards[random])
    cards = cards.filter(card => card !== cards[random] )
  }
return results
}

console.log(melange());