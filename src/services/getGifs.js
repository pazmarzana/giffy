export default function getGifs({keyword='cat'}){
    const apiKey='QubqJH1W3kA70f9OjeL57xkFuiKmpMPx';
    const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`;
 
return fetch(apiUrl)
    .then(res=>res.json())
    .then(response => {
        const {data} = response
        const gifs = data.map(image => {
            const {id, title, images} = image
            const {url} = images.downsized_medium
            return {id,title,url}
        })
        return gifs
    });
} 