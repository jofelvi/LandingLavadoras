import React, { Component } from "react";

export class Services extends Component {
  render() {
    return (
      <div id="services" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Nuestros Servicios</h2>
            <p>
              Tenemos el mejor servicio tecnico especializado en lavadores en todo madrid nuiestro personal cuenta con amplia experiencia en el sector.
            </p>
          </div>
          <div className="row">
            {this.props.data
              ? this.props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
              : "loading"}
          </div>
        </div>
      </div>
    );
  }
}

export default Services;
