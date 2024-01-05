import PropTypes from "prop-types";
import { Fragment } from "react";
import CheckoutHeader from "../wrappers/header/CheckoutHeader";
import CheckoutFooter from "../wrappers/footer/CheckoutFooter";
import ScrollToTop from "../components/scroll-to-top"

const CheckoutLayout = ({
  children,
  headerContainerClass,
  headerTop,
  headerPaddingClass,
  headerPositionClass
}) => {
  return (
    <Fragment>
      <CheckoutHeader
        layout={headerContainerClass}
        top={headerTop}
        headerPaddingClass={headerPaddingClass}
        headerPositionClass={headerPositionClass}
      />
      {children}
      <CheckoutFooter
        backgroundColorClass="bg-gray"
        spaceTopClass="pt-100"
        spaceBottomClass="pb-70"
      />
      <ScrollToTop/>
    </Fragment>
  );
};

CheckoutLayout.propTypes = {
  children: PropTypes.node,
  headerContainerClass: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  headerTop: PropTypes.string
};

export default CheckoutLayout;
