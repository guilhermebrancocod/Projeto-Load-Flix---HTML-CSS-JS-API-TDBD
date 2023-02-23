fetch('https://api.themoviedb.org/3/search/movie?api_key=d34ce0ffbd6228a89395b248889b8991', {
  method: 'GET',
  headers: {
    'Authorization': 'd34ce0ffbd6228a89395b248889b8991',
    'Content-Type': 'Content-Type'
  }
})

const MinhaApi_key = 'https://api.themoviedb.org/3/search/movie?api_key=d34ce0ffbd6228a89395b248889b8991'

//Adicionando
function adicionarItem(req, res) {
  const novoItem = req.body;
  MinhaApi_key.addItem(novoItem);
  res.send('Item adicionado com sucesso');
}

//Removendo
function removerItem(req, res) {
  const id = req.params.id;
  MinhaApi_key.removerItem(id);
  res.send('Item removido com sucesso');
}

//Editando
function editarItem(req, res) {
  const id = req.params.id;
  const dadosAtualizados = req.body;
  MinhaApi_key.editarItem(id, dadosAtualizados);
  res.send('Item atualizado com sucesso');
}


const frmPesquisa = document.querySelector("form")

frmPesquisa.onsubmit = (ev) => {
  ev.preventDefault();

  const pesquisa = ev.target.pesquisa.value;

  if(pesquisa == ""){
    alert("Preencher o campo")
    return;
  }


  fetch(`https://api.themoviedb.org/3/search/movie?api_key=d34ce0ffbd6228a89395b248889b8991&query=${pesquisa}`)
    .then(response => response.json())
    .then(json => carregaLista(json));
}

const carregaLista = (json) => {
  const lista = document.querySelector("div.item");
  lista.innerHTML = "";

  if (json.success === null){
    alert('Nenhum filme encontrado');
    return
  }

  json.results.forEach(element => {

    let item = document.createElement("div");
    item.classList.add("card");

    item.innerHTML = `<img src="${element.backdrop_path}" /><p class="title">${element.original_title}</p><p class="ano">Ano:${element.release_date}</p><button onclick="infoItem(${element.id})" class="infoItem">Sinopse</button><a href="#" class="trailer">trailer</a>`;

    lista.appendChild(item);

  });

  const retorneMenu = document.getElementById('lancHome')

retorneMenu.addEventListener("click",function(e){
  if (e.target === retorneMenu){
    window.location.reload(true)
  }
})

const retorneLanc = document.getElementById('lancLanc')

retorneLanc.addEventListener("click", function(e){
  if(e.target === retorneLanc){
    window.location.href = "C:/pageWeb/index.html";
    /*window.location.reload(true)*/
  }
})

}

const infoItem = (id) => {
  fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=d34ce0ffbd6228a89395b248889b8991`)
    .then(response => response.json())
    .then(json => {
      alert(`SINOPSE DO FILME SELECIONADO: ${json.overview}`);
    })
};



