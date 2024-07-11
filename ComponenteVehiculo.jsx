import React, { Component } from "react";
import Vehiculo from "../Class/Vehiculo";

class ComponenteVehiculo extends Component {
    constructor(props) {
        super(props);

        this.state = { vehiculo: new Vehiculo("Nissan V16", "SX-TJ-96", "Buss Lightyear", "2024-05-23", 7.000000, usuario, factura) };
    }

    render() {
        const { vehiculo } = this.state;

        return (
            <div>
                <h3>Datos del Vehiculo</h3>
                <p>{vehiculo}</p>
            </div>
        );
    }
}

export default ComponenteVehiculo;