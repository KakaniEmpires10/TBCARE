import Categories from "../components/HomePage/Categories"
import Hero from "../components/HomePage/Hero"
import LogoCollection from "../components/HomePage/LogoCollection"
import News from "../components/HomePage/News";
import SEO from "../utils/SEO";

const Home = () => {
    return (
        <>
            <SEO
                title="TBCARE - Platform Edukasi Tuberkulosis"
                description="Platform edukasi tuberkulosis terlengkap di Indonesia. Pelajari tentang TB dewasa, TB anak, dan panduan PMO untuk pengobatan yang efektif."
                keywords="tuberkulosis Indonesia, edukasi TB, platform kesehatan, tuberkulosis dewasa, tuberkulosis anak"
                url="https://tbcare.vercel.app"
            />
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