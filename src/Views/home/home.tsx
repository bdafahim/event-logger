import {useNavigate} from "react-router";
import React from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home () {
    const navigate = useNavigate();
    const goToQuerySelect = () => {
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
            <Button variant="primary" style={{marginRight: "20px"}} onClick={goToQuerySelect}>Chart</Button>
            <button onClick={ goToMultiselect}>Dummy</button>
            <button onClick={ goToBarChart}>BarChart</button>
            <Button variant="primary">Primary</Button>
        </div>
    )
}

export default Home;
