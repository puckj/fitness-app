import React from "react";
import Carousel from "react-native-snap-carousel";
import { carouselImages } from "../constants";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import ImageCard from "./ImageCard";

const ImageCarousel = () => {
  return (
    <Carousel
      data={carouselImages}
      loop={true}
      autoplay={true}
      renderItem={ImageCard}
      hasParallaxImages={true}
      sliderWidth={wp(100)}
      firstItem={1}
      autoplayInterval={4000}
      itemWidth={wp(100) - 70}
      slideStyle={{ display: "flex", alignItems: "center" }}
    />
  );
};

export default ImageCarousel;


