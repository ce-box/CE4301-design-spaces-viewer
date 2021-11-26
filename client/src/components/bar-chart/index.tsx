import React, { Fragment } from 'react';
import { PureComponent } from "react";
import { Bar, BarChart as ReBarChart, Brush, CartesianGrid, ReferenceLine, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Props } from "./props";
import { State } from "./state";

export default class BarChart<Data> extends PureComponent<Props<Data>, State> {
    render() {
        return (
            <Fragment>
                <div
                    style={{
                        height: this.props.height ? this.props.height : 400,
                        width: this.props.width ? this.props.width : '100%'
                    }}
                >
                    <h2 style={{ width: '100%', height: '18%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', display: 'flex' }}>
                        {this.props.title}
                    </h2>
                    <div style={{ width: '%', height: '82%' }}>
                        <ResponsiveContainer>
                            <ReBarChart
                                data={this.props.data}
                                margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis hide dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <ReferenceLine y={0} stroke="#000" />
                                <Brush dataKey='name' height={30} stroke="#8884d8" />
                                <Bar dataKey={this.props.data[0] ? Object.keys(this.props.data[0])[1] : 'id'} fill="#8884d8" />
                            </ReBarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Fragment>
        );
    }
}