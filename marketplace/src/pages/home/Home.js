import { Fragment } from "react";
import SEO from "../../components/seo";
import HomeLayout from "../../layouts/HomeLayout";
import TabProduct from "../../wrappers/product/TabProduct";
import Newsletter from "../../wrappers/newsletter/Newsletter";
import HomeBanner from "../../wrappers/banner/HomeBanner";
import HomeHeroSlider from "../../wrappers/hero-slider/HomeHeroSlider";

const Home = () => {
  return (
    <Fragment>
      <SEO
        titleTemplate="Fashion Home"
        description="Fashion home of flone react minimalist eCommerce template."
      />
      <HomeLayout>
        {/* hero slider */}
        <HomeHeroSlider />
        {/* banner */}
        <HomeBanner spaceTopClass="pt-10" spaceBottomClass="pb-85" />
        {/* tab product */}
        <TabProduct
          spaceBottomClass="pb-100"
          category="accessories"
          containerClass="container-fluid"
          extraClass="hm4-section-padding"
        />
        {/* newsletter */}
        <Newsletter
          spaceBottomClass="pb-100"
          spaceLeftClass="pl-30"
          spaceRightClass="pr-30"
        />
      </HomeLayout>
    </Fragment>
  );
};

export default Home;
