import MongoClient from 'mongodb';

export async function connect(){
    try{
        const client = await MongoClient.connect('mongodb://localhost:27017', {
            useNewUrlParser: true, 
            useUnifiedTopology: true 
        })
        const db = client.db('mundopituto');
        console.log('DB Conectada');
        return db;
    }catch(e){
        console.log(e);
    }    
}


