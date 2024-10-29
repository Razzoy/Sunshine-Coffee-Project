import style from './MainLayout.module.scss'
import { Outlet } from "react-router-dom";
import { Header } from "../components/Header/Header";
import { Navigation } from "../components/Navigation/Navigation";
import { Footer } from "../components/Footer/Footer";
import { CookieBanner } from "../components/CookieBanner/CookieBanner";

export function MainLayout() {
    return (
        <>
            <Navigation/>
            <Header/>
            <main className={style.mainStyle}>
                <Outlet />
            </main>
            <Footer/>

            <CookieBanner/>
        </>
    )
}