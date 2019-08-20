const express = require("express");
const graphqlHTTP = require("express-graphql");
const mongoose = require('mongoose');
const schema = require("./schema/schema")

const app = express();

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