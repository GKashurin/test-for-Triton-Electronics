import React from "react";
import Button from "../Button";

const CatsBlock = ({id, name, imageUrl, price, onClickAddCat, addedCount}) => {

	const onAddCat = () => {
		const obj = {
			id,
			name,
			imageUrl,
			price
		};
		onClickAddCat(obj);
	};

	return (
		<div className="cats-block">
			<img
				className="cats-block__image"
				src={imageUrl} alt="Cat"
				width="280px"
				height="200px"
			/>
			<h4 className="cats-block__title">{name}</h4>
			<div className="cats-block__bottom">
				<div className="cats-block__price">{price} ₽</div>
				<Button
					onClick={onAddCat}
					className="button--add" outline>
					<span>Купить</span>
					{addedCount && <i>{addedCount}</i>}
				</Button>
			</div>
		</div>
	);
}

export default CatsBlock