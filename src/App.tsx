import Slider from "react-slick";
import GenerationDemand from "./components/GenerationDemand";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
// Import images
import cardImage1 from "./assets/images/banner/1.png";
import cardImage2 from "./assets/images/banner/2.png";
import cardImage3 from "./assets/images/banner/3.png";
import cardImage4 from "./assets/images/banner/4.png";
import cardImage5 from "./assets/images/banner/5.png";
import cardImage6 from "./assets/images/banner/6.png";
import cardImage7 from "./assets/images/banner/7.png";
import cardImage8 from "./assets/images/banner/8.png";

import cardImage10 from "./assets/images/banner/10.png";

import buildingImage from "./assets/images/cards/1.png";
import controlRoom from "./assets/images/cards/3.png";
import discosMap from "./assets/images/cards/4.png";
import MainCard from "./components/MainCard";
import BelowHero from "./components/BelowHero";

import ServiceOne from "./assets/images/cards/service1.png";
import ServiceTwo from "./assets/images/cards/service2.png";
import ServiceThree from "./assets/images/cards/service3.png";
import SectionProvideImg from "./assets/images/banner/section-provide.png";


const heroImages = [
  cardImage7,
  cardImage8,
  cardImage10,
  cardImage1,
  cardImage2,
  cardImage3,
  cardImage4,
  cardImage5,
  cardImage6,
];

const App = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    fade: true, // Optional: for fade transition
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
    ],
  };

  function CardArticle(props: any) {
    return (
      <div className="w-full md:basis-1/3 transition text-center shadow-md hover:bg-slate-100 pb-5 mb-2">
        <img src={props.image} alt="" className="w-full" />
        <h3 className="p-2 text-blue-950 font-medium text-xl">{props.title}</h3>
        <div className="mb-4 px-2 text-left">{props.shortDesc}</div>
        <a
          href="Learn more"
          className="btn-arrow text-color text-white bg-[#003366] px-5 py-3 rounded-sm font-medium"
        >
          Learn more
        </a>
      </div>
    );
  }
  function CardArticleText(props: any) {
    return (
      <div className="w-3/4">
        <div className="text-md text-orange-500 text-xl font-medium">
          {props.title}
        </div>
        <h2 className="text-4xl text-blue-950 font-medium py-3 leading-snug">
          {props.subtitle}
        </h2>
        <div>{props.detail}</div>
      </div>
    );
  }
  function CardServices(props: any) {
    return (
      <div
        className="w-full md:basis-1/3 transition text-center px-3 py-5 mb-3 shadow-md"
        style={{ backgroundColor: "rgba(30, 86, 142, 0.47)" }}
      >
        <div className="flex justify-center pt-10 pb-4">
          <img src={props.image} alt="" className="w-1/5" />
        </div>
        <h3 className="p-2 font-medium text-xl pb-4">{props.title}</h3>
        <div className="mb-4 px-2 text-left">{props.shortDesc}</div>
      </div>
    );
  }

  function CardFaq(props: any) {
    return (
      <div className="flex flex-row text-xl py-8 border-t">
        <div className="basis-5/6 font-title font-medium">{props.title}</div>
        <div className="basis-1/6 font-medium text-xl text-right">+</div>
      </div>
    );
  }

  return (
    <>
      <header className="relative text-white overflow-hidden">
        <Slider {...settings} className="w-full">
          {heroImages.map((image, index) => (
            <div
              key={index}
              className="w-full h-full flex items-center justify-center"
            >
              <img
                src={image}
                alt={`Hero ${index + 1}`}
                className="w-full h-[400px] md:h-full object-cover"
              />
              <div className="hero-slide-text bottom-28 md:bottom-32 font-title text-3xl md:text-5xl md:w-[50%] md:left-[25%]">
                Where Innovation Meets Energy Excellence
              </div>
            </div>
          ))}
        </Slider>
        <div className="bottom-0 left-0 w-full bg-navy text-white py-2 overflow-hidden breaking-news-running">
          <div className="whitespace-nowrap animate-marquee backdrop-blur-sm">
            <p className="inline-block px-4">
              Breaking News: New energy solutions unveiled! | Breaking News:
              Major renewable energy breakthrough! | Breaking News:
              Industry-leading innovations coming soon!
            </p>
          </div>
        </div>
        {/* <img 
            src={heroImage1}
        /> */}
        <div className="text-hero bg-[#003366]">
          <BelowHero
            title="Where Innovation Meets Energy Excellence"
            detail=" The National Power Control Center (NPCC) functions as the nerve center of the electricity generation and transmission system. The engineers of NPCC pass on instructions to GENCOS, IPPs, various formations of NTDC, DISCOS, & Residual WAPDA from its main control center and regional control centers to ensure smooth and economical system operation in providing electricity supply to the end customer as per grid code.
                    •	National Control Centre Islamabad
                    •	Regional Control Centre North Islamabad
                    •	Regional Control Centre South Jamshoro
                    All these Control centers functions round the clock."
          />
          <div className="flex flex-col md:flex-row gap-3 mt-4 container m-auto">
            <div className="md:flex md:flex-row w-full lg:w-[60%] justify-evenly  items-center gap-5 pb-4 md:px-0 px-4 md:mr-6">
              <MainCard title="Availability" value={25000} />
              <MainCard title="Demand" value={18000} />
              <MainCard title="Generation" value={13000} />
            </div>
            <div className="w-full lg:w-[40%] px-4">
              <GenerationDemand />
            </div>
          </div>
        </div>
      </header>
      <div className="bg-[url('/src/assets/images/bg/background.png')] bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto flex justify-between items-center p-10">
          <section>
            <CardArticleText
              title="Mission Statement"
              subtitle="Comprehensive Service of NTDC NPCC"
              detail=" The National Power Control Center (NPCC) functions as the nerve
                                center of the electricity generation and transmission system. The engineers of NPCC pass
                                on instructions to GENCOS, IPPs, various formations of NTDC, DISCOS, & Residual WAPDA
                                from its main control center and regional control centers to ensure smooth and
                                economical system operation in providing electricity supply to the end customer as per
                                grid code."
            />

            <div className="md:flex md:flex-row my-10 gap-10 mb-16">
              <CardArticle
                image={buildingImage}
                title="Architectural, Structural & Mechanical Drawings"
                shortDesc="We conduct thorough environmental impact assessments and audits (EIA/EA) for energy projects in the oil and gas industry, as well as general projects."
              />
              <CardArticle
                image={discosMap}
                title="Architectural, Structural & Mechanical Drawings"
                shortDesc="We conduct thorough environmental impact assessments and audits (EIA/EA) for energy projects in the oil and gas industry, as well as general projects."
              />
              <CardArticle
                image={controlRoom}
                title="Architectural, Structural & Mechanical Drawings"
                shortDesc="We conduct thorough environmental impact assessments and audits (EIA/EA) for energy projects in the oil and gas industry, as well as general projects."
              />
            </div>
            <a
              href="#"
              className="transition border-2 border-yellow-400 bg-yellow-400 text-black py-3 px-6 w-[20%] text-center rounded-lg font-semibold hover:bg-yellow-500 mr-3"
            >
              See All
            </a>
          </section>
        </div>
      </div>
      <section className="bg-[#003366] text-white">
        <div className="container mx-auto items-center p-10">
          <div className="justify-center">
            <h2 className="text-4xl  px-6 md:px-64 text-center font-normal">
              Streamline your operations with our Technical Audits and
              Compliance Services
            </h2>
          </div>
          <div className="md:flex md:flex-row my-10 gap-10 mb-16">
            <CardServices
              image={ServiceOne}
              title="Ensure regulatory compliance with our Licenses and Permits Acquisition"
              shortDesc="Our dedicated team of experienced experts is committed to working closely with you to develop a comprehensive and effective Emergency Response Plan that is tailored to your specific needs and requirements."
            />
            <CardServices
              image={ServiceTwo}
              title="Mitigate environmental risks with our Environmental Impact Assessments and Audits"
              shortDesc="We specialize in providing comprehensive EIA/EA (Environmental Impact Assessment/Environmental Assessment) services for various energy and oil & gas projects, including but not limited to feasibility studies, impact mitigation strategies, stakeholder engagement, and regulatory compliance assessments."
            />
            <CardServices
              image={ServiceThree}
              title="Get accurate quotations for your general engineering and energy works"
              shortDesc="Our dedicated team of experienced professionals is committed to providing you with a range of competitive quotations that are customized to perfectly meet your specific needs and requirements."
            />
          </div>
        </div>
      </section>

      <section className="bg-[url('/src/assets/images/bg/background.png')] bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto items-center md:p-10">
          <div className="container mx-auto  justify-between items-center p-10">
            <div className="md:flex md:flex-row">
              <div className="md:w-1/2 mb-4">
                <h2 className="text-4xl text-blue-950 font-normal mr-6">
                  Providing top-quality consulting services for the oil and gas
                  sector.
                </h2>
              </div>
              <div className="md:w-1/2">
                <div>
                  Our company is dedicated to delivering expert solutions in
                  architectural, structural, and mechanical drawings for oil and
                  gas projects. We also specialize in energy regulatory
                  compliance, environmental impact assessments, and offering
                  quotations for general works. With a focus on excellence and
                  customer satisfaction, we are committed to providing the
                  highest level of service in the industry.
                </div>
              </div>
            </div>
            <div className="w-full my-10">
              <img
                src={SectionProvideImg}
                alt=""
                className="w-full rounded-sm"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/src/assets/images/banner/bg-consulting.png')] py-10">
        <div className="container mx-auto items-center text-center p-10 text-white">
          <h2 className="font-medium text-3xl">
            Expert Consulting Services for You
          </h2>
          <p className="pt-4 pb-10">
            Contact us today for professional consultations and competitive
            quotes.
          </p>
          <a
            href="#"
            className="transition border-2 border-yellow-400 bg-yellow-400 text-black py-4 px-6 w-[20%] text-center rounded-lg font-semibold hover:bg-yellow-500 mr-3"
          >
            Contact Us
          </a>
        </div>
      </section>

      <section className="bg-[url('/src/assets/images/bg/background.png')] bg-no-repeat bg-cover bg-center">
        <div className="container mx-auto items-center md:p-10">
          <div className="container mx-auto  justify-between items-center p-10">
            <div className="md:flex md:flex-row">
              <div className="md:w-1/2 mr-10 mb-6">
                <div className="text-3xl text-blue-950 font-normal mr-8">
                  Common
                </div>
                <div className="pt-4 pb-10">
                  Find answers to frequently asked questions about our
                  consulting services in the oil and gas industry, regulatory
                  compliance, and environmental assessments.
                </div>
                <a
                  href="#"
                  className="transition border-2 border-yellow-400 bg-yellow-400 text-black py-4 px-6 w-[20%] text-center rounded-lg font-semibold hover:bg-yellow-500 mr-3"
                >
                  Contact Us
                </a>
                <br />
                <br />
                <br />
              </div>
              <div className="md:w-1/2 bg-white opacity-75 p-5 shadow-md rounded-sm">
                <div className="text-3xl text-blue-950 font-normal mb-4">
                  Frequent Asked Questions
                </div>

                <CardFaq title="What is oil and gas consulting?" />
                <CardFaq title="What is EIA/EA?" />
                <CardFaq title="How can we help?" />
                <CardFaq title="What other services do you offer?" />
                <CardFaq title="Have more questions?" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[url('/src/assets/images/bg/background.png')]  bg-no-repeat bg-cover bg-center pb-6">
        <div className="container mx-auto items-center p-4 md:p-10 bg-[#003366] text-white rounded-lg shadow-md">
          <div className="md:flex flex-row justify-between">
            <div className="basis-1/2 p-6 md:order-1">
              <div className="font-title text-5xl font-medium mb-3">
                Get in <span className="text-yellow-400">Touch</span>
              </div>
              <div>
                We'd love to hear from you! Whether you have a question about
                our services, need assistance, or you're in the neighborhood and
                want to check in, feel free to reach out.
              </div>
              <form action="" className="mt-6 md:pr-10">
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-transparent p-3 w-full border rounded mt-5"
                />
                <input
                  type="text"
                  placeholder="email"
                  className="bg-transparent p-3 w-full border rounded mt-5"
                />
                <input
                  type="text"
                  placeholder="Phone number"
                  className="bg-transparent p-3 w-full border rounded mt-5"
                />
                <select
                  name=""
                  id=""
                  className="bg-transparent p-3 w-full border rounded mt-5"
                >
                  <option value="">Select service</option>
                </select>
                <input
                  type="button"
                  value="SEND"
                  className="bg-yellow-500 text-black font-bold p-3 w-full  rounded mt-5 hover:bg-yellow-300"
                />
              </form>
            </div>
            <div className="basis-1/2 p-10 md:px-20  md:order-0">
              <div className="font-title text-2xl font-bold">
                Contact Information
              </div>
              <div>Let’s have a chat</div>
              <div className="pt-6 flex flex-row">
                <div>
                  <img
                    className="mr-3"
                    src="/src/assets/images/icons/bxs_phone-call.png"
                    alt=""
                    style={{ height: 20 }}
                  />
                </div>
                <div>+923459275557</div>
              </div>
              <div className="pt-2 flex flex-row">
                <div>
                  <img
                    className="mr-3"
                    src="/src/assets/images/icons/ic_sharp-email.png"
                    alt=""
                    style={{ height: 20 }}
                  />
                </div>
                <div>iso@pakistan.com</div>
              </div>
              <div className="pt-2 flex flex-row">
                <div>
                  <img
                    className="mr-3"
                    src="/src/assets/images/icons/carbon_location-filled.png"
                    alt=""
                    style={{ height: 20 }}
                  />
                </div>
                <div>Islamabad, Pakistan</div>
              </div>

              <div className="mt-6 flex flex-row">
                <a href="#" className="mr-5">
                  <img
                    src="/src/assets/images/icons/icon-sosmed.png"
                    alt=""
                    style={{ height: 30 }}
                  />
                </a>
                <a href="#" className="mr-5">
                  <img
                    src="/src/assets/images/icons/icon-sosmed.png"
                    alt=""
                    style={{ height: 30 }}
                  />
                </a>
                <a href="#" className="mr-5">
                  <img
                    src="/src/assets/images/icons/icon-sosmed.png"
                    alt=""
                    style={{ height: 30 }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default App;
