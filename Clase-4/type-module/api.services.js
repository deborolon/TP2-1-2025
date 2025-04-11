//Promesas
function apiFetchPromises() {
    const data = fetch("https://swapi.dev/api/films/")
                    .then((res) => res.json())
                    .catch((err) => console.log(err))
    return data
}

//Async / Await
async function apiFetchAsyncAwait() {
    const data = await fetch("https://swapi.dev/api/films/")
    const dataParser = data.json()
    return dataParser
}

//type: module
export default {
    apiFetchPromises,
    apiFetchAsyncAwait
}