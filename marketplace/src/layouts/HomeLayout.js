import PropTypes from "prop-types";
import React, { Fragment } from "react";
import HomeHeader from "../wrappers/header/HomeHeader";
import HomeFooter from "../wrappers/footer/HomeFooter";
import ScrollToTop from "../components/scroll-to-top"

const HomeLayout = ({ children }) => {
  return (
    <Fragment>
      <HomeHeader />
      <div className="home-sidebar-right">
        {children}
        <HomeFooter
          backgroundColorClass="bg-gray"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-70"
          containerClass="container-fluid"
          extraFooterClass="hm4-footer-padding"
          sideMenu={true}
        />
      </div>
      <ScrollToTop/>
    </Fragment>
  );
};

HomeLayout.propTypes = {
  children: PropTypes.node
};

export default HomeLayout;
