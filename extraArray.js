const imagenesProductos = [
    "https://http2.mlstatic.com/D_NQ_NP_2X_619126-MLA50232132766_062022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_2X_847906-MLA49763193559_042022-F.webp",
    "https://http2.mlstatic.com/D_NQ_NP_991401-MLA31351342525_072019-O.webp"
];
const nombreProductos = ["TV Samsung 4K", "Celular Samsung A33 5G", "PC Gamer"];// Cambie los nombres de los elemntos del array para que se viera mejopr en pantalla


/*displayHtml.innerHTML =
    `<h2> Producto ${nombreProductos[0]}  </h2>
    <img src="${imagenesProductos[0]}" alt="" >
    <h2> Producto ${nombreProductos[1]}  </h2>
    <img src="${imagenesProductos[1]}" alt="" >
    <h2> Producto ${nombreProductos[2]}  </h2>
    <img src="${imagenesProductos[2]}" alt="" >`*/ //Esta fue la primera opcion pero luego no supe como agregar productos nuevos 

let arrayProductos = [];
//Declaro el formato dek producto como un obj
let producto = {
    descripcion: "",
    imagen: ""
}

//Asigno el primer producto
producto = {
    descripcion: nombreProductos[0],
    imagen: imagenesProductos[0]
}
// lo agrego al array
arrayProductos.push(producto);

//Asigno el segundo producto
producto = {
    descripcion: nombreProductos[1],
    imagen: imagenesProductos[1]
}
arrayProductos.push(producto);
//Asigno el tercer producto
producto = {
    descripcion: nombreProductos[2],
    imagen: imagenesProductos[2]
}
arrayProductos.push(producto);
//Inyecto los productos del array en la seccion productos
document.querySelector("#producto").innerHTML = armaTemplate();

//Funcion para agregar nuevos articulos
function agregarProducto() {
    //tomo los values de descripcion e imagen
    let des = document.querySelector("#desc").value;
    let img = document.querySelector("#dirImg").value;

    //Armo el objeto
    producto = {
        descripcion: des,
        imagen: img
    }

    //Agrego el produscto al array
    arrayProductos.push(producto);

    //Inyecto en el html
    document.querySelector("#producto").innerHTML = armaTemplate();
}

//Cree la funcion que arma el template para inyectarlo al html

function armaTemplate() {
    let template = '';
    for (let i = 0; i < arrayProductos.length; i++) {
        template += `<article>
        <h3 class="descripcion">${arrayProductos[i].descripcion}</h3>
        <img src="${arrayProductos[i].imagen}" class="imagen">
        </article>`
    }
    return template;
}









