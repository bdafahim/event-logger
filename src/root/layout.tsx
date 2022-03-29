import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./route-component";

function Layout() {
    return (
        <main>
            <BrowserRouter>
                <RouteComponent/>
            </BrowserRouter>
        </main>
    )
}

export default Layout;
