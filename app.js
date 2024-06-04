const express=require('express');
const path=require('path');
const fs=require('fs');``

const app = express();
const port=80;

//EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));//for serving static files
app.use(express.urlencoded());

//PUG SPECIFIC STUFF
app.set('view engine', 'pug');//set the template engine as pug
app.set('views', path.join(__dirname, 'views'));// set the views directory





// HIDE IN LECTURE 11,UNHIDE IN LEC 10
// our pug demo endpoint 
// app.get('/demo', (req, res) => {
//   res.status(200).render('demo', { title: 'Hey Ojusva', message: 'Hello there! Thanks to telling me how to use pug ' })
// }) 
// //server using express
// app.get('/', (req, res)=>{
//   res.status(200).send("This is my first express app with wccd on home page.");
// });

// app.get('/about', (req, res)=>{
//   res.send("This is my first express app with wccd about section ");
// });

// app.get('/this', (req, res)=>{
//   res.status(400).send("this page is not found");
// });
// app.post('/about', (req, res)=>{
//   res.send("This is my first express app with wccd about section using post method ");
// });



//ENDPOINTS
app.get('/', (req, res)=>{
  const con='this is the best to using in the internet so far so use it wisely!';
  const params={'title': 'pubg is the worst game','content':con};

  res.status(200).render('index.pug',params);

}); 

app.post('/', (req, res)=>{
  name=req.body.name;
  age=req.body.age;
  gender=req.body.gender;
  address=req.body.address;
  more=req.body.more;

  let outputToWrite=`the name of the client is ${name} and,${age} years old, ${gender},residing at ${address}.more about him/her: ${more}`;

  fs.writeFileSync('output.txt',outputToWrite)

  // console.log(req.body)
  const params={'message': 'your form has been submitted successfully'};
  res.status(200).render('index.pug',params);

});



//START THE SERVER
app.listen(port,()=>{
  console.log(`the application started successfully on port ${port}`);
})