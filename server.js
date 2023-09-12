const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('emily-portfolio/dist'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'emily-portfolio', 'dist', 'index.html'));
    });
}

app.listen(port, () => {
  console.log('Server is listening to port ' + port);
});