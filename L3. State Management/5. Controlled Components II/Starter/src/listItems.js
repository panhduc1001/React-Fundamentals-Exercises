import PropTypes from "prop-types";
import Items from "./Items";

const ItemList = ({ items }) => {
	return (
		<div>
			<p className="item-list">Items:</p>
			<ol className="item">
				{items.map((item, index) => (
					<Items key={index} item={item} />
				))}
			</ol>
		</div>
	);
};

ItemList.propTypes = {
	items: PropTypes.array.isRequired,
};

export default ItemList;
