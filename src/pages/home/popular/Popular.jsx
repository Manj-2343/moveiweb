import { useState } from "react";
import ContentWrapper from "../../../components/contentWrapper/ContentWrapper";
import SwitchTab from "../../../components/switchTab/SwitchTab";
import useFetch from "../../../../src/hooks/useFetch";
import Carousel from "../../../components/carousel/Carousel";

const Popular = () => {
  const [endPoint, setEndPoint] = useState("movie");
  const url = `/${endPoint}/popular`;
  const { data, loading } = useFetch(url);

  const onTabChange = (tab) => {
    setEndPoint(tab === "Movies" ? "movie" : "tv");
  };

  return (
    <div className="carouselSection">
      <ContentWrapper>
        <span className="carouselTitle">What&rsquo;s Popular</span>
        <SwitchTab data={["Movies", "Tv Shows"]} onTabChange={onTabChange} />
      </ContentWrapper>
      {data && (
        <Carousel data={data?.results} loading={loading} endPoint={endPoint} />
      )}
    </div>
  );
};

export default Popular;
