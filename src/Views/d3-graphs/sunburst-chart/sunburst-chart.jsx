import Plot from 'react-plotly.js';

export default function SunburstChart() {
    let data;
    data = [
        {
            "type": "sunburst",
            "labels": ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
            "parents": ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
            "values":  [65, 14, 12, 10, 2, 6, 6, 4, 4],
            "leaf": {"opacity": 0.4},
            "marker": {"line": {"width": 2}},
            "branchvalues": 'total'
        }];

    let layout;
    layout = {
        "margin": {"l": 0, "r": 0, "b": 0, "t": 0},
        width: 800,
        height: 800
    };
    return (
        <Plot
        data={data}
        layout={layout}
        />
    );
}
