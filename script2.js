//Esse script.JS só pega a imagem do json da api de monstro do yu-gi-oh

const btnMonstro = document.getElementById('btnMonstro');
const VarResultadoMonstro = document.querySelector('.card');

btnMonstro.addEventListener('click', fetchMonstro);

function fetchMonstro(){
    fetch('https://db.ygoprodeck.com/api/v7/randomcard.php/json.')
    .then(response => response.json())
    .then(monstroJson =>{
        VarResultadoMonstro.src = monstroJson.card_images[0].image_url
    })
}

// fetchMonstro();