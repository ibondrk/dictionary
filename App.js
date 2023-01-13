import React, { useState } from "react";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

// import { gStyle } from "./styles/style";

import MainStack from './navigate'

const fonts = () =>
  Font.loadAsync({
    "Fixel-bold": require("./assets/fonts/MacPawFixelText-Bold.otf"),
    "Fixel-medium": require("./assets/fonts/MacPawFixelText-Medium.otf"),
    "Fixel-regular": require("./assets/fonts/MacPawFixelText-Regular.otf"),
  });

export default function App() {
  const [font, setFont] = useState(false);

  if (font) {
    return <MainStack />;
  }

  return (
    <AppLoading
      startAsync={fonts}
      onFinish={setFont(true)}
      onError={console.warn}
    />
  );
}
