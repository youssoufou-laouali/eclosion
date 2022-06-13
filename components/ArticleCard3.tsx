import React from "react";

const ArticleCard3 = () => {
  return (
    <div className="">
      <div className="container mx-auto my-10">
        <div className="relative flex flex-col items-center mx-2 rounded-lg md:flex-row md:shadow-xl md:h-72">
          <div className="relative z-0 order-1 w-full overflow-hidden rounded-lg md:order-2 md:w-2/5 h-80 md:h-full md:rounded-none md:rounded-r-lg">
            <div
              className="absolute inset-0 object-fill object-center w-full h-full bg-red-400 bg-bottom bg-cover bg-opacity-30"
              style={{
                backgroundImage:
                  "url( https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80 )",
                backgroundBlendMode: "multiply",
              }}
            ></div>
            <div className="absolute inset-0 flex flex-col-reverse items-start justify-start h-full p-6 pb-6 md:hidden bg-gradient-to-b from-transparent via-transparent to-gray-900">
              <h4 className="w-full text-xl mb-4 leading-tight text-gray-100">
                 La France se trompe
              </h4>
              <h3 className="border-l-4 border-red-400 pl-2 w-full mb-2 text-2xl font-bold leading-tight text-white">
              Éditorial
              </h3>
            </div>
            <svg
              className="absolute inset-y-0 hidden w-24 h-full -ml-12 text-white fill-current md:block"
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
            >
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>
          </div>

          <div className="z-10 flex items-center order-2 w-full h-full -mt-6 md:order-1 md:w-3/5 md:mt-0">
            <div className="h-full p-8 mx-2 bg-white rounded-lg shadow-xl md:pr-18 md:pl-14 md:py-12 md:mx-0 md:rounded-none md:rounded-l-lg md:shadow-none">
              <h3 className="border-l-4 border-red-400 hidden mb-2 pl-2 text-2xl font-bold text-gray-700 md:block">
                Éditorial 
              </h3>
              <h4 className="hidden mb-2 text-xl text-gray-400 md:block ">
                La France se trompe
              </h4>
              <p className="text-justify text-gray-600 line-clamp-4">
                Des décennies après la colonisation, la France a réussi à
                conserver intacte sa domination sur ses anciennes (?) colonies
                es à travers des régimes qu'elle a installés ou « récupérés ».
                Le principe était simple et féroce : tout chef d'Etat africain
                qui tente de sortir du rang est éliminé d'une manière ou d'une
                autre. Ça a marché à tel point que la quasi-totalité des
                présidents d'A l'Afrique francophone qui se sont succédés des
                indépendances à nos jours, se sentent obligés non seulement de
                satisfaire les intérêts français pour se maintenir mais aussi de
                se de se mettre sous la protection de la France qui fait et
                défait les régimes à sa guise.
              </p>
              <a
                className="flex items-baseline mt-3 text-red-600 hover:text-red-900 focus:text-red-900"
                href=""
              >
                <span>Lire la suite</span>
                <span className="ml-1 text-xs">&#x279c;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard3;
