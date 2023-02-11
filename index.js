const express = require("express") // Express framework
const morgan = require("morgan") // Used for seeing request logs

const app = express() // Create an instance of express

// Middleware for handling request objects in POST
app.use(express.json())
app.use(morgan("tiny"))

// Our list to return
const bills = []

app.get("/api/items", (request, response) => {
  console.log(bills)
  return response.status(200).json({ bills })
})

// JSON object should have all the properties listed below.. otherwise it is not valid
app.post("/api/items", async (request, response) => {
  const { firstName, lastName, address, hospitalName, dateOfService, billAmount } = request.body
  try {
    if (!firstName || !lastName || !address || !hospitalName || !dateOfService || !billAmount) {
      return response.status(400).json({ message: "Missing a field! Invalid bill" })
    }

    // Create the medical bill object
    const medicalBill = {
      firstName,
      lastName,
      address,
      hospitalName,
      dateOfService,
      billAmount,
    }
    bills.push(medicalBill)
    return response.status(201).json({ message: "Bill added !" })
  } catch (error) {
    return response.status(400).json({ message: "There was an error!" })
  }
})

// Define the port and run our server
const PORT = 3001

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}!`)
})

module.exports = app
