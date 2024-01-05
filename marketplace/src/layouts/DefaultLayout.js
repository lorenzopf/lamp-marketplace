import PropTypes from "prop-types";
import { Fragment } from "react";
import DefaultHeader from "../wrappers/header/DefaultHeader";
import DefaultFooter from "../wrappers/footer/DefaultFooter";
import ScrollToTop from "../components/scroll-to-top"

const DefaultLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass
}) => {
  return (
    <Fragment>
      <DefaultHeader
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <DefaultFooter
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default DefaultLayout;
