
function ex1() {
  alert("O botão é funcional!");
}

function ex2() {
  const b = Number(document.getElementById("base2").value);
  const h = Number(document.getElementById("altura2").value);
  const area = (b * h) / 2;
  document.getElementById("out2").innerText = "Área: " + area;
}

function ex3() {
  const n = Number(document.getElementById("num3").value);
  const res = n % 2 === 0;
  document.getElementById("out3").innerText = res ? "Verdadeiro (par)" : "Falso (ímpar)";
}

function ex4() {
  const n1 = Number(document.getElementById("num4").value);
  const n2 = Number(document.getElementById("num5").value);
  const n3 = Number(document.getElementById("num6").value);

  let maior = n1; 

  if (n2 > maior) {
    maior = n2; 
  }

  if (n3 > maior) {
    maior = n3; 
  }

  document.getElementById("out4").innerText = "O valor maior é: " + maior;
}


function ex5() {
  const c = Number(document.getElementById("c5").value);
  const f = (c * 9) / 5 + 32;
  document.getElementById("out5").innerText = "A temperatura atual é: " + f + " °F";
}

function ex6() {
  const c = Number(document.getElementById("c6").value); 
  const t = Number(document.getElementById("t6").value); 
  const i = Number(document.getElementById("i6").value) / 100; 

  let montante = c;

  for (let j = 0; j < t; j++) {
    montante = montante * (1 + i); 
  }

  document.getElementById("out6").innerText = "Montante: " + montante.toFixed(2);
}

function ex7() {
  const n = Number(document.getElementById("num7").value);
  const res = n % 3 === 0;
  document.getElementById("out7").innerText = res;
}

function ex8() {
  const n = Number(document.getElementById("num8").value);
  const meses = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];
  let mes = "Número inválido";
  if (n >= 1 && n <= 12) mes = meses[n-1];
  document.getElementById("out8").innerText = mes;
}

function ex9() {
  const sal = Number(document.getElementById("sal9").value);
  let perc = 0;
  if (sal <= 280) perc = 20;
  else if (sal <= 700) perc = 15;
  else if (sal <= 1500) perc = 10;
  else perc = 5;
  const aumento = (sal * perc) / 100;
  const novo = sal + aumento;
  document.getElementById("out9").innerText = `Salário antes: ${sal}, Percentual: ${perc}%, Aumento: ${aumento}, Novo salário: ${novo}`;
}

function ex10() {
  const din = Number(document.getElementById("din10").value);
  const litros = din / 5;
  const km = litros * 20;
  document.getElementById("out10").innerText = `Litros: ${litros}, Km: ${km}`;
}

function ex11() {
  const min = Number(document.getElementById("min11").value);
  const horas = min / 60;
  const dias = min / 1440;
  document.getElementById("out11").innerText = `${min} minutos = ${horas.toFixed(2)} horas = ${dias.toFixed(2)} dias`;
}

function ex12() {
  const val = Number(document.getElementById("val12").value);
  const gorjeta = val * 0.1;
  const total = val + gorjeta;
  document.getElementById("out12").innerText = `Gorjeta: ${gorjeta}, Total: ${total}`;
}

function ex13() {
  const sal = Number(document.getElementById("sal13").value);
  const pres = Number(document.getElementById("pres13").value);
  if (pres > sal * 0.2) {
    document.getElementById("out13").innerText = "Empréstimo não pode ser concedido.";
  } else {
    document.getElementById("out13").innerText = "Empréstimo pode ser concedido.";
  }
}

function ex14() {
  const sal = Number(document.getElementById("sal14").value);
  let desconto = sal * 0.11;
  if (desconto > 334.29) desconto = 334.29;
  document.getElementById("out14").innerText = "Desconto INSS: " + desconto.toFixed(2);
}

function ex15() {
  const val = Number(document.getElementById("val15").value);
  const rendimento = val * 0.007;
  const total = val + rendimento;
  document.getElementById("out15").innerText = `Rendimento: ${rendimento.toFixed(2)}, Total: ${total.toFixed(2)}`;
}
