import React from "react";

const Video = () => {
  return (
    <div className="top">
      <header id="heading"><h1>Video Analytics</h1></header>
      <div className="video">
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dvyvp670PAQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
    );
};

export default Video;
