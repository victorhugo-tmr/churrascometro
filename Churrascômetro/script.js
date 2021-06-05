let inputAdultos = document.getElementById("adultos")
let inputCriancas = document.getElementById("criancas")
let inputDuracao = document.getElementById("duracao")

let resultado = document.getElementById("resultado")

function calcular() {

  let adultos = inputAdultos.value
  let criancas = inputCriancas.value
  let duracao = inputDuracao.value

  if ((document.getElementById("adultos").value == 0) || (document.getElementById("duracao").value == 0)) {
    window.alert("Preencha os campos")
  } else {

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    console.log(qdtTotalCarne)

    let qdtTotalCerveja = cervejaPP(duracao) * adultos
    console.log(qdtTotalCerveja)

    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (carnePP(duracao) / 2 * criancas)
    console.log(qdtTotalBebidas)

    resultado.innerHTML = `<p>${qdtTotalCarne / 1000}Kg de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 473 * 5)} Latões de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 1000 * 2)}L de Bebida</p>`
  }

}

function carnePP(duracao) {
  if (duracao >= 6) {
    return 650
  } else {
    return 400
  }
}

function cervejaPP(duracao) {
  if (duracao >= 6) {
    return 2000
  } else {
    return 1200
  }
}

function bebidasPP(duracao) {
  if (duracao >= 6) {
    return 1500
  } else {
    return 1000
  }
}