class DataSource {
    static cariNegara(keyword) {
        return fetch(`https://restcountries.eu/rest/v2/name/${keyword}`)
            .then(response => {
                return response.json()
            })
            .then(responseJson => {
                if(responseJson) {
                    return Promise.resolve(responseJson);    
                } else {
                    return Promise.reject(`${keyword} is not found`)
                }
            })
    }
}

export default DataSource;