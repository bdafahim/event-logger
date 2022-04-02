import {useNavigate} from "react-router";
import React from "react";

function Home () {
    const navigate = useNavigate();
    const goToQuerySelect = (id: string) => {
        navigate("/select");
    };

    function goToMultiselect() {
        navigate("/query")
    }
    function goToBarChart() {
        navigate("/bar")
    }

    return (
        <div style={{justifyContent: "flex-start"}}>
            <button style={{marginRight: "20px"}} onClick={() => goToQuerySelect('5')}>Test</button>
            <button onClick={ goToMultiselect}>Dummy</button>
            <button onClick={ goToBarChart}>BarChart</button>
        </div>
    )
}

export default Home;
