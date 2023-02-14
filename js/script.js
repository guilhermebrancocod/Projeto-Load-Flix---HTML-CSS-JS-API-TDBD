const apiKey = 'd9b4ab19';
const frmPesquisa = document.querySelector("form");

  if (frmPesquisa) {
    frmPesquisa.onsubmit = (ev) => {
      ev.preventDefault();
  
      const pesquisa = ev.target.pesquisa.value;
  
      if (pesquisa === "") {
        alert("Preencha o campo!");
        return;
      }
       /*fetch(`https://www.omdbapi.com/?i=tt3896198&apikey=d9b4ab19`)   ---até aqui deu certo   */
      fetch(`https://www.omdbapi.com/?i=${pesquisa}&apikey=${apiKey}`)
        .then(result => (result.json()))
        .then(json => carregaLista(json));
    }

  }

  /*console.log('teste')*/

  const carregaLista = (json) => {
    const lista = document.querySelector("div.container");
    lista.innerHTML = "";

    json.Search.forEach(element => {
      console.log(element);
  
      let item =  document.createElement("div");
      item.classList.add("item-container");
  
      item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`
  
      lista.appendChild(item-container);
  
     });
    }  
    console.log('teste')