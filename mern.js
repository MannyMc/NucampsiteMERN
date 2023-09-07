// Steps to create a MERN Website
/*
Step 1. Set up application
--------------------------
mkdir fileName -- start a new folder
npm init (-y) -- initialize the project with package,json file, -y is use to default values 

Step 2: Setting up the Node Server
----------------------------------
To run Javascript on the back-end, you need a server side frame to complie the code.
Express.js Framework we will use as our back-end to handle REST endpoints.

npm install express -- adds express to our node-modules

create index.js file and add code 

const port = process.env.port || 5000; This tells the system what port the Express server is running at
const err = new Error(), app.use(err) is just for us to handle any errors if server trowes any
app.listern(port,()=>{}), app is watching to see if there any server running at port 5000 and console.log if there is

Step 3: Create the Endpoints and Routes
----------------------------------------
There are three thing the app needs to do
-create a task (POST)
-view task (GET)
-delete a completed task(DELETE)

Create js file named api.js -- see file more information on code in.

Step 4: Definning the Models
Since our app will be using MongoDB which is a NoSQL database, we need to create a model and a schema.
Models are defined using the schema interface. Schema is the blueprint of how the database will be constructed.

Install Mongoose, which is a node package that makes working MongoDB easier
npm install mongoose
See todos.js in models folder for more information on Mongoose,Schemas, Modals

Step 5: Connecting to a MongoDB(IMPORTANT)
-------------------------------------------
First install a few packages and import them to index.js:
npm install body-parser
npm install dotenv
import mongoose
-------------------
Create a database with mongodb atlas and create username with password. You can connect the database by using URL with your username/password in it
This url will be assigned to DB var in the file .env in the root directiory
Using mongoose.connect function we pass (process.env.DB(url)) and this connects our express server to our MongoDb server
After we successfully connect console log it to tell us, and add a handle err 

We override mongoose promise with node.js promise
After all that we can add the api rest points to app.use to test GET,POST,DELETE with postman

Step 6: Testing The API
-----------------------
We use Postman to test all endpoints here
Be sure to add a body in json format on POST 
and on DELETE be sure to use _id otherwise you will get a err

Step 7: Creating the Frontend
------------------------------
We can create the front-end in the root directory as the back-end
use npx create-react-app client(foldername)
This will automatically download all the package you need for react

Step 8: Running the React App
------------------------------
Before tesing the react app, we need to install many dependenices in the root directory:
npm install concurrently --save-dev ---- used to run more than one command simultaneously from the same terminal window
npm install nodemon --save-dev  -------- used to run the server and monitor it as well, if any changes to server code, automactically restart it

Open package.json and add a few dependency to the file, these will start on command

*/