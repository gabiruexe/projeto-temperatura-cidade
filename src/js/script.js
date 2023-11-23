const chaveDaApi = "9566d0d2471a415093c131546232311";

const botaoDeBusca = document.querySelector(".btn-busca");

botaoDeBusca.addEventListener("click", async () => {
  const cidade = document.getElementById("input-busca").value;

  if (!cidade) return;

  const dados = await buscarDadosDaCidade(cidade);

  console.log(dados);

  if (dados) preencherDadosNaTela(cidade, dados);
});

async function buscarDadosDaCidade(cidade) {
  const apiURL = `https://api.weatherapi.com/v1/current.json?key=${chaveDaApi}&q=${cidade}&aqi=no&lang=pt`;

  const response = await fetch(apiURL);

  if (response.status !== 200) return;

  const dados = response.json();

  return dados;
}

function preencherDadosNaTela(cidade, dados) {
  const temperatura = dados.current.temp_c;
  const vento = dados.current.wind_kph;
  const umidade = dados.current.humidity;
  const condicao = dados.current.condition.text;
  const iconeCondicao = dados.current.condition.icon;

  document.getElementById("cidade").textContent = cidade;
  document.getElementById("temperatura").textContent = `${temperatura} °C`;
  document.getElementById("umidade").textContent = `${umidade}%`;
  document.getElementById("velocidade-do-vento").textContent = `${vento}km/h`;
  document.getElementById("condicao").textContent = condicao;

  document.getElementById("icone-condicao").setAttribute("src", iconeCondicao);
}
