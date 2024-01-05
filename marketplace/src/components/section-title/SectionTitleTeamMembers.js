import PropTypes from "prop-types";
import clsx from "clsx"

const SectionTitleTeamMembers = ({
  titleText,
  subTitleText,
  positionClass,
  spaceClass
}) => {
  return (
    <div className={clsx("section-title-2", positionClass, spaceClass)}>
      <h2>{titleText}</h2>
      <p>{subTitleText}</p>
    </div>
  );
};

SectionTitleTeamMembers.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subTitleText: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleTeamMembers;
