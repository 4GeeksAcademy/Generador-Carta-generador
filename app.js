let grupoCarta = ["1",'2','3','4','5','6','7','8','9','10','J','Q',"",'K']
let palo =[ '♦', '♥', '♠', '♣']

let miboton = document.querySelector("#boton")

const numerocartaAleatorioa = () =>{
  let numeroaleatorio = grupoCarta[Math.floor(Math.random() * grupoCarta.length)]
  let paloaleatorio = palo [Math.floor(Math.random() * palo.length)]
  document.getElementById("numberCard").innerHTML = numeroaleatorio;
  document.getElementById("upper-icon" ,"down-icon").innerHTML = paloaleatorio;
  document.getElementById("down-icon").innerHTML = paloaleatorio;
}
miboton.addEventListener("click",numerocartaAleatorioa)
setInterval(numerocartaAleatorioa,10000)