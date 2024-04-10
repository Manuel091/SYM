const carrito = document.getElementById('carrito');
const elementos1 = document.getElementById(lista-1)
const lista= document.querySelector('#lista-carrito-tbody');
const vaciarCarritoBtn = document.getElementById('vaciar-carrito');

cargarEventListeners();

function cargarEventListeners(){
    elementos1.addEventListener('click', compraElemento);
    carrito.addEventListener('click', eliminarElemento);
    vaciarCarritoBtn.addEventListener('click', vaciarcarrito);

}

function compraElemento(e){
    e.preventDefaul();
    if(e.target.classList.contains('agregar-carrito')){
        const elemento = e.target.parentElement.parentElement;
        leerDatosElemento(Elemento);
    }
}

function leerDatosElemento(elemento){
    const infoElemento={
        imagen: elemento.querySelector('img').scr,
        titulo: elemento.querySelector('h3').textContent,
        precio: elemento.querySelector('precio').textContent,
        id: elemento.querySelector('a').getAttribute('data-id')

    }
    insertarCarrito(infoElemento);

}

function insertarCarrito(elemento){

    const row = document.createElement('tr');
    row.innerHTML =`
    
    <td>
    <imag src="${elemento.imagen}" width=100% height = 150px >  
    </td>

    <td>
    ${elemento.titulo}
    </td>

    <td>
    ${elemento.precio} 
    </td>

    <td>
    <a herf="#" class="borrar" data-id="${elemento.id}">x</a>
    </td>
    `;
    lista.appendChild(row);
    
}
  

    
    

 