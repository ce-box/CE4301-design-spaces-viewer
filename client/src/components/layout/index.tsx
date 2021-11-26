import './index.css';
import React from 'react';
import { Fragment, PureComponent } from 'react';
import { Container } from 'reactstrap';
import { Props } from './props';
import { State } from './state';
import { Switch } from 'react-router';

export default class Layout extends PureComponent<Props, State> {
    render() {
        return (
            <Fragment>
                <div className='App'>
                    <Container >
                        <Switch>
                        {this.props.children}
                        </Switch>
                    </Container>
                </div>
            </Fragment>
        );
    }
}