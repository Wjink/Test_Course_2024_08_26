
const GBPEUR = 1.19, EURUSD = 0.90, GBPUSD = 1.32;

const valiuta1 = prompt("Jusu valiuta?");
const valiuta2 = prompt("Nauja valiuta?");
const valiuta1_kiekis = prompt("Kiek "+valiuta1+" norite pakeisti i "+valiuta2+"");
//const valiuta1_kiekis = prompt(`Kiek ${valiuta1} norite pakeisti i ${valiuta2}`);

const valiuta1_kiekisNumber = number(valiuta1_kiekis);

console.log(valiuta1, valiuta2);
//console.log(valiuta2);