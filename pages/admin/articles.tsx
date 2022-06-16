import React, { useEffect, useState } from "react";
import { collection, doc, getDoc, getDocs, where } from "firebase/firestore";
import { db } from "../../firebase";
import axios from "axios";
import { url_api } from "../../constant";
import Dropdown from "../../components/Dropdown";

const Articles = () => {
  const [articles, setArticles] = useState([]);
  const getData = async () => {
    axios
      .get(url_api + "articles")
      .then(async (res) => {
        const response = [];
        for (let index = 0; index < res.data?.result.length; index++) {
          const snap = await getDoc(
            doc(db, "articles", res.data?.result[index].content)
          );
          const data = snap.data();
          response.push({
            ...res.data?.result[index],
            content: data?.content,
          });
        }
        setArticles(response);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {console.log(articles)}
      {articles.map((article, index) => (
        <Dropdown
          content={article?.content}
          title={
            <div
              key={index}
              className="pb-4 m-3 mr-1 text-left border border-gray-300 rounded-md cursor-pointer hover:bg-gray-50"
            >
              <a className="">
                {/* <!-- Badge --> */}
                <p className="px-4 py-1 text-sm font-bold text-white rounded-tl-lg bg-sky-500 w-fit rounded-br-xl">
                  Nouveau
                </p>

                <div className="grid grid-cols-6">
                  {/* <!-- Profile Picture --> */}
                  <div className="w-full col-span-2 bg-gray-100">
                    <img
                      src={article?.image}
                      className="object-cover object-center h-full m-auto max-h-32 rounded-xl"
                    />
                  </div>

                  {/* <!-- Description --> */}
                  <div className="flex col-span-5 ml-4 md:col-span-4">
                    <div>
                      <p className="flex flex-wrap text-xs font-bold text-sky-500">
                        {article?.tags?.map((tag, i) => (
                          <span
                            key={i}
                            className="block px-3 py-1 m-1 border rounded-md"
                          >
                            {tag?.name}
                          </span>
                        ))}
                      </p>

                      <p className="font-bold text-gray-600">
                        {" "}
                        [Auteur] {article?.auteur}
                      </p>
                      <p className="text-2xl font-bold text-amber-500">
                        {" "}
                        {article?.title}
                      </p>

                      <p className="text-gray-400"> {article?.description} </p>
                    </div>
                    {/* <!-- Price --> */}
                    <div className="flex col-start-2 ml-4 md:col-start-auto md:ml-0 md:justify-end">
                      <p className="px-3 py-1 text-sm font-bold rounded-lg text-sky-500 bg-sky-100 w-fit h-fit">
                        Gratuit
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          }
        />
      ))}
    </div>
  );
};

export default Articles;
