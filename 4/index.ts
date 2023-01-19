import { cube } from './math';
function component() {
    const element = document.createElement('div');
    
    element.innerHTML =  '5 cubed is equal to ' + cube(5);
    
    return element;
}

document.body.appendChild(component());