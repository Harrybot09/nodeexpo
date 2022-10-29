const exp = require('express')
const app = exp()
app.use(exp.json())

const PORT = process.env.PORT || 8080
app.listen(PORT, ()=>{
    console.log('i am working');
});