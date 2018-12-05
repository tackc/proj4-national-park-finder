require('dotenv').config();
const mongoose = require('mongoose');
const Park = require('../models/Park');

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });

Parks.deleteMany({} (err) => err ? console.log(err) : 'Collection removed')

// const PARKS = []
// for (let i = 0; i < 256; i += 16) {
// 	let r = i
// 	for (let j = 0; j < 256; j += 16) {
// 		let g = j
// 		for (let k = 0; k < 256; k += 16) {
// 			let b = k
// 			Parks.push({ r, g, b })
// 		}
// 	}
// }

Park.insertMany(Parks, (err, parks) => {
	if (err) console.log(err)
})