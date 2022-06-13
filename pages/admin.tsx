import React, { useState } from "react";
import dynamic from "next/dynamic";
const Editor = dynamic(() => import("../components/WYSIWYGeditor"), {
  ssr: false,
});
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db, storage, useAuth } from "../firebase";
import { getDownloadURL, ref, uploadBytes } from "firebase/storage";
import axios from "axios";
import { url_api } from "../constant";
import Multiselect from "multiselect-react-dropdown";
import Hero from "../components/hero";
import Header from "../components/Header";

export async function getStaticProps() {
  let response = await axios.get(url_api + "tags");
  let tags = response.data;

  // Call an external API endpoint to get posts
  const querySnapshot = await getDocs(collection(db, "articles"));
  let content = "";

  querySnapshot.forEach((doc) => {
    const data = doc.data();
    content = data.content;
  });

  tags = tags?.result?.map((el) => {
    return { name: el.name, id: el._id };
  });

  return {
    props: {
      content,
      tags,
    },
  };
}

const AdminPage = ({ content, tags }) => {
  const [article, setArticle] = useState(content ?? "");
  const [title, setTitle] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [selectedTags, setSelectedTags] = useState([]);
  const [date, setDate] = useState("");
  const [auteur, setAuteur] = useState("");

  const currentUser = useAuth();
  const handleSubmit = async () => {
    try {
      const docRef = await addDoc(collection(db, "articles"), {
        content: article,
        title,
        image,
      });
      const tags = selectedTags?.map((el) => el?.id);
      console.log("Document written with ID: ", docRef.id);
      const data = {
        title,
        description,
        isPublished: false,
        image,
        userId: currentUser?.uid ?? "",
        tags,
        content: docRef.id,
        date,
        auteur,
      };
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  };

  const uploadImageToStore = async (file) => {
    if (file) {
      const storageRef = ref(
        storage,
        "articles/couverture/" + file.name + Math.random() * 10
      );
      const downloadURL = await uploadBytes(storageRef, file).then(
        async (response) => {
          return await getDownloadURL(response.ref).then(
            async (downloadURL) => downloadURL
          );
        }
      );
      setImage(downloadURL);
    }
  };

  const onSelectedValue = (selectedList) => {
    setSelectedTags(selectedList);
  };

  const onRemoveValue = (selectedList) => {
    setSelectedTags(selectedList);
  };

  return (
    <div>
      <Hero />
      <Header />

      <div className="w-full p-10 m-auto max-w-7xl">
        <form className="">
          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-neutral-800">
              Titre de l'article *
            </span>
            <input
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="block w-full px-4 py-3 mt-1 text-sm font-normal bg-white border rounded-full border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-11"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-neutral-800">Resumé</span>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="block w-full h-20 p-3 mt-1 text-sm bg-white border rounded-xl border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50"
            ></textarea>
            <p className="mt-1 text-sm text-neutral-500">
              Bref description de l'article
            </p>
          </label>

          <Multiselect
            displayValue="name"
            options={tags}
            onSelect={onSelectedValue}
            onRemove={onRemoveValue}
            selectedValues={selectedTags}
          />

          <div className="block md:col-span-2">
            <span className="text-sm font-medium text-neutral-800">
              L'image de couverture *
            </span>
            <div className="flex justify-center px-6 pt-5 pb-6 mt-1 border-2 border-dashed rounded-md border-neutral-300">
              <div className="space-y-1 text-center">
                {image && image != "" ? (
                  <img src={image} alt="" className="h-20" />
                ) : (
                  <svg
                    className="w-12 h-12 mx-auto text-neutral-400"
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
                )}
                <div className="flex flex-col text-sm text-gray-800 sm:flex-row">
                  <label className="relative font-medium rounded-md cursor-pointer text-primary-6000 hover:text-primary-800 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-500">
                    <span className="text-red-600">
                      Téléchargez l'image de couverture
                    </span>
                    <input
                      name="file-upload"
                      onChange={(e) => uploadImageToStore(e.target.files[0])}
                      type="file"
                      className="sr-only"
                    />
                  </label>
                  {/* <p className="pl-1">glisser deposer</p> */}
                </div>
                <p className="text-xs text-neutral-500">
                  PNG, JPG, GIF MOINS DE 5MB
                </p>
              </div>
            </div>
          </div>

          <Editor
            onChagedValue={(value) => setArticle(value)}
            value={article}
            label="Corps de l'article *"
          />

          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-neutral-800">
              Auteur *
            </span>
            <input
              type="text"
              value={auteur}
              onChange={(e) => setAuteur(e.target.value)}
              className="block w-full px-4 py-3 mt-1 text-sm font-normal bg-white border rounded-full border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-11"
            />
          </label>

          <label className="block md:col-span-2">
            <span className="text-sm font-medium text-neutral-800">Date *</span>
            <input
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              className="block w-full px-4 py-3 mt-1 text-sm font-normal bg-white border rounded-full border-slate-300 focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 h-11"
            />
          </label>

          <div className="my-5">
            <button
              onClick={() => handleSubmit()}
              type="button"
              className="focus:outline-none block w-full text-white text-sm py-2.5 px-5 rounded-md bg-gradient-to-r from-pink-400 to-pink-600 transform hover:scale-[1.01]"
            >
              Enrégistrer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AdminPage;
