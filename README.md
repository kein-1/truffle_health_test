#### Getting Started

1. run npm install to install all the required packages
2. run either "npm run start" (for a constant server) or "npm run devWatch" (for a server that restarts automatically)

#### Testing

3. run "npm run test" for testing

#### Getting/Adding Medical Bill Objects

1. Utilize POSTMAN to make requests. Please pass in an object with the following properties, similar to below:
   {
   "firstName" : "Bob",
   "lastName" : "Bob",
   "address" : "123 street",
   "hospitalName": "random",
   "dateOfService" : "123 date",
   "billAmount": 123.3
   }
