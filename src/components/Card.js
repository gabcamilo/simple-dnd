import React from 'react'

function Card(props) {

	const dragStart = event =>{
		const target =  event.target;

		event.dataTransfer.setData('card_id', target.id);

		setTimeout(() => {
			target.classList.add('moving-card')
		}, 0);
	}

	const dragOver = event =>{
		event.stopPropagation();
	}
	const dragEnd = event =>{
		event.target.classList.remove('moving-card')
		// event.target.element.removeProperty('display')
	}

	return (
		<div
			id={props.id}
			className={props.className}
			draggable={props.draggable}
			onDragStart={dragStart}
			onDragOver={dragOver}
			onDragEnd={dragEnd}
		>
			{props.children}
		</div>
	)
}

export default Card
