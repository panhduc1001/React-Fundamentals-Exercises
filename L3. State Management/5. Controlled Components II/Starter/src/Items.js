import PropTypes from "prop-types";

const Item = ({ item }) => {
	return <li>{item}</li>;
};

Item.propTypes = {
	items: PropTypes.string.isRequired,
};

export default Item;
