import React from 'react'
import Paper from '@mui/material/Paper';
import {
    Chart,
    PieSeries,
    Title,
    ChartProps,
} from '@devexpress/dx-react-chart-material-ui';
  
import { Animation } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';
import { Palette } from '@devexpress/dx-react-chart';

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


const PieChart = () => {
    const ChartWithChildren = Chart as React.ComponentType<ChartProps & { children: React.ReactNode }>;
    
    return (
        <Paper>
            <ChartWithChildren
                data={chartData}
            >
                <Palette scheme={['gray', 'white']} />
                <PieSeries
                    valueField="area"
                    argumentField="country"
                    innerRadius={0.2}
                    outerRadius={0.5}
                />
                <Title
                    text="Area of Countries"
                />
                <EventTracker onClick={e => console.log(e.targets[0].point)} />
                <HoverState />
                <Animation />
            </ChartWithChildren>
        </Paper>
    )
}

export default PieChart