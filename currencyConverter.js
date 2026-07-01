async function convert(to, from, amount) {
    let rateQuery = `https://api.frankfurter.dev/v2/rates?base=${to}&quotes=${from}`
    const response = await fetch(rateQuery)
    const rate = response['rate']
    const convertedAmount = amount * rate
    console.log(convertedAmount)
}