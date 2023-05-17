export default defineEventHandler(async(event) => {

	const { code } = event.context.params
	const { currencyKey } = useRuntimeConfig()

	const uri = `https://api.currencyapi.com/v3/currencies?apikey=${currencyKey}&currencies=${code}`

	// const {data} = await $fetch(uri)
	const {data} = await $fetch('https://api.currencyapi.com/v3/currencies?apikey=4FP5Wsl06fRFBNrYkqhhsCxCpaM2fBBwQCILFEAy&currencies=BRL')

	return data
})