//Promesas
function apiFetchPromises() {
    const data = fetch("https://swapi.dev/api/films/")
                    .then((res) => console.log("res: ", res))
                    .catch((err) => console.log(err))
    return data
}

//Async / Await
async function apiFetchAsyncAwait() {
    const data = await fetch("https://swapi.dev/api/films/")
    return data
}

// module.exports = apiFetchAsyncAwait
//common js
module.exports = {
    apiFetchPromises,
    apiFetchAsyncAwait
}