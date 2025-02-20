import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "Pages/Home";
import About from "Pages/About";
import Product from "Pages/Product";
import ViewPage from "Pages/ViewPage";
import { useDispatch } from "react-redux";
import { setAppleDevice, setAndroidDevice } from "Features/sliceDevice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const ua = navigator.userAgent;

    if (/iPad|iPhone|Macintosh/i.test(ua) && "ontouchend" in document) {
      dispatch(setAppleDevice());
    }
    if (/Android/i.test(ua)) {
      dispatch(setAndroidDevice());
    }
  }, []);

  return (
    <Routes>
      <Route path="/about/*" element={<About />} />
      <Route path="/product/*" element={<Product />} />
      <Route path="/viewPage/*" element={<ViewPage />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

export default App;
