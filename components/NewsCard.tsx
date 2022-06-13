import React from "react";
import Image from "next/image";

const NewsCard = () => {
  return (
    <div className="">
      <section className="pt-5 pb-10 lg:pb-20">
        <div className="px-3">
          <div className="flex flex-wrap justify-center ">
            <div className="w-full px-4">
              <div className="mx-auto text-center lg:mb-5 ">
                <span className="block w-32 mb-5 text-lg font-semibold text-center text-red-700 bg-red-100 border-2 border-red-500 rounded lg:mb-0 animate-pulse">
                  Nouveautés
                </span>
                <h2 className="mb-4 text-3xl font-bold sm:text-4xl md:text-5xl text-dark">
                  Les articles les plus recents
                </h2>
                <p className="text-base text-body-color">
                  Lisez nos recents articles, et restez informés à temps.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap mt-5">
            {/* List */}
            {[0, 1, 2, 3, 4, 5].map((article, index) => (
              <div className="w-full px-4 md:w-1/2 lg:w-1/3" key={index}>
                <div className="m-4 mx-auto ">
                  <div className="mb-3 overflow-hidden rounded">
                    <Image
                      src="/bi.jpg"
                      alt="image"
                      className="w-full" width="300" height="150"
                    />
                  </div>
                  <div>
                    <span className="inline-block px-4 py-1 mb-3 text-xs font-semibold leading-loose text-center text-white bg-red-800 rounded">
                      Politique
                    </span> <br />
                    <span className="text-xs mr-1">Par Amma Moussa</span> <span>*</span> <span></span>
                    <i className="text-xs" >16 novembre 2021</i>
                    <h3 className="flex flex-row ">
                    <span className="mt-1 mr-1">  
                          <Image
                          src="/favEclosion.svg"
                          alt="image"
                          className="w-full mr-2" width="45" height="45"
                        />
                       </span> 
                      <a
                        href="javascript:void(0)"
                        className="inline-block mb-2 text-xl font-semibold text-gray-600 line-clamp-2 sm:text-2xl lg:text-xl xl:text-2xl hover:text-red-900"
                      >
                        
                        Le duo présidentiel Bazoum-Issoufou, peut-il sauver le
                        Niger ?
                      </a>
                    </h3>
                    <p className="text-base text-body-color line-clamp-3">
                      est un secret de polichinelle, le Niger traverse l'un des
                      pires moments de sa jeune histoire. Des crises secouent le
                      quotidien des citoyens dans ce qui s'apparente bien à une
                      indifférence collective. Crise scolaire, crise
                      sécuritaire, crise alimentaire, crise sanitaire, crise
                      identitaire... bref, nous sommes en proie aux crises. Nous
                      venons d'enterrer une vingtaine de nos enfants, morts dans
                      l'incendie de leurs classes en paillotes à Maradi. Comme
                      si cela ne suffisait pas, voilà que nous découvrons des
                      jeunes écoliers qui n'ont trouvé mieux que de tourner et
                      diffuser des vidéos à caractère pornographique. Où va
                      notre société ?
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsCard;
