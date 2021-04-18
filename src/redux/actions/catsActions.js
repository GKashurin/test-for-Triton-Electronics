export const setCats = cats => ({
	type: "SET_CATS", payload: cats
})

export const setLoaded = payload => ({
	type: 'SET_LOADED', payload,
})