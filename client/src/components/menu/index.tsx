import React from 'react';
import { Fragment, PureComponent } from "react";
import { Props } from "./props";
import { State } from "./state";
import Dropdown from '../dropdown';
import { Col, Row } from 'reactstrap';
import { Benchmark } from '../../shared/benchmarkTypes';
import { ISA } from '../../shared/isaTypes';
import { CPU } from '../../shared/cpuTypes';
import { BPU } from '../../shared/bpuTypes';

export default class Menu extends PureComponent<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            openBenchmarks: false,
            openISAS: false,
            openCPU: false,
            openBPU: false
        }
    }

    toggleBenchmarks = () => this.setState({ openBenchmarks: !this.state.openBenchmarks });
    toggleISAS = () => this.setState({ openISAS: !this.state.openISAS });
    toggleCPU = () => this.setState({ openCPU: !this.state.openCPU });
    toggleBPU = () => this.setState({ openBPU: !this.state.openBPU });

    render() {
        return (
            <Fragment>
                <div style={{}}>
                    <Row>
                        <Col>
                            <Dropdown<Benchmark>
                                title='Benchmark'
                                data={Object.values(Benchmark)}
                                open={this.state.openBenchmarks}
                                toggle={this.toggleBenchmarks}
                                select={this.props.select.benchmark}
                            />
                        </Col>
                        <Col>
                            <Dropdown<ISA>
                                title='ISA'
                                data={Object.values(ISA)}
                                open={this.state.openISAS}
                                toggle={this.toggleISAS}
                                select={this.props.select.isa}
                            />
                        </Col>
                        <Col>
                            <Dropdown<CPU>
                                title='CPU'
                                data={Object.values(CPU)}
                                open={this.state.openCPU}
                                toggle={this.toggleCPU}
                                select={this.props.select.cpu}
                            />
                        </Col>
                        <Col>
                            <Dropdown<BPU>
                                title='BPU'
                                data={Object.values(BPU)}
                                open={this.state.openBPU}
                                toggle={this.toggleBPU}
                                select={this.props.select.bpu}
                            />
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}