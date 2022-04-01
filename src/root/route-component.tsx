import { Routes } from "react-router-dom";
import {Route} from "react-router";
import QuerySelector from "../Views/query-selector-content/query-selector";
import Home from "../Views/home/home";
import MultiSelect from "../Views/multi-select/multi-select";

function RouteComponent() {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/query' element={<QuerySelector/>}/>
            <Route path='/select' element={<MultiSelect/>}/>
        </Routes>
    )
}

export default RouteComponent;
