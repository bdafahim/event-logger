import MultilineChart from "../multichart/multichart";
import schc from "../../data/SCHC.json"
import vcit from "../../data/VCIT.json";
import portfolio from "../../data/portfolio.json";
// import "./styles.css";

export interface SomeData {
    name: string,
    color: string,
    items: any,
}
const portfolioData: SomeData = {
    name: "Portfolio",
    color: "#ffffff",
    items: portfolio.map((d) => ({ ...d, date: new Date(d.date) }))
};
const schcData: SomeData = {
    name: "SCHC",
    color: "#d53e4f",
    items: schc.map((d) => ({ ...d, date: new Date(d.date) }))
};
const vcitData: SomeData = {
    name: "VCIT",
    color: "#5e4fa2",
    items: vcit.map((d) => ({ ...d, date: new Date(d.date) }))
};

const dimensions = {
    width: 600,
    height: 300,
    margin: {
        top: 30,
        right: 30,
        bottom: 30,
        left: 60
    }
};

export default function App() {
    return (
        <div className="App" style={{background: "black"}}>
            <MultilineChart
                data={[portfolioData, schcData, vcitData]}
                dimensions={dimensions}
            />
        </div>
    );
}
