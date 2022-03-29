import React from "react";
import FilterControl from "react-filter-control";
import {fields, filterValue} from "./data";

function QuerySelector() {
    return (
        <FilterControl
            filterValue={filterValue}
            fields={fields}
            onFilterValueChanged={handleFilterValueChange}
        />
    );
}

const handleFilterValueChange = (filterValue: any) => {
    console.log('filtervalue ', filterValue.items);
};

export default QuerySelector;
