import React, { Fragment } from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from 'reactstrap';
import BarChart from '../../components/bar-chart';
import Chart from "../../components/chart";
import Menu from '../../components/menu';
import { Benchmark } from '../../shared/benchmarkTypes';
import { BPU } from '../../shared/bpuTypes';
import { CPU } from '../../shared/cpuTypes';
import { ISA } from '../../shared/isaTypes';
import { DataActionCreators } from '../../store/action-creators';
import { ApplicationState } from '../../store/states';
import { Props } from "./props";

export class DataVisualizer extends Component<Props> {

    componentDidMount() {
        this.props.request(this.selectedValues);
    }

    selectedValues = {
        benchmark: Benchmark.SJENG,
        isa: ISA.ARM,
        cpu: CPU.TIMING_SIMPLE,
        bpu: BPU.BI_MODE
    }

    selectBenchmark = (item: Benchmark) => {
        this.selectedValues.benchmark = item;
        this.props.request(this.selectedValues);
    }
    selectCPU = (item: CPU) => {
        this.selectedValues.cpu = item;
        this.props.request(this.selectedValues);
    }

    selectISA = (item: ISA) => {
        this.selectedValues.isa = item;
        this.props.request(this.selectedValues);
    }


    selectBPU = (item: BPU) => {
        this.selectedValues.bpu = item;
        this.props.request(this.selectedValues);
    }


    render() {
        return (
            <Fragment>
                <h1> Estadísticas </h1>
                <Row>
                    <Col>
                        <div style={{ width: '100%', height: '82%' }}>
                            <h3>
                                <p>
                                AVG Cycles: {
                                    this.props.data.map(item => item.systemCPUNumCycles).reduce(function (avg, value, _, { length }) {
                                        return avg + value / length;
                                    }, 0).toLocaleString('en-us', { minimumFractionDigits: 2 })
                                }</p>
                                <p>
                                BTB Miss PCT: {this.props.data[0] ? this.props.data[0].btbMissPCT : 0}
                                </p>
                                <p>
                                BTB Hits: {this.props.data[0] ? this.props.data[0].btbHits : 0}
                                </p>


                            </h3>
                        </div>

                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Menu
                            select={{
                                benchmark: this.selectBenchmark,
                                isa: this.selectISA,
                                cpu: this.selectCPU,
                                bpu: this.selectBPU
                            }}
                            selectedValues={this.selectedValues} />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Chart<{ name: string, cycle: number }>
                            title='Ciclos por Medición' //BARRAS
                            data={this.props.data.map(item => {
                                return {
                                    name: `${item.l1cacheSize}`,
                                    cycle: item.systemCPUNumCycles
                                }
                            })}
                        />
                    </Col>
                    <Col>
                        <Chart<{ name: string, misses: number }>
                            // l1cache.assoc
                            // vs system.cpu.dcache.overallMissRate::total
                            // vs system.cpu.icache.overallMissRate::cpu.inst
                            title='Miss Rate vs Asociatividad' // 2 Lineas
                            data={this.props.data.map(item => {
                                return {
                                    name: item.l1cacheAssoc,
                                    misses: item.missRateAssoc,
                                    //cpuInst: item.missesCPUInst
                                }
                            })}
                        />
                    </Col>
                    <Col>
                        <Chart<{ name: string, misses: number }>
                            // l1cache.assoc
                            // vs system.cpu.dcache.overallMisses::cpu.data
                            // vs system.cpu.icache.overallMisses::cpu.inst
                            title='Miss Rate vs Tamaño' // 2 Lineas
                            data={this.props.data.map(item => {
                                return {
                                    name: item.l1cacheSize,
                                    misses: item.missRateSize,
                                }
                            })}
                        />
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <BarChart<{ name: string, btb: number }>
                            // l1cache.size & l1cache.assoc
                            // vs system.cpu.branchPred.BTBMissPct
                            title='% BTB Miss por Medición' // Barras
                            data={this.props.dataBTB.map(item => {
                                return {
                                    name: `${item.label}`,
                                    btb: item.btbMissPCT
                                }
                            })}
                        />
                    </Col>

                    <Col>
                        <BarChart<{ name: string, hits: number }>
                            title='Cantidad de Aciertos y Desaciertos por Medición'
                            // l1cache.size & l1cache.assoc
                            // vs system.cpu.predictedBranches
                            // vs system.cpu.BranchMispred
                            data={this.props.dataBTB.map(item => {
                                return {
                                    name: item.label,
                                    hits: item.btbHits
                                }
                            })}
                        />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}

export default connect(
    (state: ApplicationState) => ({ ...state.data }),
    ({ ...DataActionCreators })
)(DataVisualizer as any);