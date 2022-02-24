import React from "react";
import "./withLayout.css";
import Navbar from "../organisms/NavBar";
import Footer from "../organisms/Footer";

function withLayout(WrappedComponent) {
  function WrapperComponent({ ...props }) {
    return (
      <>
        <Navbar />
        <main className="flex flex-wrap justify-center items-center">
          <WrappedComponent />
        </main>
        <Footer />
      </>
    );
  }

  return WrapperComponent;
}

export default withLayout;
