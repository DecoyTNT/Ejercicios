const express = require('express');
const app = express();

app.use(express.json());

app.post('/palindrome', (req, res) => {
    try {
        let x = 0;
        const phrase = req.body.phrase;

        const array = phrase.toLowerCase().replace(/ /g, "").split("");

        for (let i = 0; i < array.length; i++) {
            if (array[i] !== array[array.length - 1 - i]) {
                x = 1;
            }
        }

        if (x === 0) {
            res.json({
                palindrome: true
            });
        } else {
            res.json({
                palindrome: false
            });
        }

    } catch (error) {
        console.log(error);
    }

});


app.listen(4000);