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

    return (
        <div style={{justifyContent: "flex-start"}}>
            <button style={{marginRight: "20px"}} onClick={() => goToQuerySelect('5')}>Test</button>
            <button onClick={ goToMultiselect}>Dummy</button>
        </div>
    )
}

export default Home;
