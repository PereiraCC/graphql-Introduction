import express from 'express';
import { graphqlHTTP } from 'express-graphql';

import schema from './schema';
import { connect } from './database';


require('dotenv').config();

const port = process.env.PORT || 3000;

const app = express();
connect();

app.get('/', (req, res) => {
    res.json({
        msg: 'Graphql Introduction'
    })
});


app.use('/graphql', graphqlHTTP({
    graphiql : true,
    schema,
    context: {
        messageId: 'test',
    }
}));

app.listen(port, () => {
    console.log('Server run in port: ', port)
});

 
