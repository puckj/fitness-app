import { View } from "react-native";
import React from "react";
import {
  ParallaxImage,
  ParallaxImageProperties,
} from "react-native-snap-carousel";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const ImageCard = (
  { item, index }: any,
  parallaxProps: React.JSX.IntrinsicAttributes &
    React.JSX.IntrinsicClassAttributes<ParallaxImage> &
    Readonly<ParallaxImageProperties>
) => {
  return (
    <View style={{ width: wp(100) - 70, height: hp(25) }}>
      <ParallaxImage
        source={item}
        containerStyle={{ borderRadius: 30, flex: 1 }}
        style={{ resizeMode: "contain" }}
        parallaxFactor={1}
        {...parallaxProps}
      />
    </View>
  );
};

export default ImageCard;
