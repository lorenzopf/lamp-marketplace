import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/about-banner-data.json";
import AboutBannerSingle from "../../components/banner/AboutBannerSingle.js";

const AboutBanner = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area", spaceTopClass, spaceBottomClass)}>
      <div className="container">
        <div className="row">
          {bannerData?.map((single, key) => (
            <div className="col-lg-4 col-md-4" key={key}>
              <AboutBannerSingle
                data={single}
                spaceBottomClass="mb-30"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

AboutBanner.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default AboutBanner;
