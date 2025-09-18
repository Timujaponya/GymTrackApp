import jwt from "jsonwebtoken";
import dotenv from "../config/dotenv.js";
const { jwt_secret } = dotenv;

export default function auth(req, res, next) {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ error: "Yetkilendirme gerekli" });
    }

    const token = authHeader.split(" ")[1];
    try {
        const decoded = jwt.verify(token, jwt_secret);
        req.user = decoded; // Kullanıcı bilgilerini req.user'a ekle
        next();
    } catch (err) {
        return res.status(401).json({ error: "Geçersiz veya süresi dolmuş token" });
    }
}