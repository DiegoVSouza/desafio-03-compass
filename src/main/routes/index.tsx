// Routes
import Footer from "../../Presentation/Components/Footer/Footer";
import AppRoutes from "./app.routes";
import Header from "../../Presentation/Components/Header/Header";
import ScrollToTopOnNavigate from "../../utils/ScrollToTopOnNavigate";

export default function Routes() {

    return (
        <>
            <ScrollToTopOnNavigate />
            <Header />
            <AppRoutes />
            <Footer />
        </>
    )
} 
