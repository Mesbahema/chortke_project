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
import { Stack, Animation, RawAxisProps, LineSeries } from '@devexpress/dx-react-chart';

import { energyConsumption as data } from '../../../data/chart-data';
import { styled } from '@mui/system';
import { useTheme } from '@mui/material';

import {
    curveCatmullRom,
    line,
  } from 'd3-shape';

const Line = (props: any) => (
    // @ts-ignore
    <LineSeries.Path
      {...props}
      path={line()
        .x(({ 
            // @ts-ignore
            arg }) => arg)
        .y(({ 
            // @ts-ignore
            val }) => val)
        .curve(curveCatmullRom)}
    />
  );

const LineChart = ({ height }: { height?: number }) => {
    const [chartData, setChartData] = React.useState(data)
    const [rendered, setRendered] = React.useState(false)
    const ChartWithChildren = Chart as React.ComponentType<ChartProps & { children: React.ReactNode }>;

    const { palette: { primary: { main } } } = useTheme()
    React.useEffect(() => {

        setRendered(true)
    }, [])
    return (
        <div style={{ direction: 'ltr' }}>
            <ChartWithChildren
                data={chartData}
                height={height || 350}
            >
                {/*// @ts-ignore */}
                {rendered && <ArgumentAxis />}
                {rendered && <ValueAxis />}
                <LineSeries
                    name="Nuclear"
                    valueField="hydro"
                    argumentField="country"
                    seriesComponent={Line}
                />
                <Animation />
                <Stack
                    stacks={[
                        { series: ['Hydro-electric', 'Oil', 'Natural gas', 'Coal', 'Nuclear'] },
                    ]}
                />
            </ChartWithChildren>
        </div>
    )
}

export default LineChart