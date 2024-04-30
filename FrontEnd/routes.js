// const express = require('express')
// const fetch = require('node-fetch')
// const https = require('https');
// const fs = require ('fs');
// const router = express.Router()


// const options = {
//     key: fs.readFileSync('/etc/ssl/private/server.key'),
//     cert: fs.readFileSync('/etc/ssl/private/server_utf8.crt')
// };
// const host= 'http://10.142.0.5:8000';


// router.get('/', (req, res)=>{
//     res.render('index')
// })


// router.get('/addData', (req, res)=>{
//     res.render('addData')
// })


// router.post('/addData', async(req, res)=>{
   
//     const empData = {
//         emp_name : req.body.emp_name,
//         emp_contact: req.body.emp_contact,
//         emp_add: req.body.emp_add
//     }
//     console.log(empData);
//     const body = JSON.stringify(empData)
//     console.log(body);
//     const response = await fetch(host, {method: 'POST', body: body,headers: {'Content-Type': 'application/json'} });
//     const data = await response.json();
//     // console.log(data);
   
//     res.render('submitResponse', {data: data})
// })


// router.get('/list-employees', async(req, res)=>{
//     const response = await fetch(host, {headers: {'Content-Type': 'application/json'}});
//     const data = await response.json();
//     console.log(data);
//     res.render('listEmployee', {data: data})
// })


// router.get('/delete/:emp_id', async(req, res)=>{
//     const emp_id = req.params.emp_id
//     const params = {
//         emp_id: emp_id
//     }
//     const body = JSON.stringify(params)
//     const deleteResponse = await fetch(host, {method: 'DELETE', body: body, headers: {'Content-Type': 'application/json'}});
//     const data1 = await deleteResponse.json();
//     console.log(data1);
//     const response = await fetch(host, {headers: {'Content-Type': 'application/json'}});
//     const data = await response.json();
//     // console.log(data);
//     res.render('listEmployee', {data: data})
// })


// module.exports= router


const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

const host = 'http://10.142.0.5:8000';

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/addData', (req, res) => {
    res.render('addData');
});

router.post('/addData', async (req, res) => {
    try {
        const empData = {
            emp_name: req.body.emp_name,
            emp_contact: req.body.emp_contact,
            emp_add: req.body.emp_add
        };
        const response = await fetch(host, {
            method: 'POST',
            body: JSON.stringify(empData),
            headers: { 'Content-Type': 'application/json' }
        });
        const data = await response.json();
        res.render('submitResponse', { data });
    } catch (error) {
        console.error('Error adding data:', error);
        res.status(500).send('Error adding data. Please try again later.');
    }
});

router.get('/list-employees', async (req, res) => {
    try {
        const response = await fetch(host, { headers: { 'Content-Type': 'application/json' } });
        const data = await response.json();
        res.render('listEmployee', { data });
    } catch (error) {
        console.error('Error fetching employee list:', error);
        res.status(500).send('Error fetching employee list. Please try again later.');
    }
});

router.get('/delete/:emp_id', async (req, res) => {
    try {
        const emp_id = req.params.emp_id;
        const deleteResponse = await fetch(host, {
            method: 'DELETE',
            body: JSON.stringify({ emp_id }),
            headers: { 'Content-Type': 'application/json' }
        });
        const data1 = await deleteResponse.json();
        console.log(data1);
        const response = await fetch(host, { headers: { 'Content-Type': 'application/json' } });
        const data = await response.json();
        res.render('listEmployee', { data });
    } catch (error) {
        console.error('Error deleting employee:', error);
        res.status(500).send('Error deleting employee. Please try again later.');
    }
});

module.exports = router;

