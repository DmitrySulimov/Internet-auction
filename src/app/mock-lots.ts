import { Lot } from './domain/lot';

export const LOTS: Lot[] = [
	{
	id: 1,
	name: "Asus R512",
	currentPrice: 230,
	startPrice: 200,
	lastPrice: 300,
	img: [ "../assets/lot1/1.png", "../assets/lot1/3.png", "../assets/lot1/3.png"],
	customer: "Alex",
	totalCustomers: 3,
	finishDate: 1,
	category: "notebook",
	subCategory: "asus",
	description: "Alot information about different features"
	},
	{
	id: 2,
	name: "Dell Letitude m5",
	currentPrice: 230,
	startPrice: 200,
	lastPrice: 300,
	img: [ "../assets/lot2/1.png", "../assets/lot2/3.png", "../assets/lot2/3.png"],
	customer: "Dmitry",
	totalCustomers: 2,
	finishDate: 5,
	category: "notebook",
	subCategory: "dell",
	description: "Alot information about different features"
	},
	{
	id: 3,
	name: "Lenovo w12",
	currentPrice: 250,
	startPrice: 200,
	lastPrice: 300,
	img: [ "../assets/lot3/1.png", "../assets/lot3/3.png", "../assets/lot3/3.png"],
	customer: "Bob",
	totalCustomers: 5,
	finishDate: 3,
	category: "notebook",
	subCategory: "lenovo",
	description: "Alot information about different features"
	},
	{
	id: 4,
	name: "Nokia k730",
	currentPrice: 50,
	startPrice: 0,
	lastPrice: 100,
	img: [ "../assets/lot4/1.png", "../assets/lot4/3.png", "../assets/lot4/3.png"],
	customer: "Dmitry",
	totalCustomers: 2,
	finishDate: 3,
	category: "phone",
	subCategory: "nokia",
	description: "Alot information about different features"
	},
	{
	id: 5,
	name: "Iphone 7",
	currentPrice: 300,
	startPrice: 0,
	lastPrice: 100,
	img: [ "../assets/lot5/1.png", "../assets/lot5/3.png", "../assets/lot5/3.png"],
	customer: "Vladimir",
	totalCustomers: 6,
	finishDate: 5,
	category: "phone",
	subCategory: "iphone",
	description: "Alot information about different features"
	}
];