class Vehiculo {
    constructor(idvehiculo, year, modelo, marca, precio, patente) {
        this._idvehiculo = idvehiculo;
        this._year = year;
        this._modelo = modelo;
        this._marca = marca;
        this._precio = precio;
        this._patente= patente;
    }

    //Getters
    get getIdvehiculo() {
        return this._idvehiculo;
    }
    get getYear() {
        return this._year;
    }
    get getModelo() {
        return this._modelo;
    }
    get getMarca() {
        return this._marca;
    }
    get getPrecio() {
        return this._precio;
    }
    get getPatente() {
        return this._patente;
    }
    
    

    //Setters
    setRut(rut) {
        this._rut = rut;
    }
    setNombre(nombre) {
        this._nombre = nombre;
    }
    setApellido(apellido) {
        this._apellido = apellido;
    }
    setPuesto(puesto) {
        this._puesto = puesto;
    }
    setSueldo(sueldo) {
        this._sueldo = sueldo;
    }
    setHorario(horario) {
        this._horario = horario;
    }
}

export default  Vehiculo;
