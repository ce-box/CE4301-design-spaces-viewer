import React, { Fragment } from 'react';
import { PureComponent } from "react";
import { Area, AreaChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { Props } from "./props";
import { State } from "./state";

export default class Chart<Data> extends PureComponent<Props<Data>, State> {
    render() {
        return (
            <Fragment>
                <div 
                    style={{
                        height: this.props.height? this.props.height : 400,
                        width: this.props.width? this.props.width : '100%'
                    }}
                >
                    <h2 style={{ width: '100%', height: '18%', justifyContent: 'center', alignItems: 'center', textAlign: 'center', display: 'flex'}}>
                        {this.props.title}
                    </h2>
                    <div style={{ width: '%', height: '82%' }}>
                        <ResponsiveContainer>
                            <AreaChart
                                data={this.props.data}
                                margin={{ top: 10, right: 30, left: 10, bottom: 30 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                <CartesianGrid strokeDasharray="3 3" />
                                <Tooltip />
                                <Area type="monotone"
                                dataKey={this.props.data[0]? Object.keys(this.props.data[0])[1] : 'id'} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </Fragment>
        );
    }
}