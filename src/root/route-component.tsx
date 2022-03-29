import { Routes } from "react-router-dom";
import {Route} from "react-router";
import QuerySelector from "../Views/query-selector-content/query-selector";
import MultiSelect from "../Views/multi-select/multi-select";

function RouteComponent() {
    return (
        <Routes>
            <Route path='/' element={<QuerySelector/>}/>
            <Route path='/select' element={<MultiSelect/>}/>
        </Routes>
    )
}

export default RouteComponent;
