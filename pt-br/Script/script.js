const area = document.querySelector('.comentario');
area.style.display = 'none';
const inputNome = document.querySelector('.inputname');
const inputText = document.querySelector('textarea');
const createElement = (tag, className = "") => {
    const element = document.createElement(tag);
    element.className = className;
    return element
};
const comen = () => {
    const comen = createElement('p', 'comen');
    comen.innerHTML = inputText.value;
    return comen;
};
const nome = () => {
    const nome = createElement('h6', 'nome');
    nome.innerHTML = inputNome.value;
    return nome;
};

function Comentar(){
    area.append(nome());
    area.append(comen());
    area.style.display = 'block'
}