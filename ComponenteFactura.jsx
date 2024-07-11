import React, { Component } from "react";
import Factura from "../Class/Factura";

class ComponenteFactura extends Component {
    constructor(props) {
        super(props);

        this.state = { factura: new Factura("DF-2345", "Daniel Plaza", "18.289.368-7",
             "Av. leonor osorio #2602", "Nissan V16", "Pago: Credito", 2.000000, "18:00", "Iva: 1.5%", "Total: 2.000.000") };
    }
   


    render() {
        const { factura } = this.state;

        return (
            <div>
                <h3>Datos de la Factura</h3>
                <p>{factura}</p>
            </div>
        );
    }
}

export default ComponenteFactura;
