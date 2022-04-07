import Plot from 'react-plotly.js';


export default function PieChart () {
    let graph1 = {
        data: [
            {values: [20, 50, 20, 10], labels: ['BD', 'India', 'Pakistan', 'Nepal'], type: 'pie'},
        ],
        layout: {
            height: 700,
            width: 800
        }
    };

    return(
        <Plot
        data={graph1.data}
        layout={graph1.layout}
        />
    )
}
