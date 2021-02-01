const apiKey = 'QubqJH1W3kA70f9OjeL57xkFuiKmpMPx'

const fromApiResponseToGifs = apiResponse => {
  const {data = []} = apiResponse
  if (Array.isArray(data)) {
    const gifs = data.map(image => {
      const {images, title, id} = image
      const { url } = images.downsized_medium
      return { title, id, url }
    })
    return gifs
  }
  return []
}

export default function getGifs ({limit = 10, keyword = 'cat'} = {}) {
  const apiURL = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=${limit}&offset=0&rating=G&lang=en`

  return fetch(apiURL)
    .then(res => res.json())
    .then(fromApiResponseToGifs)
}