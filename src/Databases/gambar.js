const express = require ('express');
const app = express();
const cors    = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

var MongoClient = require ('mongodb').MongoClient;
var url = 'mongodb://kharisma:yuniar@ds123490.mlab.com:23490/kurma';

MongoClient.connect(url, function (err, db){
    console.log("Terhubung Ke MongoDB!")
});



app.get('/data',(req, res)=>{
MongoClient.connect(url,(err, db)=>{
var collection = db.collection('pelanggan');
collection.find({}).toArray((err,docs)=>{
console.log(docs);
res.send(docs);

}); }); });

app.get('/datag',(req, res)=>{
    MongoClient.connect(url,(err, db)=>{
    var collection = db.collection('gambar');
    collection.find({}).toArray((err,docs)=>{
    console.log(docs);
    res.send(docs);
    
    }); }); });

app.post('/data', (req, res)=>{
    MongoClient.connect(url, (err, db)=>{
    var data = {nama:req.body.nama,
        hp:req.body.hp,
        email:req.body.email,
        alamat:req.body.alamat,
        rasa:req.body.rasa,
        produk:req.body.produk};
    var collection = db.collection('pelanggan');
    collection.insert(data, (err, result)=>{
    console.log(result);
    res.send(result);
    
    }); }); });
    

    // app.delete('/data/:id', (req, res)=>{
    //     console.log('bisa')
    //     MongoClient.connect(url, (err, db)=>{
    //     // var data = {id:req.params._id,};
    //     var collection = db.collection('pelanggan');
    //     collection.deleteOne(req.params._id, (err, result)=>{
    //     console.log(req.params._id);
    //     res.send(result);
        
    //     }); }); });    

    app.delete("/:id", (req, res) => {
        console.log('bisa')
        MongoClient.connect(url, (err, db) => {
            var collection = db.collection('pelanggan');
            collection.deleteOne(req.params._id, (err, result) => {
                console.log(result);
                res.send(result);
            });
        });
    })




app.listen(3700,()=>{
    console.log('server @port 3700')
})