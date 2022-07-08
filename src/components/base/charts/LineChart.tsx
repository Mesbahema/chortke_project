import React from 'react'
import Paper from '@mui/material/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    ChartProps,
    SplineSeries,
    AreaSeries,
    BarSeries,
} from '@devexpress/dx-react-chart-material-ui';

const data = [
    { argument: 1, value: 10 },
    { argument: 2, value: 20 },
    { argument: 3, value: 30 },
];

const generateData = (start: number, end: number, step: number) => {
    const data = [];
    for (let i = start; i < end; i += step) {
        data.push({ splineValue: Math.sin(i) / i, lineValue: ((i / 15) ** 2.718) - 0.2, argument: i });
    }
    return data;
};


const LineChart = ({ height }: { height?: number }) => {
    const ChartWithChildren = Chart as React.ComponentType<ChartProps & { children: React.ReactNode }>;

    const chartData = generateData(2.5, 12, 0.5)

    const [rendered, setRendered] = React.useState(false)
    React.useEffect(() => {

        setRendered(true)
    }, [])

    return (
        <Paper>
            {/* {rendered && <ArgumentAxis />}
            {rendered && <ValueAxis />} */}
            <ChartWithChildren
                data={chartData}
                height={height || 350}
            >
                <LineSeries
                    valueField="lineValue"
                    argumentField="argument"
                />
            </ChartWithChildren>
        </Paper>
    )
}

export default LineChart