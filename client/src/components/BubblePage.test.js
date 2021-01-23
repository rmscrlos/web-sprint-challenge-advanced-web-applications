import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import BubblePage from './BubblePage';
import Bubbles from './Bubbles';
import ColorList from './ColorList';
//fetchData Function

import { fetchData as mockFetchData } from '../api/fetchData';

jest.mock('../api/fetchData');

const data = {
	data: [
		{
			color: 'blue',
			hex: 'blue'
		},
		{
			color: 'red',
			hex: 'red'
		},
		{
			color: 'yellow',
			hex: 'yellow'
		}
	]
};

test('Fetches data and renders the bubbles', async () => {
	mockFetchData.mockResolvedValueOnce(data);
	render(<BubblePage />);

	await waitFor(() => {
		expect(<ColorList />);
		expect(<Bubbles />);
	});
});
