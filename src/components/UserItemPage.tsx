import axios from 'axios';
import React, { FC, useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { IUser } from '../types/types';



const UserItemPage: FC = () => {
	const [user, setUser] = useState<IUser | null>(null)
	const params = useParams()
	const history = useNavigate()

	useEffect(() => {
		fetchUser()
	}, [])

	async function fetchUser() {
		try {
			const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users/' + params.id)
			setUser(response.data)
		} catch (error) {
			alert(error)
		}
	}
	return (
		<div>
			<button onClick={() => history(-1)}>Back</button>
			<h1>User Page {user?.name}</h1>
			<div>{user?.email}</div>
			<div>{user?.address.city} </div>
			<div>{user?.address.street} </div>
			<div>{user?.address.zipcode} </div>
		</div>
	);
};

export default UserItemPage;