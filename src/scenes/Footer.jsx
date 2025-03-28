import { FooterSocialMediaIcons } from "../components/FooterSocialMediaIcons";


const Footer = () => {

  const currentYear = new Date().getFullYear();
  return (
    <footer className="h-64 bg-white pt-10 max-w-[1440px]">
      <div className="w-10/12 mx-auto">
        <FooterSocialMediaIcons/>
        <div className="md:flex justify-center md:justify-between text-center  ">
          <p className="font-playfair font-semibold text-2xl text-black">
            Karthi
          </p>
          <p className="font-playfair text-md  md:text-2xl text-black">
            ©{currentYear} Karthi. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
