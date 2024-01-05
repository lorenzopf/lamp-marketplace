import PropTypes from "prop-types";
import { Fragment } from "react";
import AboutHeader from "../wrappers/header/AboutHeader";
import AboutFooter from "../wrappers/footer/AboutFooter";
import ScrollToTop from "../components/scroll-to-top"

const AboutLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass
}) => {
  return (
    <Fragment>
      <AboutHeader
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <AboutFooter
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

AboutLayout.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default AboutLayout;
