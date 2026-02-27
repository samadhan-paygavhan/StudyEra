# Study Era - Full-Stack Online Learning Platform 🎓

Study Era is a robust MERN stack application designed to provide a seamless learning experience for students and a powerful management dashboard for instructors. It features secure payments, protected content streaming, and real-time search.

## 🚀 Key Features

- **Google OAuth 2.0 & JWT:** Secure, one-click authentication and role-based access control (RBAC).
- **Payment Integration:** Real-time, secure course enrollment powered by the **Razorpay API**.
- **Protected Content:** Secure video streaming using **Cloudinary** with server-side validation.
- **Real-time Search:** Instant course discovery using optimized client-side filtering.
- **Responsive UI:** Modern, mobile-first design built with **Tailwind CSS** and **Shadcn UI**.

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Shadcn UI, Axios
- **Backend:** Node.js, Express.js
- **Database:** MongoDB, Mongoose
- **Authentication:** Passport.js (Google Strategy), JSON Web Tokens (JWT)
- **Utilities:** Cloudinary, Razorpay API

## 📦 Installation & Setup

1. **Clone the repository:**

   ```bash
   git clone [https://github.com/samadhan-paygavhan/Study-Era.git](https://github.com/samadhan-paygavhan/Study-Era.git)
   ```

2. **Install Backend Dependencies:**

   ```bash
   cd backend
   npm install
   npm start
   ```

3. **Install Frontend Dependencies:**
   ```bash
   cd frontend
   npm install
   npm run dev
   ```

## 🔐 Environment Setup

To run this project, you will need to create a `.env` file in the root directory of your **backend** folder and add the following variables:

```env
MONGO_URI=your_mongodb_connection_string
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
RAZORPAY_KEY_ID=your_razorpay_key
JWT_SECRET=your_secret_key
```
