import React from 'react';
import { Fragment, PureComponent } from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { Props } from "./props";
import { State } from "./state";

export default class Dialog extends PureComponent<Props, State> {
    render() {
        return (
            <Modal
                isOpen={this.props.open}
                toggle={this.props.toggle}
            >
                <ModalHeader>
                    {this.props.title}
                </ModalHeader>
                <ModalBody>
                    {this.props.message}
                </ModalBody>
                <ModalFooter>
                    {
                        this.props.extraButtonTitle ?
                        <Button
                            color="primary"
                            onClick={this.props.extraButtonCallback}
                        >
                            Do Something
                        </Button> :
                        <Fragment/>
                    }
                    {' '}
                    <Button onClick={this.props.toggle}>
                        OK
                    </Button>
                </ModalFooter>
            </Modal>
        );
    }
}