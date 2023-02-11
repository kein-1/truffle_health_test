const app = require("./index.js")

const request = require("supertest")

const testObject = {
  firstName: "Bob",
  lastName: "Bob",
  address: "123 street",
  hospitalName: "random",
  dateOfService: "123 date",
  billAmount: 123.3,
}

describe("tests api get items", () => {
  test("testing api status code ", async () => {
    const response = await request(app).get("/api/items")
    expect(response.statusCode).toEqual(200)
  })

  test("testing api get items return type ", async () => {
    const response = await request(app).get("/api/items")
    expect(response.type).toEqual("application/json")
  })

  test("testing api get items return size with nothing added ", async () => {
    const response = await request(app).get("/api/items")
    const { bills } = response.body
    expect(bills).toEqual([])
  })
})

describe("tests api post request to items", () => {
  test("testing api status code ", async () => {
    const response = await request(app).post("/api/items").send(testObject).set("Accept", "application/json")
    expect(response.statusCode).toEqual(201)
  })

  test("testing api get items return size after the above post request is made ", async () => {
    const response = await request(app).get("/api/items")
    const { bills } = response.body
    expect(bills.length).toEqual(1)
  })
})
