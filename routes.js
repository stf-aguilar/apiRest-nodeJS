const express = require('express');
const routes = express.Router();

routes.get('/', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('SELECT * FROM operation', (err,rows) => {
            if(err) return res.send(err);

            res.json(rows);
        });  
    })
})

routes.post('/', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('INSERTO INTO operation set ?',[req.body], (err,rows) => {
            if(err) return res.send(err);

            res.send('operación agregada');
        });  
    })
})

routes.delete('/:id', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('DELETE FROM operation WHERE id=?',[req.params.id], (err,rows) => {
            if(err) return res.send(err);

            res.send('operación eiminada');
        });  
    })
})

routes.put('/:id', (req, res) => {
    req.getConnection((err, conn)=>{
        if(err) return res.send(err);

        conn.query('UPDATE operation SET ? WHERE id=?',[req.body, req.params.id], (err,rows) => {
            if(err) return res.send(err);

            res.send('operación actualizada');
        });  
    })
})


module.exports = routes;