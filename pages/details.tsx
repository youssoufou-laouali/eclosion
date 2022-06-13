import React, { useEffect, useState } from "react";
import { collection, doc, getDocs } from "firebase/firestore";
import { db } from "../firebase";

interface ArticleSchema {
  id: string;
  content?: string;
  image?: string;
  title?: string;
}
const Details = () => {
  const [data, setData] = useState<ArticleSchema>();
  const getData = async () => {
    const querySnapshot = await getDocs(collection(db, "articles"));

    querySnapshot.forEach((doc) => {
      console.log(`${doc.id} => ${doc.data()}`);
      console.log(doc.data());
      const article = doc.data();
      setData({ ...article, id: doc.id });
    });
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div
        className="p-5"
        dangerouslySetInnerHTML={{ __html: data?.content ?? "" }}
      ></div>
    </div>
  );
};

export default Details;
