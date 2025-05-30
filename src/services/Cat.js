const CAT_ENDPOINT_PICTURES = 'https://cataas.com/cat'
const CAT_ENDPOINT_FACTS = 'https://catfact.ninja/fact'


export const getCatPictures = async () => {
 const data = await fetch(CAT_ENDPOINT_PICTURES)
 return data
}

export const getCatFacts = () => {

}


