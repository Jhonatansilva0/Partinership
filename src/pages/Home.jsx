import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Presentation from "../components/Presentation/Presentation"
import Promo from "../components/Promo/Promo";


function Home(){
    return (
        <>
            <Header/>
            <Presentation/>
            <Promo/>
            <Footer/>
        </>
    )
}
export default Home;