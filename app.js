

const  pskToggler =  document.querySelector('section .form-input .passwordToggler')
const inputPsk = document.querySelector('section .form-input input')


const pskTogglerFun = () => {
    

    inputPsk.type == 'password' ? inputPsk.type = 'text' : inputPsk.type = 'password'

    inputPsk.type == 'password' ? 
    pskToggler.innerHTML = `<i class="bi bi-eye-slash"></i>` :
    pskToggler.innerHTML = `<i class="bi bi-eye"></i>`

}

pskToggler.addEventListener('click', pskTogglerFun )

const showTogglerBtn = () => {
    console.log(pskToggler.classList);

    inputPsk.value.length > 6 ? 
    pskToggler.classList.add('show') : 
    pskToggler.classList.remove('show')
}

inputPsk.addEventListener('keyup',showTogglerBtn )



const cursor = document.querySelector('.cursor')
const cursorSm = document.querySelector('.cursorSm')

const customMouseCursor = (event) => {

    const  {pageX: left, pageY: top} = event;
    console.log(top);
    
    cursor.style.top = top+'px'
    cursor.style.left = left+'px'
    cursorSm.style.top = top+'px'
    cursorSm.style.left = left+'px'
    
    
}
window.addEventListener('mousemove', customMouseCursor)