function addText(skaicius){
    const rez = `${skaicius} missisipe`;
    return rez;
}

// const missisipeSkaicius = addText(4);
// console.log(missisipeSkaicius);

const masyvas = [1, 2, 3, 4, 5, 6].map(addText);

console.log(masyvas);