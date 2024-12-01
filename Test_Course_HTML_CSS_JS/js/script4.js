function createList(){
    const fruits = ['apple', 'pear', 'bananas', 'drakonmo vaisius', 'kriause'];
    let html = '<ul>'; 
    
    for(let i=0; i < fruits.length; i++){
        let sarasas = `<li>${fruits[1]}</li>`;
        html+=sarasas;
    }

    html +='</ul>';
    const fruitsDiv = document.querySelector('#fruits');
    fruitsDiv.innerHTML = html;
    
}