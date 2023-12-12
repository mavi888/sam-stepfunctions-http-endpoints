'use strict';

exports.lambdaHandler = async (event) => {
	console.log(event);
	// the backend fails 20% of the times
	const randomNumber = Math.floor(Math.random() * 100);

	if (randomNumber < 20) {
		console.log('success');
		return {
			statusCode: 200,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			body: 'hola',
		};
	} else {
		console.log('error');
		return {
			statusCode: 400,
			headers: {
				'Access-Control-Allow-Origin': '*',
			},
			body: 'adios',
		};
	}
};
