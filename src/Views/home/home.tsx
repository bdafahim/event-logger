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

    function goToDeviceVersion() {
        navigate("/version");
    }

    function goToCheckin() {
        navigate("/checkin");
    }

    function resetPassword() {
        navigate("/reset");
    }

    function loginLogout() {
        navigate("/login-logout")
    }

    function errorComparison() {
        navigate("/error")
    }
    function expenseComparison() {
        navigate("/expense")
    }
    function expenseComparisonBar() {
        navigate("/expense-bar")
    }
    function compareAteendanceBar() {
        navigate("/compare-attendance")
    }

    return (
        <div className="d-flex justify-content-around" style={{marginTop: "30px"}}>
            <Button variant="primary" onClick={ loginLogout}>Compare Attendance</Button>
            <Button variant="primary" onClick={ compareAteendanceBar}>Compare Attendance Bar</Button>
            <Button variant="primary" onClick={ expenseComparison}>Expense Comparisons</Button>
            <Button variant="primary" onClick={ expenseComparisonBar}>Expense Comparisons Bar</Button>
            <Button variant="primary" onClick={ goToDeviceType}>Device Type</Button>
            <Button variant="primary" onClick={ goToDeviceVersion}>Device Version</Button>
            <Button variant="primary" onClick={ errorComparison}>Error Comparison</Button>
            <Button variant="primary" onClick={ resetPassword}>Reset Password</Button>


            {/*<Button variant="primary" onClick={goToCheckin}>Check In</Button>*/}
            {/*<Button variant="primary" onClick={ goToBarChart}>Bar Chart</Button>*/}
            {/*<Button variant="primary"  onClick={goToPieChart}>Pie Chart</Button>*/}
            {/*<Button variant="primary" onClick={ goToSunburstChart}>SunBurst Chart</Button>*/}
            {/*<Button variant="primary" onClick={goToHeatChart}>Heat Chart</Button>*/}

        </div>
    )
}

export default Home;
