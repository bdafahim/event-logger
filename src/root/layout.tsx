import { BrowserRouter } from "react-router-dom";
import RouteComponent from "./route-component";
import Header from "./header";
import Footer from "./footer";

function Layout() {
    return (
        <main>
            <BrowserRouter>
                <Header/>
                <RouteComponent/>
                <Footer/>
            </BrowserRouter>
        </main>
    )
}

export default Layout;
