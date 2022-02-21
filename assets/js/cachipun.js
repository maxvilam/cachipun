let ciclos = 0;
let p1 = true;
do {
  ciclos = prompt(
    "Bienvenido a CACHIPUN contra la maquina, cuantos veces deseas repetir el juego:"
  );
  p1 = isNaN(ciclos);
  if (p1 === true) {
    console.log(
      "No cumple con el requisito, debe ser un numero, intente nuevamente"
    );
  }
  ciclos= parseInt(ciclos)
  if (ciclos <= 0) {
    console.log("No cumple con el requisito, debe ser un numero mayor a 0");
    p1 = true;
  }
} while (p1);

function preguntacachipun(a) {
  let p2 = true;
  let v = 0;
  do {
    v = prompt(
      "Juego numero " +
        a +
        ", ingrese Piedra(opción 0), Papel(opción 1), Tijeta(opción 2) "
    );
    p2 = isNaN(v);
    if (p2 === true) {
      console.log(
        "Juego numero " +
          a +
          ",No cumple con el requisito, ingrese Piedra(opción 0), Papel(opción 1), Tijeta(opción 2), intente nuevamente"
      );
    } else {
      v = parseInt(v);
      if (v < 0 || v > 2) {
        console.log(
          "Juego numero " +
            a +
            ",No cumple con el requisito, ingrese Piedra(opción 0), Papel(opción 1), Tijeta(opción 2)"
        );
        p2 = true;
      }
    }
  } while (p2);
  return v;
}

function cachipun(usuario, computadora) {
  const r = usuario - computadora;
  let ganador = "";
  switch (r) {
    case 0:
      ganador = 0;
      break;
    case -1:
      ganador = "c";
      break;
    case -2:
      ganador = "u";
      break;
    case 1:
      ganador = "u";
      break;
    case 2:
      ganador = "c";
      break;
  }
  return ganador;
}

function enpalabra(a) {
  let juego = "";
  switch (a) {
    case 0:
      juego = "Piedra";
      break;
    case 1:
      juego = "Papel";
      break;
    case 2:
      juego = "Tijera";
      break;
  }
  return juego;
}

let juegocomputadora = 0;
let puntosusuario = 0;
let puntoscomputadora = 0;
let juegosempatados = 0;

for (let i = 1; i <= ciclos; i++) {
  juegocomputadora = Math.floor(Math.random() * 3);
  const p = preguntacachipun(i);
  const juego = cachipun(p, juegocomputadora);
  switch (juego) {
    case 0:
      console.log(
        "Juego numero: " +
          i +
          ", Jugada Usuario: " +
          enpalabra(p) +
          ", jugada computadora: " +
          enpalabra(juegocomputadora) +
          ", EMPATE!!!!!"
      );
      juegosempatados = juegosempatados + 1;
      break;
    case "c":
      console.log(
        "Juego numero: " +
          i +
          ", Jugada Usuario: " +
          enpalabra(p) +
          ", jugada computadora: " +
          enpalabra(juegocomputadora) +
          ", GANO COMPUTADORA!!!!!"
      );
      puntoscomputadora = puntoscomputadora + 1;
      break;
    default:
      console.log(
        "Juego numero: " +
          i +
          ", Jugada Usuario: " +
          enpalabra(p) +
          ", jugada computadora: " +
          enpalabra(juegocomputadora) +
          ", GANO USUARIO!!!!!"
      );
      puntosusuario = puntosusuario + 1;
      break;
  }
}
console.log(
  "Resultado Total, empatados: " +
    juegosempatados +
    ", ganados por usuario: " +
    puntosusuario +
    ", ganados por Computadora: " +
    puntoscomputadora
);
let textofinal = "";

if (puntosusuario - puntoscomputadora == 0) {
  textofinal = "EMPATADOS!!!!";
} else {
  if (puntosusuario > puntoscomputadora) {
    textofinal = "GANO USUARIO!!!!";
  } else {
    textofinal = "GANO COMPUTADORA!!!!";
  }
}
console.log(textofinal);
