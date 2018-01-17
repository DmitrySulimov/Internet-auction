import { Users } from './domain/users';

export const USERS: Users[] = [
		{	
		id: 1,
		username: "admin",
		firstname: "Dmitry",
		lastname: "Sulimov",
		email: "sulimovdmitryvnua@gmail.com",
		password: "Password",
		phone: "0632791303",
		isAdmin: true,
		currentBalance: 10000
		},
		{	
		id: 2,
		username: "user1",
		email: "user1@gmail.com",
		password: "Password",
		phone: "0632791301",
		isAdmin: false,
		currentBalance: 0
		},
		{	
		id: 3,
		username: "user2",
		firstname: "Dmitry",
		lastname: "Sulimov",
		email: "user2@gmail.com",
		password: "Password",
		phone: "0632791302",
		isAdmin: false,
		currentBalance: 200
		}
	];
