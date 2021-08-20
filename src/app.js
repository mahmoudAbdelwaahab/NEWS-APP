const { response } = require('express')
const express = require('express')

const app = express()
app.set('view engine' , 'hbs')

const request = require('request')
const hbs = require('hbs')

const port = 3000


/////////////////////////
const path = require('path')

const runPath = path.join(__dirname,'../templates/views')
app.set('views', runPath)



 /////////////get////////////////////////
app.get('',(req,res)=>{

  /////url///////////
  const url = 'https://newsapi.org/v2/top-headlines?country=eg&category=entertainment&apiKey=7e9595b60f7940409a38495a418224f5'
  
  request({url,json:true} , (error , response)=>{
  
    ////// low level error /////
      if(error){
         return res.send('error connect to service')
      }
  //////  api error//////
      else if(response.body.message){
          return res.send('check your URL ')
      }
//////// api data /////
      else{
          data=response.body.articles
          res.render('index',{data:data})
      }
  })

})
  
//////////////////port////////////////////////////////

app.listen(port,()=>{
  console.log('server is running')
})