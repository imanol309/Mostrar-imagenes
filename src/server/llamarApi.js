const keyApi = '07qWToGtfryS9dtJqnpB9EQdob7ZC8dK&q'

export default async function llamarApi(estilo) {

    const urlAPi = [`https://api.giphy.com/v1/gifs/search?api_key=${keyApi}=${estilo}&limit=20&offset=0&rating=g&lang=en`]

    return await fetch(urlAPi)
    .then(res => res.json())
    .catch(error => console.log('REVISA, encotre un error ',error))
    .then(respuesta => {
    const {data} = respuesta
    if (Array.isArray(data)) {
        const valor = data.map(image => image.images.downsized_medium.url)
        return valor
    } else {
        console.log('REVISA POR QUE LOS DATOS RECIVIDO NO ES UN ARRAY ')
    }
    })
}