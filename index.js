const csv = require ('csv-parser')
const fs = require ('fs')
const results = []

fs.createReadStream('./restaurantsa9126b3.csv')
.pipe(csv())
.on('data', (date) => results.push(data))
.on('end', () => {
    console.log(results)
});