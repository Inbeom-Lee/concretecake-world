import React, { useState, useEffect } from "react";
import PreloaderScreen from "Components/PreloaderScreen";
import cake1 from "Assets/images/cake_BerryWhisper.png";
import cake2 from "Assets/images/cake_ForestSpell.png";
import cake3 from "Assets/images/cake_MagicHoney.png";
import logoPurpleCake from "Assets/logos/purpleConcreteCake.svg";
import logoHeroCake from "Assets/logos/logo_HeroCake.svg";
import logoConcrete from "Assets/logos/logo_Concrete.svg";
import imgLogo from "Assets/logos/logo_CakeText3D.svg";
import logoWordMark from "Assets/logos/logo_Wordmark.svg";
import pngOverall from "Assets/images/image_ProductOverall.png";
import pngPine from "Assets/images/image_ProductPine.png";
import pngBerry from "Assets/images/image_ProductBerry.png";
import pngHoney from "Assets/images/image_ProductHoney.png";

import {
  image_Road2,
  image_CakePine,
  image_CakeBerry,
  image_CakeHoney,
  button_Type2,
  image_ProductInstructionEn,
  image_ProductInstructionKr,
  image_Instruction1En,
  image_Instruction2En,
  image_Instruction3En,
  image_Instruction4En,
  image_Instruction5En,
  image_Instruction6En,
  image_Instruction7En,
  image_Instruction1Kr,
  image_Instruction2Kr,
  image_Instruction3Kr,
  image_Instruction4Kr,
  image_Instruction5Kr,
  image_Instruction6Kr,
  image_Instruction7Kr,
  image_Purple1,
  image_Purple2,
  image_Purple3,
} from "Assets/images";

import {
  icon_TrollHeadFilled,
  icon_TrollBodyFilled,
  icon_TrollArmFilled,
  icon_TrollFootFilled,
  icon_TrollTailFilled,
  icon_Pine,
  icon_Berry,
  icon_Honey,
  icon_Molecule1,
  icon_Molecule2,
  icon_Molecule3,
  icon_Molecule4,
  icon_Molecule5,
  icon_ArrowRight,
} from "Assets/icons";

import {
  item_Tree1,
  item_Tree2,
  item_Tree3,
  item_Tree4,
  item_Tree5,
  item_Cloud1,
  item_Cloud2,
  item_Bush1,
  item_Bush2,
  item_Bush3,
  item_Bush4,
  item_BushBlueBerry,
  item_Road1,
  item_Road2,
  item_Pot,
  item_TrollFront,
  item_TrollBack,
  item_SpeechBubble1,
  item_SpeechBubble2,
  item_SpeechBubble3,
  item_SpeechBubble4,
  item_PineLeaf,
  item_Leaf,
  item_BlackBerry,
  item_RaspBerry,
  item_BlueBerry,
  item_BeeHive,
  item_Honey,
  item_StatusBorder,
  item_StatusBorder2,
  item_StatusBorder3,
  item_StatusBorder4,
} from "Assets/items";

// List of asset to preload (images, fonts, etc.)
const assetsToPreload = [
  pngOverall,
  pngPine,
  pngBerry,
  pngHoney,
  cake1,
  cake2,
  cake3,
  logoPurpleCake,
  logoHeroCake,
  logoConcrete,
  logoWordMark,
  imgLogo,
  image_Road2,
  image_CakePine,
  image_CakeBerry,
  image_CakeHoney,
  button_Type2,
  image_ProductInstructionEn,
  image_ProductInstructionKr,
  image_Instruction1En,
  image_Instruction2En,
  image_Instruction3En,
  image_Instruction4En,
  image_Instruction5En,
  image_Instruction6En,
  image_Instruction7En,
  image_Instruction1Kr,
  image_Instruction2Kr,
  image_Instruction3Kr,
  image_Instruction4Kr,
  image_Instruction5Kr,
  image_Instruction6Kr,
  image_Instruction7Kr,
  image_Purple1,
  image_Purple2,
  image_Purple3,
  icon_TrollHeadFilled,
  icon_TrollBodyFilled,
  icon_TrollArmFilled,
  icon_TrollFootFilled,
  icon_TrollTailFilled,
  icon_Pine,
  icon_Berry,
  icon_Honey,
  icon_Molecule1,
  icon_Molecule2,
  icon_Molecule3,
  icon_Molecule4,
  icon_Molecule5,
  icon_ArrowRight,
  item_Tree1,
  item_Tree2,
  item_Tree3,
  item_Tree4,
  item_Tree5,
  item_Cloud1,
  item_Cloud2,
  item_Bush1,
  item_Bush2,
  item_Bush3,
  item_Bush4,
  item_BushBlueBerry,
  item_Road1,
  item_Road2,
  item_Pot,
  item_TrollFront,
  item_TrollBack,
  item_SpeechBubble1,
  item_SpeechBubble2,
  item_SpeechBubble3,
  item_SpeechBubble4,
  item_PineLeaf,
  item_Leaf,
  item_BlackBerry,
  item_RaspBerry,
  item_BlueBerry,
  item_BeeHive,
  item_Honey,
  item_StatusBorder,
  item_StatusBorder2,
  item_StatusBorder3,
  item_StatusBorder4,
];

const Preloader = ({ children }) => {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  const [assetProgress, setAssetProgress] = useState(0);
  const [timeProgress, setTimeProgress] = useState(0);
  const [allAssetsLoaded, setAllAssetsLoaded] = useState(false);
  const [intervalId, setIntervalId] = useState(null);

  // Get average progress
  const getLowerOne =
    assetProgress < timeProgress ? assetProgress : timeProgress;
  const getAverage = Math.floor(getLowerOne);
  const numberLoaded = fontsLoaded
    ? getAverage
    : fontsLoaded >= 90
    ? 90
    : getAverage;

  useEffect(() => {
    if ("fonts" in document) {
      document.fonts.load("15px MaxiRound").then(() => {
        setFontsLoaded(true);
      });
    } else {
      // Fallback if Font Loading API is not supported
      setFontsLoaded(true);
    }
  }, []);

  // minimum loading time for 2 seconds
  useEffect(() => {
    // const minumumLoadingTime = 1500;
    const minumumLoadingTime = 0;
    const timeInerval = 100;
    const progressPerInterval = Math.floor(
      (100 / minumumLoadingTime) * timeInerval
    );

    const interval = setInterval(() => {
      setTimeProgress((prev) => prev + progressPerInterval);
    }, timeInerval);

    // Store the interval id in state
    setIntervalId(interval);

    return () => {
      clearInterval(interval);
    };
  }, []);

  // Preload assets
  useEffect(() => {
    let loadedAssets = 0;

    const updateProgress = () => {
      loadedAssets++;
      setAssetProgress((loadedAssets / assetsToPreload.length) * 100);
    };

    assetsToPreload.forEach((asset) => {
      const img = new Image();
      img.onload = updateProgress;
      img.onerror = updateProgress;
      img.src = asset;
    });
  }, []);

  // If all assets are loaded and minimum time is passed
  useEffect(() => {
    console.log();
    if (assetProgress >= 100 && timeProgress >= 100 && fontsLoaded) {
      setTimeout(() => {
        setAllAssetsLoaded(true);
        clearInterval(intervalId);
      }, 500);
    }
  }, [assetProgress, timeProgress, fontsLoaded]);

  // Display loading progress
  if (!allAssetsLoaded) {
    return <PreloaderScreen numberLoaded={numberLoaded} />;
  }

  // Render children after all assets are loaded
  return <>{children}</>;
};

export default Preloader;
