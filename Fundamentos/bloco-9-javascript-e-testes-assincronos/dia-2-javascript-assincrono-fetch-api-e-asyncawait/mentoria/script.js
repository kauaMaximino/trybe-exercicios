const content = document.getElementById('content')
const btnContainer = document.getElementById('btn-container')

// trata erro do fetch
async function fetchResp (resp) {
  if (!resp.ok) throw new Error('ocorreu um erro com a requisição')
  const respApi = await resp.json();
  return respApi
}

// cria card dos personagens

const createCard = ({ name, image }) => {
  const div = document.createElement('div');
  div.className = 'card';
  const img = document.createElement('img');
  img.src = image;
  const h3 = document.createElement('h3');
  h3.innerHTML = name;
  div.appendChild(img);
  div.appendChild(h3);
  return div
}

// requisição da api utilizando o async await
const fetchApi = async (url) => {
  try {
    const resp = await fetch(url);
    const respApi = await fetchResp(resp)
    return respApi
  } catch (error) {
    alert(error.message)
  }
}

// cria a página
const createPage = async (url='https://rickandmortyapi.com/api/character') => {
  const { results, info: {next, prev }} = await fetchApi(url)
  content.innerHTML = ''
  results.forEach((char) => {
    const card = createCard(char)
    content.appendChild(card)
  })

  const prevBtn = document.createElement('button')
  prevBtn.innerHTML = 'PREV'
  prevBtn.disabled = !prev
  prevBtn.addEventListener('click', () => {
    content.innerHTML = ''
    btnContainer.innerHTML = ''
    setTimeout(() => {
      createPage(prev)
    } ,1000);
  })
  btnContainer.appendChild(prevBtn)

  const nextBtn = document.createElement('button')
  nextBtn.innerHTML = 'NEXT'
  nextBtn.disabled = !next
  nextBtn.addEventListener('click', () => {
    content.innerHTML = '<h1>Loading...</h1>'
    btnContainer.innerHTML = ''
    setTimeout(() => {
      createPage(next)
    } ,1000);
  })
  btnContainer.appendChild(nextBtn)
}

createPage()