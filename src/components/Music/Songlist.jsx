import React from "react";
import "./songlist.css";
import { DisplayList } from "./DisplayList";
import { songsdata } from "./data";

export const Songlist = () => {
  return (
    <div className="songList">
      <h1 className="main-heading">My Favourite</h1>
      <>
        {songsdata.map((data, index) => {
          return (
            <div key={index}>
              <h2 className="sub-heading">{data.title} </h2>
              <DisplayList listItems={data.list} />
            </div>
          );
        })}
      </>
    </div>
  );
};
