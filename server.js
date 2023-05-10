const express = require('express')
const app = express()
//directing our server to look in the public file in the front end
app.use(express.static(`${__dirname}/public`))


app.listen(4000, () => console.log(`server running on 4000`))
