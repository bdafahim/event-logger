import { Routes } from "react-router-dom";
import {Route} from "react-router";
import QuerySelector from "../Views/query-selector-content/query-selector";
import Home from "../Views/home/home";
import MultiSelect from "../Views/multi-select/multi-select";
import BasicBarChart from "../Views/d3-graphs/bar-chart/bar-chart";

function RouteComponent() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/query' element={<QuerySelector/>}/>
            <Route path='/select' element={<MultiSelect/>}/>
            <Route path='/bar' element={<BasicBarChart/>}/>
        </Routes>
    )
}

export default RouteComponent;
