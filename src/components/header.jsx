import React, { Component } from "react";
import ReactWhatsapp from 'react-whatsapp';
import Button from '@material-ui/core/Button';

export class Header extends Component {
  render() {
    return (
      <header id="header">
        <div className="intro">
          <div className="overlay">
            <div className="container">
              <div className="row">
                <div className="col-md-8 col-md-offset-2 intro-text">
                  <h1>
                    {this.props.data ? this.props.data.title : "Loading"}
                    <span></span>
                  </h1>
                  <p>
                    {this.props.data ? this.props.data.paragraph : "Loading"}
                  </p>

                  <ReactWhatsapp style={{ background: "none", border: "none" }} number="+34651723542" message="Hola Quiera solicitar informacion para reparar mi lavadora" >
                    <Button variant="contained" size="large" style={{ background: "#25D366" }}>
                      Contactanos via WhatsApp
       </Button>
                  </ReactWhatsapp>

                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
