import React from 'react';
import { PureComponent } from "react";
import { Dropdown as DropdownStrap, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Props } from "./props";
import { State } from "./state";

export default class Dropdown extends PureComponent<Props, State> {
    render() {
        return (
            <DropdownStrap isOpen={this.props.open} toggle={this.props.toggle}>
                <DropdownToggle caret>
                    {this.props.title}
                </DropdownToggle>
                <DropdownMenu>
                    {
                        this.props.data.map(item => <DropdownItem>
                            {item}
                        </DropdownItem>)
                    }
                </DropdownMenu>
            </DropdownStrap>
        );
    }
}