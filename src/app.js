import express from 'express';
import { graphqlHTTP } from 'express-graphql';

require('dotenv').config();

const port = process.env.PORT || 8083;

const app = express();

app.get('/', (req, res) => {
    res.json({
        msg: 'Graphql Introduction'
    })
});

const schema = {};

app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema
}));

app.listen(port, () => {
    console.log('Server run in post: ', port)
});

 
