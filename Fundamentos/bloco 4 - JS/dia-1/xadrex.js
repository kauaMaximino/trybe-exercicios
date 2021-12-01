let peca = "PEÃO";
let pecaMinuscula = peca.toLowerCase();

if (pecaMinuscula === "cavalo") {
  console.log("O cavalo anda em L");
}
if (pecaMinuscula === "torre") {
  console.log("A torre anda em linha reta");
}
if (pecaMinuscula === "rainha") {
  console.log("A rainha anda em qual direção quiser, e quantas casa quiser");
}
if (pecaMinuscula === "rei") {
  console.log("O rei anda pra qual direção quiser, mas apenas 1 casa");
}
if (pecaMinuscula === "bispo") {
  console.log("O bispo anda em diagonal, quantas casas quiser");
}
if (pecaMinuscula === "peão") {
    console.log("O peão só anda pra frente, 1 casa por vez");
  }