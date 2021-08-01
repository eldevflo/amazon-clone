import React  from 'react'
import './Home.css'
import {Carousel, Col, Container, Row , Image} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import Products from '../../components/products/Products'
import SignUp from '../../components/signup/SignUp'
import PricedProduct from '../../components/pricedProduct/PricedProduct';
import Footer from '../../components/footer/Footer';
import LanguageSwitcher from '../../components/languageSweevher/LanguageSwitcher'

function Home() {
       
 


    const backToTop=()=>{
        window.scrollTo({
      top:0,
      behavior: "smooth"
    });
    }
 
    return (
        
        <div className="Home"  >
            <div className="home-container">
                <Carousel indicators={false} className="home-slider" >
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Nzg3NzIxZDct/Nzg3NzIxZDct-OGNhZDRmNzYt-w1500._CB412118632_.jpg"
                    alt="First slide"
                    />
                    </Carousel.Item>                    
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/OWIxZDAxNjkt/OWIxZDAxNjkt-NDE3OTM4NTgt-w1500._CB658881205_.jpg"
                    alt="Second slide"
                    />
                    </Carousel.Item>
                    <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/2019/Other/RB-1424_AcquisitionHolidayAssets/GW_DesktopHero_RB-1424_PV-AcquisitionHolidayAssets_1500x600._CB451871227_.jpg"
                    alt="Third slide"
                    />
                    </Carousel.Item>
                </Carousel>
                
            </div>
            <div className="container-fluid" >
                <Row  className="suggestion-div " >
                <Col  className="suggestion" md={9} sm={12}>
                    <Products/>
                </Col>
                <Col md={3}  className="suggestion" >
                    <SignUp/>
                    <img className="ad-img" src="https://images-na.ssl-images-amazon.com/images/G/01/ape/fallback/static/GC_GW_Fallback_US_CA_._CB427676588_.png"/>
                </Col>
                </Row>
            </div>

             <div className="container-fluid" >
                <Row className="priced-container" >
                    <Col md={3} xs={12} >

                        <PricedProduct
                        id="12345"
                        title="MUDEELA Planter Pot with Stand" 
                        image="https://m.media-amazon.com/images/I/41PLf40+O+L._AC_SR160,160_.jpg"
                        price={19.99}
                        rating={5}
                        description='DELIGHTFUL PLANTER POT - Roly-poly bluebird holds your plants and charms your guests.'
                        />
                    </Col>
                    <Col md={3} xs={12}>
                        <PricedProduct
                        id="25648"
                        title="Paula's Choice Skin Perfecting 2% BHA Liquid Salicylic Acid Exfoliant Duo" 
                        image="https://images-na.ssl-images-amazon.com/images/I/71vbb0AQIJL._AC_UL200_SR200,200_.jpg"
                        price={36.99}
                        rating={4}
                        description='CERAMIC PLANTER - Glazed and gleaming, its made of gorgeous high-quality ceramic'

                        />
                    </Col>
                    <Col md={3} xs={12}>
                        <PricedProduct
                        id="12564"
                        title="Jade Roller & Gua Sha, Face Roller" 
                        image="https://images-na.ssl-images-amazon.com/images/I/81Y-sTorhCL._AC_UL200_SR200,200_.jpg"
                        price={19.95}
                        rating={5}
                        description='JUTE HANGING CORD - Durable with a touch of rustic charm. Hangs 29'
                        />
                    </Col>
                    <Col  md={3} xs={12}>
                        <PricedProduct
                        id="16489"
                        title="Amazon Brand – Rivet Mid-Century " 
                        image="https://m.media-amazon.com/images/I/41SRGy682wL._AC_SR160,160_.jpg"
                        price={39.95}
                        rating={3}
                        description="PERFECT SIZE FOR SMALL PLANTS - Dress it up with succulents, air plants, or small flower arrangements."
                        />
                    </Col>
                </Row>
                <Row className="priced-container">
                    <Col  md={3} xs={12}>
                        <PricedProduct
                        id="65974"
                        title="ORETECH Designed for iPhone SE 2020 Case " 
                        image="https://images-na.ssl-images-amazon.com/images/I/51UFmnIHcoL._AC_SY200_.jpg"
                        price={14.99}
                        rating={4}
                        description=" GREAT GIFT - Get one for the indoor gardener and bird enthusiast in your life."
                        />
                    </Col>
                    <Col  md={3} xs={12}>
                        <PricedProduct
                        id="65974"
                        title="woman grand sneaker " 
                        image="https://m.media-amazon.com/images/I/71qdoDlEOpL._AC_UL320_.jpg"
                        price={29.18}
                        rating={5}
                        description="PERFECT SIZE FOR SMALL PLANTS - Dress it up with succulents, air plants, or small flower arrangements."

                        />
                    </Col>
                    <Col  md={3} xs={12}>
                        <PricedProduct
                        id="65974"
                        title="FONYVE Silk Feeling Scarf  " 
                        image="https://images-na.ssl-images-amazon.com/images/I/41vs99wvE5L._AC_SY200_.jpg"
                        price={6.99}
                        rating={4}
                        description="PERFECT SIZE FOR SMALL PLANTS - Dress it up with succulents, air plants, or small flower arrangements."

                        />
                    </Col>
                    <Col  md={3} xs={12}>
                        <PricedProduct
                        id="65974"
                        title="Alarm Clock Bedside Non Ticking LED " 
                        image="https://images-na.ssl-images-amazon.com/images/I/31aChQV4ugL._AC_SY200_.jpg"
                        price={19.99}
                        rating={2}
                        description="PERFECT SIZE FOR SMALL PLANTS - Dress it up with succulents, air plants, or small flower arrangements."

                        />
                    </Col>
                </Row>

                
            </div>
            <div className="jump-container" >
         
                    <h5 onClick={backToTop}>back to top</h5>
        
            </div>
            <div className="footer-container">
                <Footer />
            </div>
            <div className="language-selection">
            <LanguageSwitcher/>

            </div>
                                
        </div>
        
    )
}


export default Home
