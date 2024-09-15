import React from "react";
import Image1 from "../assets/flowershop1.jpg";
import Image2 from "../assets/flowershop2.jpg";
import Image3 from "../assets/flowershop3.jpg";
import Image4 from "../assets/flowershop4.jpg";
import Image5 from "../assets/flowershop5.png";
import Image6 from "../assets/flowershop6.jpg";
import Image7 from "../assets/flowershop7.jpg";
import Image8 from "../assets/flowershop8.jpg";
import WeddingImage from "../assets/wedding.jpg";
import ValentineImage from "../assets/Valentine Catagories.jpg";
import GraduationImage from "../assets/florist-graduation.jpg";
import FlowerMarketImage from "../assets/ceritanya-gedungfloracare.jpg";

import { useState } from "react";
import { Link } from "react-router-dom";

function LandingPage() {
  const flowers = [
    {
      id: 1,
      image: Image1,
      icon: "📍",
      title: "Three Bouquets",
      location: "Kota Jakarta Barat",
      description:
        "Jl. Raya Kebayoran Lama No.80, RT.5/RW.1, Sukabumi Utara, Kec. Kb. Jeruk, Jakarta, Daerah Khusus Ibukota Jakarta 11540",
      rating: 4.6,
      link: "https://threebouquets.com/",
    },
    {
      id: 2,
      image: Image2,
      icon: "📍",
      title: "Orchid Florist",
      location: "Kota Jakarta Barat",
      description:
        "Jl. Tanjung Duren Utara V No.228, Daerah Khusus Ibukota Jakarta 11470",
      rating: 4.7,
      link: "http://www.orchid-florist.com/",
    },
    {
      id: 3,
      image: Image3,
      icon: "📍",
      title: "Flower advisor",
      location: "Kota Jakarta Barat",
      description:
        "Jl. Arjuna Utara No.9c, RT.8/RW.1, Duri Kepa, Kec. Kb. Jeruk, Kota Jakarta Barat, Daerah Khusus Ibukota Jakarta 11510",
      rating: 4.8,
      link: "https://www.floweradvisor.co.id/",
    },
    {
      id: 4,
      image: Image4,
      icon: "📍",
      title: "Pinus Florist",
      location: "Kota Surabaya",
      description:
        "Jl. Kayoon No.33, Embong Kaliasin, Kec. Genteng, Surabaya, Jawa Timur 60271",
      rating: 4.8,
      link: "https://pinus.florist/",
    },
    {
      id: 5,
      image: Image5,
      icon: "📍",
      title: "Outer Blooms",
      location: "Kota Jakarta Selatan",
      description:
        "ITC Kuningan - Lantai 9, Jl. Prof. DR. Satrio, RT.11/RW.4, Karet Kuningan, Daerah Khusus Ibukota Jakarta 12940",
      rating: 4.5,
      link: "https://outerbloom.com/",
    },
    {
      id: 6,
      image: Image6,
      icon: "📍",
      title: "Prestisa",
      location: "Kota Bekasi",
      description:
        "Ruko pasar sinpasa summarecon bekasi No B-32, RT.003/RW.005, Marga Mulya, Kec. Bekasi Utara, Kota Bekasi, Jawa Barat 17142",
      rating: 4.8,
      link: "https://prestisa.com/",
    },
    {
      id: 7,
      image: Image7,
      icon: "📍",
      title: "Olusta",
      location: "Kota Jakarta Selatan",
      description:
        "Jl. Swadaya 1 Gg. Sail No.54, RT.13/RW.10, Pejaten Timur, Ps. Minggu, Kota Jakarta Selatan, Daerah Khusus Ibukota Jakarta 12510",
      rating: 4.9,
      link: "https://olusta.com/",
    },
    {
      id: 8,
      image: Image8,
      icon: "📍",
      title: "Flower Studio",
      location: "Kota Jakarta Pusat",
      description:
        "Mid Plaza 1 Lt.BS, Jl. Jenderal Sudirman, RT.10/RW.11, Karet Tengsin, Kecamatan Tanah Abang, Kota Jakarta Pusat, Daerah Khusus Ibukota Jakarta 10220",
      rating: 4.8,
      link: "https://flowerstudio.co.id/",
    },
  ];

  const collections = [
    {
      id: "wedding",
      image: WeddingImage,
      title: "Bunga Papan",
      description: "Elegant floral arrangements for your special day.",
    },
    {
      id: "valentine",
      image: ValentineImage,
      title: "Valentine's Day Flowers",
      description: "Express your love with our romantic flower arrangements",
    },
    {
      id: "graduation",
      image: GraduationImage,
      title: "Graduation Flowers",
      description: "Celebrate academic achievements with our flowers",
    },
  ];

  const services = [
    {
      id: 1,
      icon: "🌸",
      title: "Custom Flower Arrangements",
      description: "Create unique flower arrangements for any occasion.",
    },
    {
      id: 2,
      icon: "💐",
      title: "Bouquet Customization",
      description:
        "Personalize your bouquet with your favorite flowers and colors.",
    },
    {
      id: 3,
      icon: "🛵",
      title: "Same-Day Delivery",
      description: "Enjoy fast and reliable same-day flower delivery services.",
    },
  ];

  const faqs = [
    {
      id: 1,
      question: "How do I place an order?",
      answer:
        "You can place an order by visiting our website and selecting the flowers you want. Then, proceed to checkout and follow the prompts.",
    },
    {
      id: 2,
      question: "What payment methods do you accept?",
      answer: "We accept major credit cards and PayPal for online payments.",
    },
    {
      id: 3,
      question: "Can I customize flower arrangements?",
      answer:
        "Yes, you can customize your flower arrangements by contacting our customer support team.",
    },
  ];

  const [activeFaq, setActiveFaq] = useState(null);

  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" className="pt-3 md:pt-8 lg:pt-20">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
      </svg>
      
      <div className="flex flex-col lg:flex-row justify-center lg:gap-y-8 lg:gap-x-56 h-full">
        {/* Flower Market */}
        <section className="py-16 md:px-36 px-10 bg-white">
          <div className="container mx-auto">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 md:mr-8">
                <img
                  src={FlowerMarketImage}
                  alt="Flower Market"
                  className="w-full lg:w-full sm:h-full lg:h-[570px] rounded-lg shadow-md"
                />
              </div>
              <div className="md:w-1/3 lg:py-0 py-6">
                <h2 className="text-3xl font-semibold mb-6 uppercase text-[#fa7676]">
                  Introducing <span />
                  Floracare
                </h2>
                <p className="text-grey mb-6 lg:text-base md:text-sm">
                  Explore a variety of beautiful flowers in our marketplace.
                  From vibrant roses to elegant tulips, you'll find the perfect
                  blooms for any occasion.
                </p>
                <p className="text-grey mb-6 lg:text-base md:text-sm">
                  "Express Emotions with Elegance:
                  <br />
                  Your Blooms, Your Way, Anywhere in Jakarta!"
                </p>
              </div>
            </div>
            <div id="Shop" className="grid gap-8 sm:gap-4 sm:grid-cols-2 lg:grid-cols-4 mt-12">
              {flowers.map((flower) => (
                <div
                  key={flower.id}
                  className="bg-white rounded-lg shadow-lg p-4 overflow-hidden relative"
                >
                  <div className="relative">
                    <img
                      src={flower.image}
                      alt={flower.title}
                      className="w-full h-48 object-cover mb-4 rounded-lg"
                    />
                    <div className="absolute inset-0"></div>
                    <div className="absolute inset-0 flex flex-col items-center justify-center text-white bg-black opacity-0 transition-opacity hover:rounded-lg rounded-lg hover:opacity-80 p-4">
                      <h3 className="text-lg font-semibold mb-2">
                        {flower.title}
                      </h3>
                      {/* Placeholder for Rating */}
                      <div className="flex items-center">
                        <span className="text-yellow-500 mr-1">&#9733;</span>
                        <span className="text-white">{flower.rating}</span>{" "}
                      </div>
                    </div>
                  </div>
                  <h3 className="text-lg text-[#fa7676] font-semibold mb-2">
                    {flower.title}
                  </h3>
                  <p className="font-semibold text-gray-800 transition-colors">
                    {flower.location} {flower.icon}
                  </p>
                  <p className="text-grey text-[11px]">
                    {flower.description}
                  </p>
                  <Link to={`${flower.link}`} >
                    <button className="mt-4 bg-[#FCA7A7] text-white font-semibold py-2 px-4 rounded-md hover:bg-[#fa7676]">
                      Order Now
                    </button>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Featured Collections */}           
      <section id="Featured" className="bg-[#FFD6D6]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 220">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,96L34.3,106.7C68.6,117,137,139,206,122.7C274.3,107,343,53,411,53.3C480,53,549,107,617,117.3C685.7,128,754,96,823,96C891.4,96,960,128,1029,154.7C1097.1,181,1166,203,1234,202.7C1302.9,203,1371,181,1406,170.7L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
            ></path>
        </svg>
        <div className="container mx-auto py-16">
          <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-gray-800">
            Featured Collections
          </h2>
          <div className="grid gap-8 sm:grid-cols-1 lg:grid-cols-3 p-10 md:p-4">
            {collections.map((collection) => (
              <div
                key={collection.id}
                className="bg-white rounded-lg shadow-md p-0 flex flex-col justify-center items-center mt-2 overflow-hidden relative transform transition-transform duration-300 hover:scale-105"
                style={{ margin: 0 }} // Remove margin
              >
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-48 object-cover mb-0 rounded-lg"
                  style={{ margin: 0, objectFit: "cover" }} // Add objectFit property
                />
                <h3 className="text-lg font-semibold mb-2 py-2 text-[#fa7676]">
                  {collection.title}
                </h3>
                <h4 className="text-base text-grey font-medium mb-2">
                  {collection.description}
                </h4>
              </div>
            ))}
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250">
        <path
          fill="#fff"
          fill-opacity="1"
          d="M0,128L48,117.3C96,107,192,85,288,80C384,75,480,85,576,112C672,139,768,181,864,181.3C960,181,1056,139,1152,122.7C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
        ></path>
        </svg>
      </section>      

      {/* Services or Products Overview */}
      <section id="Service" className="bg-white py-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-semibold text-center mb-8 uppercase text-gray-800">
            Services or Products Overview
          </h2>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 py-4 mx-6">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-lg p-4 flex flex-col items-center sm:text-sm "
              >
                <span className="text-2xl mb-2">{service.icon}</span>
                <h3 className=" text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-grey text-center">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs with Accordion */}
      <section id="FAQ" className="bg-[#FFD6D6]">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#fff"
              fill-opacity="1"
              d="M0,224L48,213.3C96,203,192,181,288,154.7C384,128,480,96,576,117.3C672,139,768,213,864,208C960,203,1056,117,1152,101.3C1248,85,1344,139,1392,165.3L1440,192L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
            ></path>
        </svg>
        <div className="container mx-auto px-20 pb-20 pt-0 sm:pt-5">
          <h2 className="text-3xl font-extrabold text-center mb-8 uppercase text-neutral">
            Frequently Asked Questions
          </h2>
          <div className="grid gap-4">
            {faqs.map((faq) => (
              <div
                key={faq.id}
                className=" rounded-lg shadow-md p-4 bg-white"
              >
                <button
                  className="flex items-center w-full text-left text-lg font-semibold mb-2 focus:outline-none text-neutral"
                  onClick={() =>
                    setActiveFaq(faq.id === activeFaq ? null : faq.id)
                  }
                >
                  <span>{faq.question}</span>
                  <svg
                    className={`ml-auto transform transition-transform ${
                      faq.id === activeFaq ? "rotate-0" : "rotate-180"
                    }`}
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M2.66669 4.66669L8.00002 10L13.3334 4.66669"
                      stroke="#374151"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
                {faq.id === activeFaq && (
                  <p className="text-gr">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default LandingPage;
