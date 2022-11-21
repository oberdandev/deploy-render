import express from 'express'
import path from 'path'

const app = express()
const PORT = process.env.PORT || 3000

const requestHandle = (req,res) => {
   if(req.url == '/'){
    res.send('oi')
    return
   }
   else
   {
    res.sendFile(path.resolve('./src/error.html'))
   }
}

app.use(requestHandle)

app.listen(PORT, ()=> {
    console.log('app is running at port ', PORT)
})

