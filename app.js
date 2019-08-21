const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require('mongoose');
const schema = require("./schema/schema")
const cors = require("cors");

const app = express();

// allow cross-origin requests
app.use(cors()); 

mongoose.connect('mongodb://localhost/graphql', {useNewUrlParser: true});
mongoose.connection.on('open', () => {
    console.log("Connected to mongo");    
});

app.use("/graphql", graphqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log("Listening on port 4000");    
})