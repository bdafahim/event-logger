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
        <div className="d-flex justify-content-around" style={{marginTop: "30px"}}>
            <Button variant="primary" onClick={ goToBarChart}>BarChart</Button>
            <Button variant="primary"  onClick={goToQuerySelect}>Chart</Button>
            <button onClick={ goToMultiselect}>Dummy</button>
            <Button variant="primary">Primary</Button>
        </div>
    )
}

export default Home;
