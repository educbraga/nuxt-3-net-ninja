export default defineEventHandler(async (event) => {
	//handle query params
	// const {name} = getQuery(event)

	//handle post data
	// const {age} = await readBody(event)

	//api call with private key
	const {data} = await $fetch('https://api.currencyapi.com/v3/latest?apikey=4FP5Wsl06fRFBNrYkqhhsCxCpaM2fBBwQCILFEAy')

	return data
})