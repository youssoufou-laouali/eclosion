import React from "react";
import { logo } from "../constant";
import { SocialIcon } from "react-social-icons";

const Footer = () => {
  return (
    <div>
      <div className="">
        <footer className="pb-5 text-gray-600 bg-gradient-to-tr from-red-900 via-pink-700 to-pink-900 body-font" style={{backgroundColor: '#000000',
backgroundImage: 'linear-gradient(315deg, #000000 0%, #b82e1f 74%)'}}>
          <div className="container flex flex-col flex-wrap w-full py-24 mx-auto max-w-7xl md:items-center lg:items-start md:flex-row md:flex-nowrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left lg:w-1/2">
              <a className="flex items-center justify-center font-medium bg-pink-200 title-font md:justify-start">
                <img src={logo} alt="" />
              </a>
              <h1 className="mt-2 text-lg font-bold text-white">
                L'Eclosion, le Journal de tout le monde
              </h1>
            </div>
            <div className=" flex flex-wrap mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left lg:w-1/2">
              <div className="w-1/2 px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 font-bold tracking-widest text-white title-font text-md">
                  L'ECLOSION
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Création
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Moyens
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Orientations
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Perspectives
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-1/2 px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 font-bold tracking-widest text-white title-font text-md">
                  ABONNEMENT
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Le journal du jour
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                    S'abonner
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                     Se connecter
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Les archives
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-1/2 px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 font-bold tracking-widest text-white title-font text-md">
                  CHARTES
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Condition génerales
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Confidentialité
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                       Mentions légales
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Aides(FAQ)
                    </a>
                  </li>
                </nav>
              </div>
              <div className="w-1/2 px-4 lg:w-1/4 md:w-1/2">
                <h2 className="mb-3 font-bold tracking-widest text-white title-font text-md">
                  NOS SERVICES
                </h2>
                <nav className="mb-10 list-none">
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Partenaires
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Publicité
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Experience l'Eclosion
                    </a>
                  </li>
                  <li>
                    <a className="text-white hover:text-red-300" href="#">
                      Points de vente
                    </a>
                  </li>
                </nav>
              </div>
            </div>
          </div>

          <div className="p-7 md:p-0">
            <div className="w-full m-auto lg:flex lg:mt-3 max-w-7xl lg:justify-between">
              <div className="mb-4 lg:columns-1 md:w-96">
                <p className="mt-3 mb-1 font-bold text-white">A propos de nous</p>
                <p className="text-sm text-white">
                Hebdomadaire Nigérien d'Informations Générales 
                et d'Analyses l'Eclosion Editée par la Société "NABOLE FILMS".
                RCCM/NI/NIA/2017/A/497. NIF: 40451/P. Siège Social: Quartier Terminus Nº28 Rue NB-83
                </p>
              </div>
              <div className="mb-4 lg:mt-3">
                <h3 className="mb-4 font-bold text-white lg:mb-4">
                  {" "}
                  Suivez l'Eclosion
                </h3>
                <div className="">
                  <div className="flex items-center">
                    <div className="lg:container lg:max-w-screen-lg ">
                      <div>
                        <div className="gap-4 flex lg:flex-wrap ">
                          <a href="">
                            <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white   rounded-full hover:bg-blue-500">
                            <SocialIcon network="facebook" bgColor="#fff"  style={{ height:40, width: 40 }} />
                            </button>
                          </a>
                          <a href="">
                            <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white   rounded-full hover:bg-red-500">
                            <SocialIcon network="youtube" bgColor="#fff" style={{ height: 40, width: 40 }} />
                            </button>
                          </a>
                          <a href="">
                            <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white   rounded-full hover:bg-blue-500">
                            <SocialIcon network="twitter" bgColor="#fff" style={{ height: 40, width: 40 }} />
                            </button>
                          </a>
                          <a href="">
                            <button className="inline-flex items-center p-2 space-x-2 font-semibold text-white   rounded-full hover:bg-blue-600">
                            <SocialIcon network="linkedin" bgColor="#fff" style={{ height: 40, width: 40 }} />
                            </button>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mb-4 lg:mt-3">
                <h3 className="mb-2 font-bold text-white lg:mb-2">Contactez-nous</h3>
                <div className=" text-white">
                   Tel: +227 96 27 01 96 / 90 06 78 46 <br />
                   Email: eclosionniger@yahoo.com
                   Niamey - (Rép. du Niger)
                </div>
              </div>
            </div>
            <div>
              <div className="flex justify-center mt-10">
                <p className="text-md font-light text-white">
                  {" "}
                  Copyright &copy; 
                  {(new Date().getFullYear())} Tout droit reservés
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
