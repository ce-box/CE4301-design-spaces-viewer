import React, { Fragment } from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import { Col, Row } from 'reactstrap';
import Chart from "../../components/chart";
import Menu from '../../components/menu';
import { Props } from "./props";
import { State } from "./state";

export class DataVisualizer extends Component<Props, State> {
    render() {
        return (
            <Fragment>
                <h1> Estadísticas </h1>
                <Row>
                    <Col>
                        <Menu />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Chart<{ name: string, uv: number }>
                            title='Something vs Other Something wtf!'
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
                            title='Something vs Other Something 2 wtf!'
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
                            title='Something vs Other Something 3 wtf!'
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
                            title='Something vs Other Something 4 wtf!'
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