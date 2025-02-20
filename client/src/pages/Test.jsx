import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

const TestPage = lazy(() => import("./test/TestPage"));

const Test = () => {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route path="/route/*" element={null} />
        <Route path="/*" element={<TestPage />} />
      </Routes>
    </Suspense>
  );
};

export default Test;
