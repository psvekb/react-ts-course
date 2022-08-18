import React, { FC, useRef, useState } from 'react';

const EventsExample: FC = () => {
	const [value, setValue] = useState<string>('')
	const [isDrag, setIsDrag] = useState<boolean>(false)
	const inputRef = useRef<HTMLInputElement>(null)

	const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value)
	}
	const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
		console.log(inputRef.current?.value)
	}

	const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
		console.log('Drag')
	}
	const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(true)
	}
	const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
	}
	const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		setIsDrag(false)
		console.log('drop')
	}

	return (
		<div>
			<input value={value} onChange={changeHandler} type='text' placeholder='managed' />
			<input ref={inputRef} type='text' placeholder='unmanaged' />
			<button onClick={clickHandler}>Button 1</button>
			<div onDrag={dragHandler} draggable style={{ width: '200px', height: '200px', background: 'red' }}></div>
			<div
				onDrop={dropHandler}
				onDragLeave={leaveHandler}
				onDragOver={dragWithPreventHandler}
				style={{ width: '200px', height: '200px', background: isDrag ? 'blue' : 'red', marginTop: '15px' }}></div>
		</div>
	);
};

export default EventsExample;