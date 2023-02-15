fetch('https://api.themoviedb.org/3/movie/550?api_key=d34ce0ffbd6228a89395b248889b8991', {
  method: 'GET',
  headers: {
    'Authorization': 'd34ce0ffbd6228a89395b248889b8991',
    'Content-Type': 'Content-Type'
  }
})

const MinhaApi_key = 'https://api.themoviedb.org/3/movie/550?api_key=d34ce0ffbd6228a89395b248889b8991'

/*fetch(MinhaApi_key) Teste: Até aqui deu certo
.then(response => response.json())
.then(data => {
  // manipula os dados retornados pela API
  console.log(data);
})
.catch(error => {
  console.error(error);
});*/

const btn01 = document.getElementById('btnpesquisa');
btn01.onclick = () => {
  fetch(MinhaApi_key)
    .then(response => response.json())
    .then(data => {
      const userInfo = document.getElementById('card');
      userInfo.innerHTML = `
      <p>${data.id}</p>
      <p>${data.original_title}</p>
      <p>${data.release_date}</p>
    `;
    })
    .catch(error => console.error(error));
};