import Plot from 'react-plotly.js';
import layout from "../../../root/layout";

export default function HeatChart() {
    let data = [
        {
            z: [[1, null, 30, 50, 1], [20, 1, 60, 80, 30], [30, 60, 1, -10, 20]],
            x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
            y: ['Morning', 'Afternoon', 'Evening'],
            type: 'heatmap',
            hoverongaps: false
        }
    ];

    return(
        <Plot
        data={data}
        layout={layout}
        />
    )
}
