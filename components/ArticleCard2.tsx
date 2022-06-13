import React from "react";

const ArticleCard2 = () => {
  return (
    <div className="shadow-md">
      <img
        src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80"
        alt=""
      />
      <div className="px-4">
        <h1 className="my-2 mt-3 text-2xl font-bold text-gray-800">
          long established
        </h1>
        <p className="mb-2 text-gray-700">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. The point of
          using Lorem Ipsum is that....
        </p>
        <div className="flex justify-between mt-4">
          <span className="text-sm font-thin">May 20th 2020</span>
          <span className="mb-2 font-bold text-gray-800">Read more</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard2;
