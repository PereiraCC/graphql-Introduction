import mongoose from 'mongoose';

export const connect = async () => {

    try {

        await mongoose.connect('mongodb://localhost/mongodbgraphql', {
            useNewUrlParser: true,
        });
    
        console.log('>>> DB is connected');

    } catch (e) {
        console.log(`Error DB connected: ${e.message}`);
        // console.log('something goes wrong');
    }

}
