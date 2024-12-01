console.log("text1");
console.log("text2");
kreipimasis();
console.log("text3");
console.log("text4");
kreipimasisAsinchroniskai()
console.log("text5");
console.log("text6");



function kreipimasis() {
    fetch("https://in3.dev/knygos/")
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data);
    });
    console.log("pabaiga");
}

async function kreipimasisAsinchroniskai(){
    const promise = await fetch("https://in3.dev/knygos/")
    const response = await promise.json();
    console.log("pabaiga async function");
}