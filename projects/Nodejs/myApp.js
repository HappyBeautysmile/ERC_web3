let express = require('express');
let app = express();

// req = objeto de solicitud
// res = objeto de respuesta

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(3000, function() {
    console.log("App de ejemplo, listeing in port 3000");
});

module.exports = app;