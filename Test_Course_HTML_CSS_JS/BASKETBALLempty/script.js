let quarter = 1;
let gameLog = [];
let fouls = [
    [0, 0, 0],
    [0, 0, 0]
];
let score = [
    [0, 0, 0],
    [0, 0, 0]
];
let kelinis = 0;



//Funkcija kuri prideda taškus
function addPoints(points, team) {

    const time = new Date().toLocaleTimeString();

    score[team - 1][kelinis] += points;
    // console.log(score);
    // console.log(team);

    let scoreAdd = document.querySelector("#log");
    scoreAdd.innerHTML += `[${time}] Komanda ${team} gavo ${score[team - 1][kelinis]} tasku<br>`;

    // console.log(score[team - 1]);


}
//Funkcija, kuri prideda prašangą
function addFoul(player, team) {

    const time = new Date().toLocaleTimeString();

    fouls[team - 1][player - 1] += 1;
    // fouls[team][player - 1] += 1;
    // console.log(player);
    // console.log(team);

    let pkpz = document.querySelector("#pkpz").value;
    let pkaz = document.querySelector("#pkaz").value;
    let pktz = document.querySelector("#pktz").value;

    let akpz = document.querySelector("#akpz").value;
    let akaz = document.querySelector("#akaz").value;
    let aktz = document.querySelector("#aktz").value;

    let zaidejuVardai = [pkpz, pkaz, pktz, akpz, akaz, aktz];

    console.log(pkpz);
    console.log(pkaz);
    console.log(pktz);

    console.log(akpz);
    console.log(akaz);
    console.log(aktz);

    let foulsp1 = document.querySelector("#fouls-team1-player1");
    foulsp1.innerHTML = `Prazangos: ${fouls[0][0]}`;
    let foulsp2 = document.querySelector("#fouls-team1-player2");
    foulsp2.innerHTML = `Prazangos: ${fouls[0][1]}`;
    let foulsp3 = document.querySelector("#fouls-team1-player3");
    foulsp3.innerHTML = `Prazangos: ${fouls[0][2]}`;


    let foulsp4 = document.querySelector("#fouls-team2-player1");
    foulsp4.innerHTML = `Prazangos: ${fouls[1][0]}`;
    let foulsp5 = document.querySelector("#fouls-team2-player2");
    foulsp5.innerHTML = `Prazangos: ${fouls[1][1]}`;
    let foulsp6 = document.querySelector("#fouls-team2-player3");
    foulsp6.innerHTML = `Prazangos: ${fouls[1][2]}`;

    let foulsAdd = document.querySelector("#log");
    foulsAdd.innerHTML += `[${time}] ${team}-os Komandos zaidejas ${player} gauna prazanga<br>`;

    // console.log("PIrma Komanda"+fouls[0]);
    // console.log("Antra Komanda"+fouls[1]);
    // console.log(fouls);

}

//Funkcija atvaizduojanti pražangą
function updateFoulDisplay(player, team) {

}

//Funkcija įrašanti įrašą į protokolą
function updateLog() {

}

//Kėlinio ir varžybų baigimo funkcija
function endQuarter() {
    
    const time = new Date().toLocaleTimeString();

    let pirmaKomandaScore = 0;
    let antraKomandaScore = 0;

    let pirmaKomandaFouls = 0;
    let antraKomandaFouls = 0;

    let quarter = document.querySelector("#log");
    
    for(let i = 0; i < score[0].length; i++){
        pirmaKomandaScore += score[0][i];
        antraKomandaScore += score[1][i];
    }

    quarter.innerHTML += `[${time}] Pirma komanda turi ${pirmaKomandaScore} tasku, antra komanda ${antraKomandaScore}<br>`;

    for(let i = 0; i<fouls[0].length; i++){
        pirmaKomandaFouls += fouls[0][i];
        antraKomandaFouls += fouls[1][i];
    }

    quarter.innerHTML += `[${time}] Pirma komanda turi ${pirmaKomandaFouls} prazangu, antra komanda ${antraKomandaFouls}<br>`
    
    kelinis += 1;
    if(kelinis==3){
        quarter.innerHTML += "! Pabaiga !";
        let endButton = document.querySelector("#end-quarter");
        endButton.style = "display: none";
        let restartButton = document.querySelector("#restart-quarter");
        restartButton.style = "display: inline";
    }


    // console.log(kelinis);
}

function restart(){

    kelinis = 0;
    let quarter = document.querySelector("#log");    
    quarter.innerHTML = "";
    let endButton = document.querySelector("#end-quarter");
    endButton.style = "display: inline";
    let restartButton = document.querySelector("#restart-quarter");
    restartButton.style = "display: none";
    
}

