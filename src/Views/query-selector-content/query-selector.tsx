import React from "react";
import FilterControl from "react-filter-control";
import {fields, filterValue} from "./data";
import {useNavigate} from "react-router";

function QuerySelector() {
    const navigate = useNavigate();
    const clickIem = (id: string) => {
        navigate("/select");
    };
    const isloading = true;
    const data = ['1', '2', '3'];
    return (
       <div>
           <FilterControl
               filterValue={filterValue}
               fields={fields}
               onFilterValueChanged={handleFilterValueChange}
           />
       </div>
    );
}

const handleFilterValueChange = (filterValue: any) => {
    console.log('filtervalue ', filterValue.items);
};

export default QuerySelector;
