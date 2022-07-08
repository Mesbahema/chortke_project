import React from 'react'
import { styled } from "@mui/system";
import Paper from '@mui/material/Paper';
import {
    Chart,
    PieSeries,
    Legend,
    ChartProps,
} from '@devexpress/dx-react-chart-material-ui';


import { Animation, Stack } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { Palette } from '@devexpress/dx-react-chart';

const LegendRoot = (props: any) => (
    <Legend.Root {...props} sx={{ display: 'flex', flexDirection: 'column', margin: 'auto' }} />
  );
  
  const LegendLabel = (props: any) => (
    <Legend.Label {...props} sx={{ whiteSpace: 'nowrap' }} />
  );
  

const chartData = [
    { country: 'Russia', area: 12 },
    { country: 'Canada', area: 7 },
    { country: 'USA', area: 7 },
    { country: 'China', area: 7 },
    { country: 'Brazil', area: 6 },
    { country: 'Australia', area: 5 },
    { country: 'India', area: 2 },
    { country: 'Others', area: 55 },
];

const stacks = [{
    series:
        [
            'Russia',
            'Canada',
            'USA',
            'China',
            'Brazil',
            'Australia',
            'India',
            'Others'],
}];





const PieChart = ({ height }: { height?: number }) => {
    const ChartWithChildren = Chart as React.ComponentType<ChartProps & { children: React.ReactNode }>;

    return (
        <>
            <ChartWithChildren
                height={height || 350}
                data={chartData}
            >
                {/* <Palette 
                scheme={['gray', 'white']} 
                /> */}
                <PieSeries
                    valueField="area"
                    argumentField="country"
                    innerRadius={0.5}
                    outerRadius={0.7}
                />
                <EventTracker onClick={e => console.log(e.targets[0].point)} />
                <HoverState />
                <Animation />
                <Legend position="left" rootComponent={LegendRoot} labelComponent={LegendLabel} />
            </ChartWithChildren>
        </>
    )
}

export default PieChart