import * as React from 'react';
import Paper from '@mui/material/Paper';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,

    Title,
    Legend,
    ChartProps,
} from '@devexpress/dx-react-chart-material-ui';
import { Stack, Animation } from '@devexpress/dx-react-chart';

import { energyConsumption as chartData } from '../../../data/chart-data';
import { styled } from '@mui/system';

const Root = (props: any) => (
    <Legend.Root {...props} sx={{ display: 'flex', margin: 'auto', flexDirection: 'row' }} />
);
const Label = (props: any) => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
);

// const BarElement = React.createElement("rect", {fill: 'green'})<BarSeries.PointProps>

const BarComponent = (props: BarSeries.PointProps) => {
    const myProps = props as BarSeries.PointProps & {pane: {width:number, height: number}, 'value0': number}
    const width = props.barWidth * props.maxBarWidth
    const height = myProps.pane.height - props.val
    return <rect
     x={props.arg - width / 2} 
     y={myProps.pane.height - height} 
    // {...props}
    rx={5}
     width={width} height={height} fill={props.color} visibility="visible" 
    // value0="937.6"
    ></rect>
}

const BarChart = () => {
    const ChartWithChildren = Chart as React.ComponentType<ChartProps & { children: React.ReactNode }>;
    return (
        <Paper>
            <ChartWithChildren
                data={chartData}
            >
                <ArgumentAxis />
                <ValueAxis
                // max={2400}
                />

                {/* <BarSeries
                    name="Hydro-electric"
                    valueField="hydro"
                    barWidth={0.1}
                    color="green"
                    rx="5"
                    argumentField="country"
                /> */}
                <BarSeries
                    name="Oil"
                    valueField="oil"
                    // rx="5"
                    pointComponent={BarComponent}
                    // ry="0"
                    barWidth={0.1}
                    argumentField="country"
                />
                <BarSeries
                    name="Natural gas"
                    valueField="gas"
                    barWidth={0.1}
                    pointComponent={BarComponent}
                    color='#0a345223'
                    
                    argumentField="country"
                />
                {/* <BarSeries
                    name="Coal"
                    barWidth={0.1}
                    valueField="coal"
                    argumentField="country"
                />
                <BarSeries
                    name="Nuclear"
                    valueField="nuclear"
                    barWidth={0.1}
                    argumentField="country"
                /> */}
                <Animation />
                <Legend position="bottom" rootComponent={Root} labelComponent={Label} />
                <Title text="Energy Consumption in 2004 (Millions of Tons, Oil Equivalent)" />
                <Stack
                    stacks={[
                        { series: ['Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear'] },
                    ]}
                />
            </ChartWithChildren>
        </Paper>
    )
}

export default BarChart