import React from 'react';
import { Component } from "react";
import { connect } from "react-redux";
import Chart from "../../components/chart";
import { Props } from "./props";
import { State } from "./state";

export class DataVisualizer extends Component<Props, State> {
    render() {
        return (
            <Chart<Data>
                data={data} 
                width={window.innerWidth} 
                height={window.innerHeight}
            />
        );
    }
}

export default connect()(DataVisualizer);

interface Data {
    name: string;
    uv: number;
}

const data: Data[] = [
    {
        name: 'Page A',
        uv: 4000,
    },
    {
        name: 'Page B',
        uv: 3000,
    },
    {
        name: 'Page C',
        uv: 2000,
    },
    {
        name: 'Page D',
        uv: 2780,
    },
    {
        name: 'Page E',
        uv: 1890,
    },
    {
        name: 'Page F',
        uv: 2390,
    },
    {
        name: 'Page G',
        uv: 3490,
    },
];