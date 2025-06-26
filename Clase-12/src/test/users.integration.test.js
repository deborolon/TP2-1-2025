import supertest from "supertest"
import { expect } from "chai"

//supertest -> me ayuda a configurar la URL a dónde se apuntan las pruebas
const url = supertest("http://localhost:8080")
const token = "eyJ..."
//describe -> agrupar un bloque de test, casos de prueba
//describe no ejecuta ningún test!!!
describe("Test entidad USERS ", () => {
    //it define una prueba individual
    it("GET con TKN ", async () => {
        //si tengo que pasar un token de autenticación
        const response = await url.get("/users").set("Authorization", token)
        //aserción -> valor que compara si se cumple o no con una condición
        expect(response.status).to.equal(200)
        expect(response.body).to.be.an("array")
        expect(response.body).to.have.lengthOf(7)
    })

    it("GET sin TKN ", async () => {
        const response = await url.get("/users")
        expect(response.status).to.equal(500)
    })

    it("POST ", async () => {
        const response = await url.post("/users").send({name: "Test"})
        expect(response.status).to.equal(200)
    })
})