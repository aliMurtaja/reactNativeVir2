import { SERVER_URL } from './address';

const tweetUrl = SERVER_URL;

const config = (url, method, body) =>
// console.log(SERVEmR_URL)
	fetch(url, {
		method,
		cache: 'no-cache',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify(body)
	}).then(response => {
		// console.log(response.json())
		return response.json()
	}).then(result => {
		// console.log(result)
		return result
	} )
	;

export const fetchTweets = async () => await fetch(tweetUrl).then(res => res.json()).then(result=>{
	return result
});

export const createTweets = ({ user, tweet }) => config(tweetUrl, 'POST', { user, tweet });

// export const deleteTweet = ({ id }) => config(tweetUrl, 'DELETE', { id });

// // export const logIn = ({ email, password }) => config(userUrl, 'POST', { email, password });
