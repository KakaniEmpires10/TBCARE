import { useEffect } from "react";
import Categories from "../components/HomePage/Categories"
import Hero from "../components/HomePage/Hero"
import LogoCollection from "../components/HomePage/LogoCollection"
import News from "../components/HomePage/News";

const Home = () => {

    useEffect(() => {
        document.title = 'TBC | Home';
    }, []);

    return (
        <>
            <Hero />
            <div>
                <LogoCollection />
                <Categories />
                <News />
            </div>
        </>
    )
}

export default Home