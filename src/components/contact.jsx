import React, { Component } from "react";
import ReactWhatsapp from 'react-whatsapp';
import Button from '@material-ui/core/Button';

export class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      mensaje: ""
    }
  }
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Solicitar Presupuesto o Consulta Tecnica</h2>
                  <p>
                    Por favor rellenar el siguiente formulario para solicitar consultas y solicitar presupuestos, le responderemos lo mas pronto posible
                  </p>
                </div>
                <form name="sentMessage" id="contactForm" noValidate>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          className="form-control"
                          type="text"
                          required="required"
                          id="Nombre "
                          placeholder="nombre"
                          value={this.state.nombre}
                          onChange={e => this.setState({ nombre: (e.target.value) })}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      className="form-control"
                      name="message"
                      id="message"
                      value={this.state.mensaje}
                      onChange={e => this.setState({ mensaje: (e.target.value) })}
                      rows="4"
                      placeholder="Mensaje"
                      required
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <ReactWhatsapp style={{ background: "none", border: "none" }} number="+34651723542" message={`Hola mi nombre es ${this.state.nombre} tengo la siguiente consulta :  ${this.state.mensaje}`} >
                    <button type="submit" className="btn btn-custom btn-lg">
                      Enviar Mensaje
                  </button>
                  </ReactWhatsapp>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Informacion de Contacto</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Direccion
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Telefono
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Correo Electronico
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="footer">
          <div className="container text-center">
            <p>
              &copy; 2020 Design by{"TODOSOFTWARE.es "}
              <a href="" rel="nofollow">
                todosoftware.es
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
