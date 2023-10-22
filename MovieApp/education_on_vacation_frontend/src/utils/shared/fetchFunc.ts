export const fetchFunc = async (URL, setter, query?) => {
    const response = await fetch(URL)
    const result = await response.json()
    setter = setter(result.results)
}

export const fetchCallToMoviesDb = async (searchBy, setterFunction) => {
    const apiKey = '4b136df1e8e8f6a86757e2a959bb1fc6'
    const URL = `https://api.themoviedb.org/3/${searchBy}?api_key=${apiKey}`
    const response = await fetch(URL)
    const result = await response.json()
    setterFunction = setterFunction(result.results)
}

export const fetchGenres =  async (URL, setter) => {
        const response = await fetch(URL)
        const data = await response.json()
        setter = setter(data.genres)
    
}

export const fetchSingle = async (URL, setter) => {
    const response = await fetch(URL)
    const result = await response.json()
    console.log(result)
    setter = setter(result)
}
