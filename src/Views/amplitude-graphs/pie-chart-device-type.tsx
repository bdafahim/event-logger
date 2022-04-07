import Plot from 'react-plotly.js';


export default function PieChartDeviceType() {

    let data = [
        {values: [
                126,
                72,
                54,
                53,
                48,
                46,
                46,
                42,
                41,
                41,
                38,
                38,
                37,
                36,
                35,
                34,
                34,
                33,
                32,
                32,
                32,
                32,
                31,
            ],
            labels: [
                "Xiaomi Redmi Note 8 Pro",
                "Xiaomi Redmi Note 8",
                "Apple iPhone 11",
                "Realme  8",
                "Samsung Galaxy M21",
                "Apple iPhone 7 Plus",
                "Redmi Note 10 Pro",
                "Redmi 10X 4G",
                "Redmi Note 9 Pro",
                "Samsung Galaxy A50",
                "Apple iPhone 12 Pro Max",
                "Vivo vivo 1906",
                "Redmi Note 10",
                "Redmi Note 10 Pro Max",
                "POCO M2",
                "Samsung Galaxy A51",
                "Samsung Galaxy M31",
                "Redmi 9",
                "Apple iPhone X",
                "OnePlus 6T",
                "OnePlus 9R",
                "Realme 5i",
                "Xiaomi Redmi Note 5 Pro",


            ],
            type: 'pie'},
    ];
    let layout = {
        height: 800,
            width: 900
    }
    return (
        <div>
            <h1>Composition by device type</h1>
            <Plot
                data={data}
                layout={layout}
            />
        </div>

    )
}
