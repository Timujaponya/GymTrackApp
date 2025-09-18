Tabii Arda 👍 Senin projen için güzel bir **README.md** tasarladım. Hem proje açıklaması, hem kurulum adımları, hem de endpoint’lere dair temel bilgi içeriyor.

---

```markdown
# Fitness Tracking System (MERN Stack)

## 📌 Project Overview
This project is a **Fitness Tracking System** built with the MERN stack (MongoDB, Express.js, React, Node.js).  
It allows users to register, manage exercises, create workout plans, log training sessions, track body measurements, and view analytical reports such as **weekly training volume**, **1RM estimations**, and **streak tracking**.  

The backend follows a **layered architecture** with repository → service → controller layers for clean separation of concerns and maintainability.

---

## 🚀 Features
- **User Authentication** (JWT-based login/register)  
- **Exercise Management** (CRUD with muscle groups, equipment, tags)  
- **Workout Plans** (split by day and exercises)  
- **Sessions & Sets** (weight, reps, RPE, notes)  
- **Body Measurements** (weight, waist, body fat)  
- **Reports & Analytics**  
  - Weekly training volume  
  - 1RM estimation (Epley formula)  
  - Workout streaks  
- **Validation & Error Handling**  
- **Indexes for performance** (text search, date filters)

---

## 🛠️ Tech Stack
- **Backend:** Node.js, Express.js, Mongoose  
- **Database:** MongoDB Atlas  
- **Frontend (planned):** React + Vite  
- **Auth:** JSON Web Tokens (JWT)  
- **Validation:** Express Validator / Zod  
- **Documentation:** Swagger / OpenAPI  

---

## 📂 Project Structure
```

src/
config/           # Environment & database config
models/           # Mongoose schemas (User, Exercise, Plan, Session, Measurement)
repositories/     # Database queries
services/         # Business logic
controllers/      # Request/response handling
routes/           # Express route definitions
middleware/       # Auth, validation, error handlers
utils/            # Helper functions (1RM, volume calc)
app.js
server.js

````

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/fitness-tracking-system.git
   cd fitness-tracking-system
````

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the root directory:

   ```env
   MONGO_URI=your-mongodb-connection-string
   PORT=3000
   JWT_SECRET=your-secret-key
   ```

4. **Start the server**

   ```bash
   npm run dev   # with nodemon
   npm start     # normal start
   ```

Server will run at:
👉 `http://localhost:3000`

---

## 📡 API Endpoints (Examples)

### Auth

* `POST /api/auth/register` → Register new user
* `POST /api/auth/login` → Login and get JWT

### Exercises

* `POST /api/exercises` → Create new exercise
* `GET /api/exercises` → List all exercises (with filters)
* `GET /api/exercises/:id` → Get exercise by ID
* `PATCH /api/exercises/:id` → Update exercise
* `DELETE /api/exercises/:id` → Delete exercise

### Plans

* `POST /api/plans` → Create workout plan
* `GET /api/plans?active=true` → Get active plans

### Sessions

* `POST /api/sessions` → Log a workout session
* `GET /api/sessions?from=&to=` → List sessions in date range

### Measurements

* `POST /api/measurements` → Add body measurement
* `GET /api/measurements` → List measurements

### Reports

* `GET /api/reports/weekly-volume` → Weekly training volume
* `GET /api/reports/one-rep-max?exerciseId=` → 1RM estimation
* `GET /api/reports/streak` → Workout streak

---

## 📊 Example Request

```http
POST /api/sessions
Authorization: Bearer <token>
Content-Type: application/json

{
  "date": "2025-09-08T15:00:00.000Z",
  "durationMin": 70,
  "sets": [
    { "exercise": "66dfe2...a1", "weightKg": 80, "reps": 5, "rpe": 8 },
    { "exercise": "66dfe2...b2", "weightKg": 100, "reps": 3, "rpe": 9 }
  ]
}
```

---

## 📅 Development Timeline

* **Day 1:** Project setup, database models
* **Day 2:** Repository & service layers
* **Day 3:** Controllers & routes
* **Day 4:** Authentication & middleware
* **Day 5:** Reports & finalization (analytics, seed data, Swagger docs)

---

## 📖 Future Improvements

* Role-based access (admin, user)
* File uploads (progress photos)
* CSV/Excel export of sessions & measurements
* Notifications (e.g., PR achieved)
* Mobile client (React Native / Flutter)

---

## 👨‍💻 Author

**Arda Timuçin Acar**
Backend Developer | MERN Stack | .NET | Spring Boot
GitHub: [Timujaponya](https://github.com/Timujaponya)
