class Usuario{
    constructor(rut,nombre,apellido,direccion){
    //Atributos
        this.rut=rut;
        this.nombre=nombre;
        this.apellido=apellido;
        this.direccion=direccion;
    }
}
class Vehiculo{
    constructor(idvehiculo,year,modelo,marca,precio,patente){
    //Atributos
        this.idvehiculo=idvehiculo;
        this.year=year;
        this.modelo=modelo;
        this.marca=marca;
        this.precio=precio;
        this.patente=patente;
    }
}
class Factura{
    constructor(id,fecha,Usuario,rutcliente,direccion,telefono,Vehiculo,metodopago,codigoproducto,preciobase,){

    //Atributos
        this.id=id;
        this.fecha=fecha;
        this.usuario=Usuario;
        this.rutcliente=rutcliente;
        this.direccion=direccion;
        this.telefono=telefono;
        this.vehiculo =Vehiculo;
        this.metodopago=metodopago;
        this.codigoproducto=codigoproducto;
        this.preciobase=preciobase;
        this.iva=0;
        this.total=0;
    }
}

// Arrays para almacenar los objetos
let Vehiculos = JSON.parse(localStorage.getItem('vehiculos')) || [
    new Vehiculo(2005, 'kia morning', 'kia', 'K263', '7843','2500000','JDFK35'),
    new Vehiculo(2010, 'v16', 'nissan', 'HF731', '4738','8500000','JFDK74'),
    new Vehiculo(2023, 'camaro', 'chevrolet', 'Z840', '9487','637423','HFGB6978')
];
let usuarios = [];


//Funcion Login




let comentarios = [];


function Listarvehiculos() {
    const Listavehiculos = document.getElementById('lista-vehiculos');
    Listavehiculos.innerHTML = '';
    Vehiculos.forEach((vehiculo, index) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${vehiculo.modelo}</td> 
            <td>${vehiculo.marca}</td>
            <td>${vehiculo.years}</td>
            <td>${vehiculo.precio}</td>
            <td>${vehiculo.patente}</td>
            <td>
                <button class="btn btn-warning btn-sm" onclick="editarVehiculo(${index})">Editar</button>
                <button class="btn btn-danger btn-sm" onclick="eliminarVehiculo(${index})">Eliminar</button>
            </td>
        `;
        Listavehiculos.appendChild(row);
    });
}


// Función para agregar un vehiculo
function agregarVehiculo(event) {
    event.preventDefault();
    const modelo = document.getElementById('modelo').value;
    const marca = document.getElementById('marca').value;
    const years = document.getElementById('years').value;
    const precio = document.getElementById('precio').value;
    const patente = document.getElementById('patente').value;
    const nuevoVehiculo = new Servidor(Date.now(), modelo, marca, years,precio,patente);
    Vehiculos.push(nuevoVehiculo);
    localStorage.setItem('Vehiculos', JSON.stringify(servidores));
    Listarvehiculos();
    document.getElementById('form-vehiculos').reset();
}

// Función para editar un vehiculo
function editarVehiculo(index) {
    const vehiculo = Vehiculos[index];
    document.getElementById('modelo').value = vehiculo.modelo;
    document.getElementById('marca').value = vehiculo.marca;
    document.getElementById('years').value = vehiculo.years;
    document.getElementById('precio').value = vehiculo.precio;
    document.getElementById('patente').value = vehiculo.patente;
    document.getElementById('form-vehiculos').onsubmit = function(event) {
        event.preventDefault();
        vehiculo.modelo = document.getElementById('modelo').value;
        vehiculo.marca = document.getElementById('marca').value;
        vehiculo.years = document.getElementById('years').value;
        vehiculo.precio = document.getElementById('precio').value;
        vehiculo.patente = document.getElementById('patente').value;
        localStorage.setItem('Vehiculos', JSON.stringify(vehiculos));
        Listarvehiculos();
        document.getElementById('form-servidor').reset();
        document.getElementById('form-servidor').onsubmit = agregarVehiculo;
    };
}

// Función para eliminar un usuario
function eliminarUsuario(index) {
    Vehiculos.splice(index, 1);
    localStorage.setItem('Vehiculos', JSON.stringify(Vehiculos));
    Listarvehiculos();
}

// Event listener para el formulario
document.getElementById('form-servidor').addEventListener('submit', agregarUsuario);
document.addEventListener('DOMContentLoaded', Listarvehiculos);
document.addEventListener('DOMContentLoaded', Listarvehiculoss2);