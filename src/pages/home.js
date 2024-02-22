import Navbar from '../components/navbar';
import HeroSection from './../components/HeroSection';
import HeroProductRow from './../components/HeroProductRow';
import Banner from './../components/Banner';
import RoundedSection from './../components/RoundedSection';
import ProductSection from './../components/ProductSection';
import NewsLetterSection from './../components/NewsLetterSection';
import Footer from './../components/Footer';
function Home () {
    return (
      <>
      <Navbar/>
      <HeroSection/>
      <HeroProductRow/>
      <Banner/>
      <RoundedSection/>
      <ProductSection/>
      <NewsLetterSection/>
      <Footer/>
      </>
    );
  }
  
  export default Home;
  