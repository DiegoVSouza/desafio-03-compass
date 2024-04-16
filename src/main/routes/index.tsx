// Routes
import { useSelector } from "react-redux";
import Footer from "../../Presentation/Components/Footer/Footer";
import AppRoutes from "./app.routes";
import { useEffect, useRef } from 'react';
import { UserStore } from "../../Domain/Model/Token";
import Header from "../../Presentation/Components/Header/Header";

export default function Routes() {
    const { user } = useSelector((store: UserStore) => store);
    
    return (
        <>

            <Header />
            <AppRoutes />
            <Footer />
        </>
    )
} 
