import React from "react";

const ArticleCard1 = () => {
  return (
    <div className="mt-5">
      {/* <!-- component --> */}
      <div className="items-center hidden shadow-md md:flex ">
        <div className="w-full px-5 lg:w-3/5 md:px-10">
          <h1 className="my-2 text-2xl font-bold text-gray-800">
            Avantages aux anciens présidents de la République
          </h1>
          <p className="mb-2 text-gray-700 md:mb-6 line-clamp-3">
            Notre pays est sur une pente raide et peut s'effondrer à tout
            moment. Ce n'est pas un v de mauvais augure et tout le monde le
            sait, Seulement, tout le onde n'a pas le courage ou la sincérité de
            le dire huut. De mon point de vue, seuls des changements à trois
            niveaux peuvent nous éviter le péril qui guette notre jeune Nation
            Primo, le changement et radical en plus-doit venir des autorités
            c'est-à-dire doit concerner la gouvernance du pays.
          </p>
          <div className="flex justify-between mb-2">
            <span className="text-sm font-thin">11 janvier 2022</span>
            <span className="hidden mb-2 font-bold text-gray-800 sm:block">
              Voir plus
            </span>
          </div>
        </div>
        <div className="w-full ">
          <img
            className="object-cover w-full max-h-72"
            src="https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            alt=""
          />
        </div>
      </div>

      {/* <!-- sm --> */}
      <div
        className="w-full h-64 mt-5 bg-gray-100 md:hidden"
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/3738673/pexels-photo-3738673.jpeg?auto=compress&cs=tinysrgb&h=350')",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-row items-end w-full h-full ">
          <div className="flex flex-col w-full px-3 pt-10 pb-3 text-gray-200 bg-gradient-to-t from-black">
            <h3 className="text-base font-bold leading-5 uppercase">
              Avantages aux anciens présidents de la République
            </h3>
            <div className="inline-flex items-center">
              <span className="my-1 mr-1 text-xs capitalize font-base line-clamp-2">
                Notre pays est sur une pente raide et peut s'effondrer à tout
                moment. Ce n'est pas un v de mauvais augure et tout le monde le
                sait, Seulement, tout le onde n'a pas le courage ou la sincérité
                de le dire huut. De mon point de vue, seuls des changements à
                trois niveaux peuvent nous éviter le péril qui guette notre
                jeune Nation Primo, le changement et radical en plus-doit venir
                des autorités c'est-à-dire doit concerner la gouvernance du
                pays.
              </span>
              <svg
                className="w-4 text-blue-600 stroke-current stroke-1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clip-rule="evenodd"
                />
              </svg>
            </div>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row">
                <div className="inline-flex items-center w-max">
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                    />
                  </svg>
                  <span className="ml-1 text-xs antialiased">0</span>
                </div>
                <div className="inline-flex items-center ml-4 w-max">
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                  <span className="ml-1 text-xs antialiased">1</span>
                </div>
                <div className="inline-flex items-center ml-4 w-max">
                  <svg
                    className="w-4"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span className="ml-1 text-xs antialiased">
                    il y'a 1 heure
                  </span>
                </div>
              </div>
              <div className="w-max">
                <svg
                  className="w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard1;
