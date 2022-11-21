import express from 'express'

const app = express()
const PORT = process.env.PORT || 3000

app.use((req,res) => {
    res.send('meu primeiro deploy!')
})

app.listen(PORT, ()=> {
    console.log('app is running at port ', PORT)
})

