const input = document.querySelector('#texto-tarefa');
const button = document.querySelector('#criar-tarefa');
const list = document.querySelector('#lista-tarefas');
const elementsList = document.querySelector('.elementList');


function clean (){
    const classColor = document.querySelectorAll('.color');
    for (let i = 0; i < classColor.length; i += 1) {
    classColor[i].classList.remove('color');
    }
} 
function main () {
    button.addEventListener('click',() => {
    let liItem = document.createElement('li');
    liItem.innerText = input.value;
    
    liItem.addEventListener('click', () => {
        clean();
        liItem.className = 'color';
        });

    list.appendChild(liItem);
    input.value = '';
    
        /*  let list2 = document.querySelectorAll('li');
        for (let i = 0; i < list2.length; i += 1){
           
        } */
        
    
    });
    
}
main();
    
 