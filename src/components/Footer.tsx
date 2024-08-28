import { useState, useEffect } from "react";
import logoSite from "../assets/images/logo/logo-site.png";


const Footer = () => {
  return (
    <>
      <footer className="bg-[#003366] text-white px-10 md:p-0 md:py-20">
        <div className="container text-center mx-auto">
          <div className="p-4 md:p-0 flex flex-col justify-center items-center md:flex md:flex-row">
            <div className="md:basis-1/3 justify-items-center mb-6">
                <img src={logoSite} className="h-20 md:ml-20"/>
            </div>
            <div className="md:basis-1/3 md:text-left font-title mb-6">
                <div className="text-xl font-bold">Reach Us</div>
                <div className="pt-6 flex flex-row">
                    <div>
                    <img className="mr-6" src="/src/assets/images/icons/bxs_phone-call.png" alt="" style={{height:20}}/>
                    </div><div>+254 768 794629</div>
                </div>
                <div className="pt-2 flex flex-row">
                    <div>
                    <img className="mr-6" src="/src/assets/images/icons/ic_sharp-email.png" alt="" style={{height:20}}/>
                    </div><div>info@pentonenergy.com</div>
                </div>
                <div className="pt-2 flex flex-row">
                    <div>
                    <img className="mr-6" src="/src/assets/images/icons/carbon_location-filled.png" alt="" style={{height:20}}/>
                    </div><div>Ruiru, Kenya</div>
                </div>
            </div>
            <div className="md:basis-1/3 text-left">
              <div className="text-xl font-bold font-title mb-6">Quick Links</div>
                  <a href="#" className="block">Home</a>
                  <a href="#" className="block">Services</a>
                  <a href="#" className="block">Contact</a>
                  <a href="#" className="block">Projects</a>
              </div>
          </div>
        </div>


      </footer>

    </>
  );
};

export default Footer;
