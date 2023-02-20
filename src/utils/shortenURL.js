
export default async function shortenURL(){

    let result = 'error de la funcion'
    const encodedParams = new URLSearchParams();
    const currentURL = window.location.href
    encodedParams.append("url", 'https://www.google.com/search?q=sinapsis&rlz=1C1ONGR_esAR993AR993&oq=sinapsis&aqs=chrome..69i57j0i131i433i512l3j0i512l2j0i131i433i512j0i512l3.1167j0j7&sourceid=chrome&ie=UTF-8');

    const options = {
        method: 'POST',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '7eb6b47e56mshe0ebe91e6cba381p1031a6jsn73611b6062f1',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
	    body: encodedParams
    };

    await fetch('https://url-shortener-service.p.rapidapi.com/shorten', options)
        .then(response => response.json())
        .then(data => {result = data.result_url})
        .catch(err => console.error(err));

    
    return result

}