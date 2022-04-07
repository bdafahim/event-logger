import {useNavigate} from "react-router";
import React from "react";
import {Button} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

function Home () {
    const navigate = useNavigate();
    const goToPieChart = () => {
        navigate("/pie");
    };

    function goToSunburstChart() {
        navigate("/sun");
    }
    function goToBarChart() {
        navigate("/bar");
    }

    function goToHeatChart() {
        navigate("/heat");
    }

    function goToDeviceType() {
        navigate("/device-type");
    }

    return (
        <div className="d-flex justify-content-around" style={{marginTop: "30px"}}>
            <Button variant="primary" onClick={ goToDeviceType}>Device Type</Button>
            <Button variant="primary" onClick={ goToBarChart}>Bar Chart</Button>
            <Button variant="primary"  onClick={goToPieChart}>Pie Chart</Button>
            <Button variant="primary" onClick={ goToSunburstChart}>SunBurst Chart</Button>
            <Button variant="primary" onClick={goToHeatChart}>Heat Chart</Button>
        </div>
    )
}

export default Home;
