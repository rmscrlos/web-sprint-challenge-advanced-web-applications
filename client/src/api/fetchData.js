import { axiosWithAuth } from '../utils/axiosWithAuth';

export const fetchData = () => {
	axiosWithAuth()
		.get('/colors')
		.then(res => setColorList(res.data))
		.catch(err => console.log(err));
};
