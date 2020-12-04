//root file for server for creating web server using tool like express library!
//imoprt express library
const path=require('path');
const express=require('express');
//express is just a function to apply this in our Application  save this in a variable
const app=express();
const port=3000;
const path_HTML=path.join(__dirname, '../public')
app.use(express.static(path_HTML));

//setting the confugration for dyanamic render static element
app.set('view engine','hbs');




//Sending normal Text
app.get('',(req,res)=>{
    //res.send(`Hello Express!`);
    res.render('index',{
        title:'Weather App',
        description:'Sandeep Made this'

    })
})

//sending HTML tag
app.get('/home',(req,res)=>{
    //res.send('<h1>Hello Welcome to home page</h1>')
     res.render('home',{
         title:"Weather App Home page",
         description:'Developed by Sandeep '
     })

  })

app.get('/about',(req,res)=>{
    //res.send('Hey Satya  i have created first WEb server using Express! it wiil give too much fun')
  // res.send('<title>About</title>');
   // res.send(`fuck you`)
   res.render('about',{
       title:'WebServer',
       createdBy:'Sandeep Js Developer'
   })
  

})

app.get('/help',(req,res)=>{
    res.send('If you need any help regarding learning Express i will be there !! here Node js code and some HHTp methods are used! just read documention and apply on application through VSC');

})

//Sending json format..data we send object express will stringFy to json .
app.get('/weather',(req,res)=>{
    res.send([{Location:'Bhubaneswar',Forcacast:'its 25 degree celcius'}])
})



app.listen(port,()=>{
    console.log(`Server start on localhost with port:3000`)
})