import React from "react";
import { VideoDataInterface } from "./YoutubeCard";

const VideoCard = ({ date, description, image, title }: VideoDataInterface) => {
  return (
    <div className="mx-3 cursor-pointer">
      <div>
        <img src={image} className="h-full max-h-20 lg:max-h-36" alt="" />
      </div>
      <div className="mt-1 mb-4">
        <h4 className="hidden text-sm font-semibold lg:block">{title}</h4>
        <span className="hidden text-xs lg:line-clamp-1 lg:block ">
          {description}
        </span>
        <p className="mt-1 text-xs font-hairline text-grey-darker">
          {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}{" "}
          &middot; {`${date.getHours()}:${date.getMinutes()}`}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;
