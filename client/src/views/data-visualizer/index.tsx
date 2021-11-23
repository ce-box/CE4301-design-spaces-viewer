import React, { Fragment } from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from 'reactstrap';
import Chart from "../../components/chart";
import Menu from '../../components/menu';
import { Benchmark } from '../../shared/benchmarkTypes';
import { BPU } from '../../shared/bpuTypes';
import { CPU } from '../../shared/cpuTypes';
import { ISA } from '../../shared/isaTypes';
import { Props } from "./props";
import { State } from "./state";

export class DataVisualizer extends Component<Props, State> {
    selectedValues = {
        benchmark: Benchmark.BZIP,
        isa: ISA.ARM,
        cpu: CPU.TIMING_SIMPLE,
        bpu: BPU.BI_MODE
    }
    selectBenchmark = (item: Benchmark) => 
        this.selectedValues.benchmark = item;

    selectCPU = (item: CPU) => 
        this.selectedValues.cpu = item;

    selectISA = (item: ISA) =>         
        this.selectedValues.isa = item;

    selectBPU = (item: BPU) => 
        this.selectedValues.bpu = item;

    render() {
        return (
            <Fragment>
                <h1> Estadísticas </h1>
                <Row>
                    <Col>
                        <Menu select= {{
                            benchmark: this.selectBenchmark,
                            isa: this.selectISA,
                            cpu: this.selectCPU,
                            bpu: this.selectBPU
                        }}/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Chart<{ name: string, uv: number }>
                            // l1cache.size & l1cache.assoc
                            // vs system.cpu.numCycles
                            title='Ciclos por Medición!' //BARRAS
                            data={data.map(item => {
                                return {
                                    name: item.name,
                                    uv: item.uv
                                }
                            })}
                        />
                    </Col>
                    <Col>
                        <Chart<{ name: string, pv: number }>
                            // l1cache.assoc
                            // vs system.cpu.dcache.overallMissRate::total
                            // vs system.cpu.icache.overallMissRate::cpu.inst
                            title='Miss Rate % vs Asociatividad' // 2 Lineas
                            data={data.map(item => {
                                return {
                                    name: item.name,
                                    pv: item.pv
                                }
                            })}
                        />
                    </Col>
                    <Col>
                        <Chart<{ name: string, pv: number }>
                            // l1cache.assoc
                            // vs system.cpu.dcache.overallMisses::cpu.data
                            // vs system.cpu.icache.overallMisses::cpu.inst
                            title='Cantidad de Misses vs Asociatividad' // 2 Lineas
                            data={data.map(item => {
                                return {
                                    name: item.name,
                                    pv: item.pv
                                }
                            })}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <Chart<{ name: string, amt: number }>
                            // l1cache.size & l1cache.assoc
                            // vs system.cpu.branchPred.BTBMissPct
                            title='% BTB Miss por Medición' // Barras
                            data={data.map(item => {
                                return {
                                    name: item.name,
                                    amt: item.amt
                                }
                            })}
                        />
                    </Col>
                    <Col>
                        <Chart<{ name: string, pizza: number }>
                            title='Cantidad de Aciertos y Desaciertos por Medición'
                            // l1cache.size & l1cache.assoc
                            // vs system.cpu.predictedBranches
                            // vs system.cpu.BranchMispred
                            data={data.map(item => {
                                return {
                                    name: item.name,
                                    pizza: item.pizza
                                }
                            })}
                        />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default connect()(DataVisualizer);

interface Data {
    name: string;
    uv: number;
    pv: number;
    amt: number;
    pizza: number;
}

const data: Data[] = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
        amt: 2400,
        pizza: 120,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
        amt: 2210,
        pizza: 120,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
        amt: 2290,
        pizza: 120,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
        amt: 2000,
        pizza: 120,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
        amt: 2181,
        pizza: 120,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
        amt: 2500,
        pizza: 120,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
        amt: 2100,
        pizza: 120,
    },
];