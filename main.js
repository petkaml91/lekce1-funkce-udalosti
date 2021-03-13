// tady je místo pro náš program

function scitani() {
document.querySelector("#vysledek").innerHTML = secti(4, 5);
}
/**
 * Sečte dvě čísla na vstupu a vrátí výsledek
 *
 * @param {int} a
 * @param {int} b
 */
function secti(a, b) {
  let c = a + b;
  return c;
}

/**
 * Upozorní uživatele při spuštění.
 */
function upozorni() {
  let text = document.querySelector('.ctverecek');
  text.innerHTML = 'nový text';
  console.log('Gratulace, právě jsi spustila tuto funkci!');
  alert("Gratulace, právě jsi spustila tuto funkci!");
}

function zelena() {
  let barva = document.querySelector('.ctverecek');
  barva.style.backgroundColor = 'green';
}