// import logo from './logo.svg';
import './App.css';
// import Footer from "./components/Footer/Footer.js";  //important syntax (import&from) for no errors
// import Header from "./components/Header/Header";
// import Home from "./components/Home/Home";
// import Song from "./components/Song/Song";
import Animals from "./components/animal/Animals";

// function App() {
// 	const textForHeader = "Sveiki atvykę į mano dienoraštį!";
// 	const blogPosts = [
// 		{ id: 0, title: "Karbauskio dienoraštis" },
// 		{ id: 1, title: "Bideno anekdotai" },
// 		{ id: 2, title: "Boriso memuarai" },
// 	];
// 	const handleClick = (arg) => console.log(`Parent called with: ${arg.value}`);
// 	return (
// 		<>
// 			<Header text={textForHeader} customStyle={{ color: "red", backgroundColor: "lightgrey" }} />
// 			<Home blogPosts={blogPosts} callParrentFunction={(childData) => handleClick(childData)} />
// 			{/* We can't directly style custom components using embeded CSS */}
// 			{/* <Home style={{ display: "block" }} blogPosts="string" /> */}
// 			<Home />
// 			<Footer />
// 		</>
// 	);
// }
import React from 'react';

const App = () => {
	return (
		<Animals/>
	);
};

export default App;
