import PropTypes from "prop-types";
import clsx from "clsx";
import bannerData from "../../data/banner/home-banner-data.json";
import HomeBannerSingle from "../../components/banner/HomeBannerSingle.js";

const HomeBanner = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div className={clsx("banner-area banner-area-2", spaceTopClass, spaceBottomClass)}>
      <div className="container-fluid">
        <div className="row gx-md-4 gx-lg-2">
          {bannerData?.map((single, key) => (
            <div className="col-xl-3 col-md-6" key={key}>
              <HomeBannerSingle
                spaceBottomClass="mb-10"
                data={single}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

HomeBanner.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default HomeBanner;
