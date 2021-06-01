async function Tempo (request, response) {
    const apiSecret = process.env.COVERTKIT_API_SECRET
    const dynamicDate = new Date();

    const subscribersResponse = await fetch(`https://api.convertkit.com/v3/subscribers?api_secret=${apiSecret}&from=2016-02-01&to=2015-02-28`)
    const subscribersResponseJson = await subscribersResponse.json();
    const inscritos = subscribersResponseJson.total_subscribers;

    response.json({
        date: dynamicDate.toGMTString(),
        inscritos: inscritos
    })
}

export default Tempo;