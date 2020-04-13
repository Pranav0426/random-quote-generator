import axios from 'axios';
const url = 'https://andruxnet-random-famous-quotes.p.rapidapi.com/';

const config = {
	headers: {
		'content-type': 'application/octet-stream',
		'x-rapidapi-host': 'andruxnet-random-famous-quotes.p.rapidapi.com',
		'x-rapidapi-key': '4bb54f0d01msh76cc8245b21a634p1a804cjsn8a3539b76df4'
	},
	params: {
		cat: 'famous',
		count: '10'
	},
	transformResponse: (response) => response
};
export default async () => {
	const { data } = await axios.get(url, config);
	return data;
};
