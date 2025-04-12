import React from "react";

const Footer = () => {
  const productList = ["Charity", "ERC20 Token", "Donation"];
  const contactList = [
    "support@Donations.com",
    "Charity@example.com",
  ];
  const usefullLink = ["Home", "About Us"];
  return (
    <footer className="text-center text-white backgroundMain lg:text-left">
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="">
            <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
            Charity
            </h6>
            <p>
            Charity is the act of giving help to those in need of it. It is a humanitarian act. 
            It involves giving money, goods or time and effort to those who need it. It is done without expecting something in return. 
            </p>
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Products
            </h6>
            {productList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div className="">
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Useful links
            </h6>
            {usefullLink.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
          <div>
            <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
              Contact
            </h6>
            {contactList.map((el, i) => (
              <p className="mb-4" key={i + 1}>
                <a href="#!">{el}</a>
              </p>
            ))}
          </div>
        </div>
      </div>
      <div className="backgroundMain p-6 text-center">
        <span>© 2025 Copyright:</span>
        <a className="font-semibold " href="https://tailwind-elements.com/">
        Charity Donation
        </a>
      </div>
    </footer>
  );
};

export default Footer;
