import React from 'react';
import CommentBox from '../components/CommentBox'
import {initialState} from '../index';

function Product(props) {

	console.log(props.match.params.id)
	const recipe = initialState.recipes.find(e => e.id === props.match.params.id)
	console.log(recipe)
	
return <>

	<div className="hero">    	

		<div className="hero__panel">
			<h2>{recipe.name}</h2>
			<h3>{recipe.description}</h3>
			<div className='hero__panel--data'>	
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>4</li>
						<li className='hero__buttons-data--desc'>Ingredients</li>
					</ul>
				</div>
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>300</li>
						<li className='hero__buttons-data--desc'>Calories</li>
					</ul>
				</div>
				<div className="hero__buttons-data">
					<ul>
						<li className='hero__buttons-data--qty'>33</li>
						<li className='hero__buttons-data--desc'>Minutes</li>
					</ul>
				</div>
			</div>
				<div className="hero__button">
					<button className="hero__button--add">Add to cart</button>
				</div>
				<div className='hero__nutritional--container'>
					<div className="hero__receipe-details--container">
						<div className="hero__receipe-details--inner">
							<ul className="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div className="hero__receipe-details--container">
						<div className="hero__receipe-details--inner">
							<ul className="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div className="hero__receipe-details--container">
						<div className="hero__receipe-details--inner">
							<ul className="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div className="hero__receipe-details--container">
						<div className="hero__receipe-details--inner">
							<ul className="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div className="hero__receipe-details--container">
						<div className="hero__receipe-details--inner">
							<ul className="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
					
					<div className="hero__receipe-details--container">
						<div className="hero__receipe-details--inner">
							<ul className="hero__receipe-details--data">
								<li>200</li>
								<li>calories</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
		<div className="hero__image">
			<img src={recipe.photos} alt={recipe.name}/>
		</div>
	</div>
		{/* INGREDIENTS  */}

	<div className='ingre'>
		<div className='ingre__tittle'>
			<h2>Ingredients</h2>
				<p>4 Serv | Metric Standard</p>
		</div>

		<div className='ingre__list'>
			<ul>
				{
					recipe.ingredients.map((item, i) => (
						<li key={recipe.id}{...item}>
							<div className='ingre__list--plus'>
								<div>&#10010;</div>
							</div>
							<p>
							{recipe.ingredients[i]}
							</p>
						</li>
					))
				}						
			</ul>						
		</div>
	</div>

	<div className='directions'>
		<div className='directions__title'>Directions</div>

		<ul className='directions__steps'>

		{
					recipe.direction.map((item, i) => (
						<li key={recipe.id}{...item}>
							
							<p>
							{recipe.direction[i]}
							</p>
						</li>
					))
				}	
				
			
			
		</ul>

		<CommentBox />
	</div>

</>
}

export default Product;