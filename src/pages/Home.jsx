import Benefits from "../Components/Benefits";
import Banner from "../Components/BannerSection";
import CategoryFilter from "../Components/FilterProducts";
import IconSection from "../Components/IconSection";
import FeatureAuthor from "../Components/FeatureAuthor";
import SpritualBook from "../Components/SpritualBook";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
// import {Oval} from "react-loader-spinner"

const Home = () => {
  const { data, setData } = useContext(ProductContext);
  return (
    <div>
      {/* <Oval/> */}
      <Banner />
      <Benefits />
      <SpritualBook />
      <CategoryFilter data={data} />
      <IconSection />
      <FeatureAuthor />
    </div>
  );
};

export default Home;
