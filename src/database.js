import mongoose from 'mongoose'

export async function connect() {
	const db = await mongoose.connect(
		DB_URI, {
			keepAlive: true,
			useNewUrlParser: true,
			useUnifiedTopology: true
		},
		(err) => {
			if(err){
				console.log(err)
			} else {
				console.log('DB Connect')
			}
		}
	)
    return db
}