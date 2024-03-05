import React from "react";
import CommonLayout from "../common/CommonLayout";
import About from "../components/About";
import Subscribe from "../components/Subscribe";

const AboutPage = ({ loggedUser,scrollToTop }) => {
  scrollToTop()
  return (
    <CommonLayout loggedUser={loggedUser}>
      <About />
      <Subscribe />
    </CommonLayout>
  );
};

export default AboutPage;
