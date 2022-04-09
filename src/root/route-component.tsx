import { Routes } from "react-router-dom";
import {Route} from "react-router";
import QuerySelector from "../Views/query-selector-content/query-selector";
import Home from "../Views/home/home";
import MultiSelect from "../Views/multi-select/multi-select";
import BasicBarChart from "../Views/d3-graphs/bar-chart/bar-chart";
import PieChart from "../Views/d3-graphs/pie-chart/pie-chart";
import SunburstChart from "../Views/d3-graphs/sunburst-chart/sunburst-chart";
import HeatChart from "../Views/d3-graphs/heat-chart/heat-chart";
import {QueryBuilder} from "@material-ui/icons";
import ReactAwesomeQueryBuilder from "../Views/react-awesome-query-builder/react-awesome-query-builder";
import PieChartDeviceType from "../Views/amplitude-graphs/pie-chart-device-type";
import PieChartDeviceVersion from "../Views/amplitude-graphs/pie-chart-device-version";
import BarChartCheckIn from "../Views/amplitude-graphs/bar-chart-check-in";

function RouteComponent() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='/bar' element={<BasicBarChart/>}/>
            <Route path='/pie' element={<PieChart/>}/>
            <Route path='/sun' element={<SunburstChart/>}/>
            <Route path='/heat' element={<HeatChart/>}/>
            <Route path='/query-builder' element={<ReactAwesomeQueryBuilder/>}/>
            <Route path='/device-type' element={<PieChartDeviceType/>}/>
            <Route path='/version' element={<PieChartDeviceVersion/>}/>
            <Route path='/checkin' element={<BarChartCheckIn/>}/>

            <Route path='/query' element={<QuerySelector/>}/>
            <Route path='/select' element={<MultiSelect/>}/>
        </Routes>
    )
}

export default RouteComponent;
