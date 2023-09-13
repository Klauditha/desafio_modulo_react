import PropTypes from "prop-types";

// eslint-disable-next-line react/prop-types
export const Card = ({ url, name, description }) => {
  return (
    <div>
      <p>{url}</p>
      <p>{name}</p>
      <p>{description}</p>
    </div>
  );
};

Card.propTypes = {
  url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
