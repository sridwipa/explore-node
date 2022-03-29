const express = require('express');
const { v4: uuidv4, v1: uuidv1, version: uuidVersion } = require('uuid');
const port = 9000;
const app = express();
const MY_NAMESPACE = '1b671a64-40d5-491e-99b0-da01ff1f3341';

uuidv4(); // ? '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
console.log(uuidv1());
console.log('Hello world');
console.log(uuidv1());

console.log(uuidVersion("8f0c9ebd-964e-11ec-b510-0a752a2c5b5a"));
app.listen(port, () => console.log('Server is running on port : ' + port))