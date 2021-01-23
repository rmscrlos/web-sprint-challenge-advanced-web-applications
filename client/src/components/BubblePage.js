import React, { useState, useEffect } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

import Bubbles from './Bubbles';
import ColorList from './ColorList';
import { fetchData } from '../api/fetchData';

const BubblePage = () => {
	const [colorList, setColorList] = useState([]);
	// fetch your colors data from the server when the component mounts
	// set that data to the colorList state property

	useEffect(() => {
		fetchData(setColorList);
	}, []);

	return (
		<>
			<ColorList colors={colorList} updateColors={setColorList} fetchData={fetchData} />
			<Bubbles colors={colorList} />
		</>
	);
};

export default BubblePage;
