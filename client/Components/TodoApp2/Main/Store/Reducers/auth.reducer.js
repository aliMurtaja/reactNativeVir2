import {
	AUTH_DETAIL_CHANGE,
	TWEET_VALUE_CHANGE,
	LOG_IN,
	FETCH_ALL_TWEETS,
	LOADING,
	DELETE_TWEET,
	CREATE_TWEET
} from './../ActionTypes';

const INITIAL_STATE = {
	email: '',
	password: '',
	tweet: 'ali',
	tweets: [],
	loading: false
};

export default (state = INITIAL_STATE, actions) => {
	switch (actions.type) {
		case AUTH_DETAIL_CHANGE:
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case TWEET_VALUE_CHANGE:
            console.log(state.tweet)
			return { ...state, [actions.payload.prop]: actions.payload.value };
		case LOG_IN:
			return { ...state };
		case FETCH_ALL_TWEETS:
			console.log(actions.payload)
			return { ...state, tweets: actions.payload, loading: false };
		case LOADING:
			return { ...state, loading: actions.payload };
		case DELETE_TWEET:
			return { ...state, tweets: actions.payload };
		case CREATE_TWEET:
			return { ...state, tweets: actions.payload, tweet: '' };
		default:
			return { ...state };
	}
};
