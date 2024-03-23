import express from 'express';

const PORT = process.env.PORT || 3001;

const app = express();

app.get('/', (req, res) => {
    res.send('You are a student at Concordia University and currently a technology analyst intern at Morgan Stanley. You suddenly realize that you have a bunch of issues - red rashes, high fever, a headache, a stomachache. Also, you apparently for some reason can\'t see very clearly.');
}); 

