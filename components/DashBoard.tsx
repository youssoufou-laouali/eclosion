import React from "react";

const DashBoard = () => {
  return (
    <div className="">
      <div className="container mx-auto my-10">
        <div className="relative flex flex-col items-center mx-2 rounded-lg md:flex-row md:shadow-xl">
          {/* <!-- Menu --> */}

          <aside className="w-64" aria-label="Sidebar">
            <div className="overflow-y-auto py-4 px-3 bg-gray-50 rounded ">
              <ul className="space-y-2">
                <li className=" ">
                  <a
                    href="#list-article"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <svg
                      className="flex-shrink-0 w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                    </svg>
                    <span className="ml-3">Nouvel article</span>
                  </a>
                </li>

                <li className=" ">
                  <a
                    href="#nouvel-article"
                    className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <svg
                      className="w-6 h-6 text-gray-500 transition duration-75 group-hover:text-gray-900"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                      <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                    </svg>
                    <span className="flex-1 ml-3 whitespace-nowrap">
                      Mes articles
                    </span>
                    <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full">
                      3
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </aside>

          <div className="grid grid-cols-2 gap-3">
            {/* <!-- Nouvel Article --> */}

            <form
              className="tab-pane fade visible active grid md:grid-cols-2 gap-6"
              id="nouvel-article"
              action="#"
              method="post"
            >
              <label className="block md:col-span-2">
                <span className="text-neutral-800 font-medium text-sm">
                  Titre de l'article *
                </span>
                <input
                  type="text"
                  className="block w-full border border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-neutral-800 font-medium text-sm">
                  Resumé
                </span>
                <textarea className="block p-3 w-full h-20 text-sm rounded-xl border border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white mt-1"></textarea>
                <p className="mt-1 text-sm text-neutral-500">
                  Bref description de l'article
                </p>
              </label>

              <label className="block">
                <span className="text-neutral-800 font-medium text-sm">
                  Tags
                </span>
                <select className=" h-11 mt-1 block w-full text-sm rounded-lg border border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white">
                  <option value="-1">– Choisir –</option>
                  <option value="ha'apai">Politique</option>
                  <option value="tongatapu">Education</option>
                  <option value="vava'u">Santé</option>
                  <option value="vava'u">Justice</option>
                </select>
              </label>

              <div className="block md:col-span-2">
                <span className="text-neutral-800 font-medium text-sm">
                  L'image de couverture *
                </span>
                <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-neutral-300 border-dashed rounded-md">
                  <div className="space-y-1 text-center">
                    <svg
                      className="mx-auto h-12 w-12 text-neutral-400"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                    <div className="flex flex-col sm:flex-row text-sm text-gray-800">
                      <label className="relative cursor-pointer rounded-md font-medium text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                        <span className="text-red-600">
                          Téléchargez l'image de couverture
                        </span>
                        <input
                          name="file-upload"
                          type="file"
                          className="sr-only"
                        />
                      </label>
                      <p className="pl-1">glisser deposer</p>
                    </div>
                    <p className="text-xs text-neutral-500">
                      PNG, JPG, GIF MOINS DE 5MB
                    </p>
                  </div>
                </div>
              </div>

              <label className="block md:col-span-2">
                <span className="text-neutral-800 font-medium text-sm">
                  Corps de l'article *
                </span>
                <textarea
                  className="block p-3 w-full h-52 text-sm rounded-xl border border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white 
                          mt-1"
                ></textarea>
              </label>

              <label className="block md:col-span-2">
                <span className="text-neutral-800 font-medium text-sm">
                  Auteur *
                </span>
                <input
                  type="text"
                  className="block w-full border border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                />
              </label>

              <label className="block md:col-span-2">
                <span className="text-neutral-800 font-medium text-sm">
                  Date *
                </span>
                <input
                  type="date"
                  className="block w-full border border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white rounded-full text-sm font-normal h-11 px-4 py-3 mt-1"
                />
              </label>

              <button
                className="bg-red-600 shadow-lg shadow-blue-500/50 text-gray-900 relative h-auto border border-slate-300 inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  
                      disabled:bg-opacity-70 text-neutral-50 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000"
                type="submit"
              >
                Soumettre le message
              </button>
            </form>

            {/* <!-- Liste des articles --> */}

            <div className="flex-grow" id="list-article">
              <div className="flex flex-col space-y-8">
                <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                  <div className="py-2 align-middle inline-block min-w-full px-1 sm:px-6 lg:px-8">
                    <div className="shadow overflow-hidden sm:rounded-lg">
                      <table className="min-w-full divide-y divide-neutral-200">
                        <thead className="bg-neutral-50">
                          <tr className="text-left text-xs font-medium text-neutral-500 uppercase tracking-wider">
                            <th scope="col" className="px-6 py-3">
                              Article
                            </th>
                            <th scope="col" className="px-6 py-3">
                              Statut
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                              <span className="sr-only">Edit</span>
                            </th>
                          </tr>
                        </thead>

                        <tbody className="bg-white divide-y divide-neutral-200">
                          <tr>
                            <td className="px-6 py-4">
                              <div className="flex items-center w-96 lg:w-auto max-w-md overflow-hidden">
                                <div className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14">
                                  <img src="" />
                                </div>
                                <div className="ml-4 flex-grow">
                                  <h2 className="inline-flex line-clamp-2 text-sm font-semibold">
                                    La France se trompe
                                  </h2>
                                  :
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300">
                              <a
                                href="/#"
                                className="text-primary-800 hover:text-primary-900"
                              >
                                Edit
                              </a>{" "}
                              |{" "}
                              <a
                                href="/#"
                                className="text-rose-600 hover:text-rose-900"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>

                          <tr>
                            <td className="px-6 py-4">
                              <div className="flex items-center w-96 lg:w-auto max-w-md overflow-hidden">
                                <div className="flex-shrink-0 h-12 w-12 rounded-lg overflow-hidden lg:h-14 lg:w-14">
                                  <img src="" />
                                </div>
                                <div className="ml-4 flex-grow">
                                  <h2 className="inline-flex line-clamp-2 text-sm font-semibold">
                                    Le duo présidentiel
                                  </h2>
                                  :
                                </div>
                              </div>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap">
                              <span className="px-2 inline-flex text-xs leading-5 font-medium rounded-full bg-teal-100 text-teal-900 lg:text-sm">
                                Active
                              </span>
                            </td>
                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium text-neutral-300">
                              <a
                                href="/#"
                                className="text-primary-800 hover:text-primary-900"
                              >
                                Edit
                              </a>{" "}
                              |{" "}
                              <a
                                href="/#"
                                className="text-rose-600 hover:text-rose-900"
                              >
                                Delete
                              </a>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <nav className="inline-flex space-x-1 text-base font-medium ">
                  <span className="inline-flex w-11 h-11 items-center justify-center rounded-full text-red-800 focus:outline-none">
                    1
                  </span>
                  <a
                    className="inline-flex w-11 h-11 items-center justify-center rounded-full hover:bg-red-600 hover:text-white border border-neutral-200 text-red-800 focus:outline-none shadow-lg"
                    href="#"
                  >
                    2
                  </a>
                  <a
                    className="inline-flex w-11 h-11 items-center justify-center rounded-full hover:bg-red-600 hover:text-white border border-neutral-200 text-red-800 focus:outline-none shadow-lg"
                    href="#"
                  >
                    3
                  </a>
                  <a
                    className="inline-flex w-11 h-11 items-center justify-center rounded-full hover:bg-red-600 hover:text-white border border-neutral-200 text-red-800 focus:outline-none shadow-lg"
                    href="#"
                  >
                    4
                  </a>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
