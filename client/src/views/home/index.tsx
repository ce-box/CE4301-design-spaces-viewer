import React from 'react';
import { PureComponent, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import Dialog from "../../components/dialog";
import { Props } from "./props";
import { State } from "./state";

export class Home extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            escapeModalActive: false
        }
    }

    toggle = () => this.setState({ escapeModalActive: !this.state.escapeModalActive });

    render() {
        return (
            <Fragment>
                <h1>Hola Beto :)</h1>
                <div style={{ textAlign: 'left' }}>
                    <p>
                        Te queremos mucho.
                    </p>
                    <p>
                        Este es nuestro proyecto, no sabemos que va a pasar, pero si quiere continuar (si se atreve), presione el botón de "Ver Estadísticas".
                    </p>
                </div>

                <div style={{ textAlign: 'right' }}>
                    <Button outline color="secondary" onClick={this.toggle}>
                        Escapar
                    </Button>
                    <Dialog
                        open={this.state.escapeModalActive}
                        toggle={this.toggle}
                        title="No puedes escapar, lo sentimos."
                        message="Necesitamos que nos revises el proyecto para pasar."
                    />
                    {' '}
                    <Button tag={Link} to='/data' color="danger">
                        Ver Estadísticas
                    </Button>
                </div>
            </Fragment>
        );
    }
}

export default connect()(Home);