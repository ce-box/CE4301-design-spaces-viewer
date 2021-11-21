import React from 'react';
import { Fragment, PureComponent } from "react";
import { Props } from "./props";
import { State } from "./state";
import Dropdown from '../dropdown';
import { Col, Row } from 'reactstrap';

enum Benchmark {
    BZIP = '401.bzip',
    CANNEAL = 'canneal'
}

const benchmarks = Object.values(Benchmark);

enum ISA {
    ARM = 'ARM',
    RISCV = 'RISC V'
}

const isas = Object.values(ISA);

enum CPU {
    TIMING_SIMPLE = 'TimingSimple',
    TRACE_CPU = 'TraceCPU'
}

const cpus = Object.values(CPU);

enum BPU {
    TWO_BIT_LOCAL = '2bit_local',
    BI_MODE = 'Bi_mode',
    TOURNAMENT = 'Tournament'
}

const bpus = Object.values(BPU);

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
                            <Dropdown
                                title='Benchmark'
                                data={benchmarks}
                                open={this.state.openBenchmarks}
                                toggle={this.toggleBenchmarks}
                            />
                        </Col>
                        <Col>
                            <Dropdown
                                title='ISA'
                                data={isas}
                                open={this.state.openISAS}
                                toggle={this.toggleISAS}
                            />
                        </Col>
                        <Col>
                            <Dropdown
                                title='CPU'
                                data={cpus}
                                open={this.state.openCPU}
                                toggle={this.toggleCPU}
                            />
                        </Col>
                        <Col>
                            <Dropdown
                                title='BPU'
                                data={bpus}
                                open={this.state.openBPU}
                                toggle={this.toggleBPU}
                            />
                        </Col>
                    </Row>
                </div>
            </Fragment>
        );
    }
}