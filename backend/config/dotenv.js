import dotenv from 'dotenv';

dotenv.config();

const port = process.env.PORT || 3000;
const mongo_uri = process.env.MONGO_URI;
const jwt_secret = process.env.JWT_SECRET;

export default { mongo_uri, port, jwt_secret };