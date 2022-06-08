let express = require('express');
let app = express();

// req = objeto de solicitud
// res = objeto de respuesta

app.get("/", (req, res) => {
    console.log("Route handler called")
    res.send("Hello Express");
});

app.listen(3001);

module.exports = app;