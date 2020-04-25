import React from "react";
import VideoSection from "./../components/VideoSection";

function SardinePage(props) {
  return (
    <VideoSection
      color="light"
      size="normal"
      backgroundImage=""
      backgroundImageOpacity={0.2}
      title="La Sardine"
      subtitle="Une pour toutes, toutes pour une"
      embedUrl="https://www.youtube.com/embed/dtmk72Cp9To"
    ></VideoSection>
  );
}

export default SardinePage;
