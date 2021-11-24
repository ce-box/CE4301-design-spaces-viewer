import React from 'react';
import { PureComponent } from "react";
import { Dropdown as DropdownStrap, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Benchmark } from '../../shared/benchmarkTypes';
import { BPU } from '../../shared/bpuTypes';
import { CPU } from '../../shared/cpuTypes';
import { ISA } from '../../shared/isaTypes';
import { Props } from "./props";
import { State } from "./state";

export default class Dropdown<Enum extends Benchmark | BPU | CPU | ISA> extends PureComponent<Props<Enum>, State> {
    render() {
        return (
            <DropdownStrap
                isOpen={this.props.open}
                toggle={this.props.toggle}>
                <DropdownToggle caret>
                    {this.props.selectedValue as string}
                </DropdownToggle>
                <DropdownItem header>
                    {this.props.title}
                </DropdownItem>
                <DropdownMenu>
                    {
                        this.props.data.map(item =>
                            <DropdownItem key={item} onClick={() => this.props.select(item)}>
                                {item as string}
                            </DropdownItem>)
                    }
                </DropdownMenu>
            </DropdownStrap>
        );
    }
}