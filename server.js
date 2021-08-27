const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/api/customers' , (req , res) => {
    res.send([
        {
            "id" : 1,
            "image" : 'https://placeimg.com/64/64/1',
            "name" : "이영면",
            "birthday" : "810518",
            "gender" : "남자",
            "job" : "무직"
          },
          {
            "id" : 2,
            "image" : 'https://placeimg.com/64/64/2',
            "name" : "이지연",
            "birthday" : "870710",
            "gender" : "남자",
            "job" : "산적"
          },
          {
            "id" : 3,
            "image" : 'https://placeimg.com/64/64/3',
            "name" : "윤은영",
            "birthday" : "880101",
            "gender" : "여자",
            "job" : "경찰"
          }
    ]);
})

app.listen(port , ()=> console.log(`Listening on port ${port}`));