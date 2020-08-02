import React, { Component } from 'react'

export class about extends Component {
  render() {
    return (
      <div id="about">
        <div className="container">
          <div className="row">
            <div className="col-xs-12 col-md-6"> <img src="img/about.jpg" className="img-responsive" alt="" /> </div>
            <div className="col-xs-12 col-md-6">
              <div className="about-text">
                <h2>¿Quienes Somos?</h2>
                <p>Servicios de reparación especializado en lavadoras en Madrid a nivel local con más de 5 años de experiencia.
                Cuando tu lavadora deja de funcionar, nosotros lo arreglamos, sin esperas, sin costes altos, con técnicos altamente cualificados y con un servicio de garantia de 90 dias. en REPARAMOSTULAVADORA.es  trabajamos en madrid con servicio en el mismo día de la llamada (usualmente). Confia en nosotros y no te arrepentiras.

       </p>
                <h3>¿Porque Elegirnos?</h3>
                <div className="list-style">
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>) : 'loading'}
                    </ul>
                  </div>
                  <div className="col-lg-6 col-sm-6 col-xs-12">
                    <ul>
                      {this.props.data ? this.props.data.Why2.map((d, i) => <li key={`${d}-${i}`}> {d}</li>) : 'loading'}

                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    )
  }
}

export default about
