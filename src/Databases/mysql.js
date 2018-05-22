const express = require('express');
const app     = express();
const mysql   = require('mysql');
const cors    = require('cors');
const bodyParser = require('body-parser')


const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'kacang123',
    database : 'kurma',
});
db.connect();

app.use(cors());
app.use(bodyParser.json());

app.get('/information', function(req,res){
    var sql = 'select * from Transaksi_PembelianKurma';
    db.query(sql, (err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
});

app.post('/information', function(req,res){
    var data = 
            {
                NamaPembeli:req.body.nama, 
                EmailPembeli:req.body.email, 
                Alamat:req.body.alamat,
                NomorHP:req.body.hp,
                Produk:req.body.produk,
                Quantity:req.body.qty
                

            }
    var sql = 'INSERT INTO Transaksi_PembelianKurma SET ?';
    db.query(sql,data,(err, result)=>{
        if(err) throw err;
        console.log(result);
        res.send(result);
    });
})

app.listen(3001, ()=>{
    console.log('Server @Port 3001')
});