import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";

import {setCats} from "../redux/actions/catsActions";
import Preloader from "../components/catsBlock/Preloader";
import CatsBlock from "../components/catsBlock";
import {addCatToCart} from "../redux/actions/cartActions";

const Home = () => {
	const dispatch = useDispatch()
	const cats = useSelector(({ cats }) => cats.cats.cats)
	const isLoaded = useSelector(({ cats }) => cats.isLoaded)
	const cartItems = useSelector(({ cart }) => cart.items);

	useEffect(() => {
		axios.get("http://localhost:3000/db.json")
		.then(({ data }) => {
		dispatch(setCats(data));
		});
	}, [])

	const handleAddCatToCart = (obj) => {
		dispatch(addCatToCart(obj));
	}

	return (
		<div className="container">
			<h2 className="content__title">Все котики</h2>
			{
				isLoaded ?
					<div className="content__items">
						{
							cats.map((obj) => (
								<CatsBlock
									onClickAddCat={handleAddCatToCart}
									key={obj.id}
									addedCount={cartItems[obj.id] && cartItems[obj.id].items.length}
									{...obj}
								/>
							))
						}
					</div> :
					<div className="content__preloader">
						<Preloader/>
					</div>
			}

		</div>
	);
}

export default Home;
