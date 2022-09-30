/*
function earth() {
    var weight = getWeight();
    var answer = weight;
    document.getElementById("ans").innerHTML = answer;

}
*/

// Kg is the unit of mass, Kgw is the unit of weight, so is newton(N)

/**
 * Gets the value from weight input
 * @returns {number}
 */
function getWeight() {
    return document.getElementById("weight").value;
}

// Sets The Output Text In The Output Box
function ansOutput(answer, planet) {
    document.getElementById("ans").innerHTML = `Your weight is ${answer}kg on ${planet}.`;
}

// Sun Button's Function, Divide 274 Which Is Sun's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Sun's G.
function sun() {
    var weight = getWeight();
    var answer = weight * (274 / 9.807);
    //var answer = (weight * 9.81) * 0.16;
    //var fanswer = answer / 9.81
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "sun");
}

// Moon Button's Function, Divide 1.625 Which Is Moon's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Moon's G.
function moon() {
    var weight = getWeight();
    var answer = weight * (1.625 / 9.807) // Moon's Gravity 0.16G (1.62/9.81) 1.62 Accerleration 重力加速度
    //var answer = (weight * 9.81) * 0.16;
    //var fanswer = answer / 9.81
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "moon");
}

// Mercury Button's Function, Divide 3.7 Which Is Mercury's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Mercury's G.
function mercury() {
    var weight = getWeight();
    var answer = weight * (3.7 / 9.807); // Mercury's Gravity 0.378G (3.7/9.81)
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "mercury");
}

// Venus Button's Function, Divide 8.87 Which Is Venus's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Venus's G.
function venus() {
    var weight = getWeight();
    var answer = weight * (8.87 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "venus");
}

// Mars Button's Function, Divide 3.721 Which Is Mars's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Mars's G.
function mars() {
    var weight = getWeight();
    var answer = weight * (3.721 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "mars");
}

// Jupiter Button's Function, Divide 24.79 Which Is Jupiter's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Jupiter's G.
function jupiter() {
    var weight = getWeight();
    var answer = weight * (24.79 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "jupiter");
}

// Saturn Button's Function, Divide 10.44 Which Is Saturn's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Saturn's G.
function saturn() {
    var weight = getWeight();
    var answer = weight * (10.44 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "saturn");
}

// Uranus Button's Function, Divide 8.87 Which Is Uranus's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Uranus's G.
function uranus() {
    var weight = getWeight();
    var answer = weight * (8.87 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "uranus");
}

// Neptune Button's Function, Divide 11.15 Which Is Neptune's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Neptune's G.
function neptune() {
    var weight = getWeight();
    var answer = weight * (11.15 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "neptune");
}

// Pluto Button's Function, Divide 0.62 Which Is Pluto's Gravity By 9.807 Which Is Earth's Accerleration Of Gravity, So You Can Get Pluto's G.
function pluto() {
    var weight = getWeight();
    var answer = weight * (0.62 / 9.807);
    var fanswer = answer.toFixed(2); //Set Answer To Only 2 Decimal Places

    ansOutput(fanswer, "pluto");
}

/*
Code For Light Dark Mode Button
*/

const body = document.querySelector("body"); //
const toggle = document.getElementById("toggle"); // Get The Element ID "Toggle" From The HTML File
const mode = document.getElementsByClassName("mode"); // Get The Element ID "Mode" From The HTML File
const button = document.getElementsByClassName("btn"); // // Get The Element ID "Btn" From The HTML File
toggle.onclick = function(){ // Only Implements When Clicked
  toggle.classList.toggle("active") // Toggle "Active" So Css Can Update And Activate The Theme
  for(let i=0;i<mode.length;i++){ // Update Each Variable From The Class Mode One By One To Activate or Default The Theme
    mode[i].classList.toggle("active"); // Activate The Class Mode
  }
  for(let i=0;i<button.length;i++){ // Update Each Variable From The Class Button One By One To Activate or Default The Theme
    button[i].classList.toggle("active"); // Activate The Class Button
  }
  body.classList.toggle("active"); // Activaes Body <body>
  document.getElementById("box").classList.toggle("active"); // Activate The ID Box
  document.getElementById("weight").classList.toggle("active") // Activate The ID Button

}