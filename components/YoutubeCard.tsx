import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  youtube_url,
  channelId,
  maxResults,
  order,
  part,
  key,
  watch_url,
} from "../constant";
import VideoCard from "./VideoCard";

export interface VideoDataInterface {
  id: string;
  title: string;
  description: string;
  date: Date;
  image: string;
}
const YoutubeCard = () => {
  const [data, setData] = useState<VideoDataInterface[]>([]);
  const getVideos = async () => {
    const response = await axios.get(
      `${youtube_url}?key=${key}&channelId=${channelId}&maxResults=${maxResults}&order=${order}&part=${part}`
    );

    const data = response?.data?.items?.map((el) => {
      return {
        id: el?.id?.videoId,
        title: el?.snippet?.title,
        description: el?.snippet?.description,
        image: el?.snippet?.thumbnails?.high?.url,
        date: new Date(el?.snippet?.publishTime),
      };
    });
    setData(data);
    localStorage.setItem("videos", JSON.stringify(data));
    const random = Math.floor(Math.random() * 4);
    setVideoId(data[random]?.id);
  };

  async function getVideosTolocalStorage() {
    let data: VideoDataInterface[] = JSON.parse(localStorage.getItem("videos"));
    console.log(data[0]);
    data = data.map((el) => {
      el.date = new Date(el.date);
      return el;
    });
    setData(data);
    const random = Math.floor(Math.random() * 4);
    setVideoId(data[random]?.id);
  }

  const [videoId, setVideoId] = useState("");
  useEffect(() => {
    getVideos();
    // getVideosTolocalStorage();
  }, []);

  return (
    <div className="h-full border-t">
      <h2 className="m-5 text-2xl font-bold text-center text-gray-600">
        Les derniers reportages sur youtube
      </h2>
      <div className="flex flex-col justify-center h-full lg:flex-row">
        <div className="w-full max-w-xl mx-auto my-3 h-96 lg:mx-0 lg:mr-5">
          <iframe
            src={`${watch_url}/${videoId}`}
            width="100%"
            height="100%"
            title="Video Player"
            frameBorder="0"
          ></iframe>
        </div>
        <div className="w-full flex flex-row justify-center items-center lg:justify-start  flex-wrap lg:flex-nowrap  lg:flex-col lg:max-h-[750px] scrollbar scrollbar-thumb-red-100 scrollbar-track-white overflow-auto lg:max-w-xs">
          {data?.map((el) => (
            <div
              key={el.id}
              className="xs:w-full md:w-1/4 lg:w-full"
              onClick={() => setVideoId(el.id)}
            >
              <VideoCard
                date={el.date}
                description={el.description}
                id={el.id}
                image={el.image}
                title={el.title}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default YoutubeCard;
