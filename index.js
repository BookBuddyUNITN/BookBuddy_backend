
import DB from "./database/db.js"
import * as dotenv from 'dotenv'

const envs = dotenv.config()

const db = new DB("backEnd",envs.parsed.MONGO_PASS)

db.run().catch(console.dir);
