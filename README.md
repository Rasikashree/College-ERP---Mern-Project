# COLLEGE ERP

College ERP using MERN Stack

# Setup and Installation

## Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- MongoDB Atlas account (or local MongoDB installation)

## Installation Steps

### 1. Clone the Repository
```bash
git clone <repository-url>
cd College-Erp-main
```

### 2. Install Dependencies

#### Install Server Dependencies
```bash
cd server
npm install
```

#### Install Client Dependencies
```bash
cd ../client
npm install
```

### 3. Environment Configuration

#### Server Environment Setup
1. Navigate to the `server` folder
2. Create a `.env` file in the server folder
3. Copy the content from `.env.example`:
```env
CONNECTION_URL=mongodb+srv://<username>:<password>@<cluster>/<db>?retryWrites=true&w=majority
PORT=5001
```
4. Replace `<username>`, `<password>`, `<cluster>`, and `<db>` with your actual MongoDB Atlas credentials
5. Keep the PORT as `5001` (or change both server and client API base URL accordingly)

## Running the Project

**Important:** You need to run both the backend server and frontend client simultaneously in separate terminals.

### Terminal 1 - Start Backend Server
```bash
cd server
npm start
```
The server will start on `http://localhost:5001`

### Terminal 2 - Start Frontend Client
```bash
cd client
npm run start
```
The client will start on `http://localhost:3000` and open in your default browser.

## Default Login Credentials

After successfully running the server for the first time, a default admin account is automatically created:

**Admin Login:**
- Username: `Admin`
- Password: `123`
- Login URL: `http://localhost:3000/login/adminlogin`

**Note:** The username is case-sensitive (capital 'A' in Admin).

## Accessing the Application

1. **Admin Portal:** `http://localhost:3000/login/adminlogin`
2. **Faculty Portal:** `http://localhost:3000/login/facultylogin`
3. **Student Portal:** `http://localhost:3000/login/studentlogin`

## Troubleshooting

### Login Issues
- Ensure both backend (port 5001) and frontend (port 3000) servers are running
- Clear browser cache and refresh (`Ctrl + Shift + R`)
- Check browser console and network tab for error details
- Verify MongoDB connection string in `.env` file

### Port Already in Use
If you get "Port already in use" error:
- Stop any existing Node processes on that port
- Or change the PORT in server `.env` and update API base URL in `client/src/redux/api/index.js`

### Dependencies Issues
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

## Deployment

This MERN stack application requires **separate deployments** for frontend and backend.

### Deploy Backend (Server)

#### Option 1: Deploy to Render.com (Recommended - Free Tier Available)

1. Create account on [Render.com](https://render.com)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name:** `college-erp-backend` (or any name)
   - **Root Directory:** `server`
   - **Environment:** `Node`
   - **Build Command:** `npm install`
   - **Start Command:** `npm start`
5. Add Environment Variables:
   - `CONNECTION_URL`: Your MongoDB Atlas connection string
   - `PORT`: `5001` (or leave empty to use Render's default)
6. Click "Create Web Service"
7. Copy the deployed backend URL (e.g., `https://college-erp-backend.onrender.com`)

#### Option 2: Deploy to Railway.app

1. Create account on [Railway.app](https://railway.app)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables in Settings
5. Set root directory to `server` in Settings
6. Copy the deployed URL

### Deploy Frontend (Client)

#### Option 1: Deploy to Netlify (Recommended)

1. Push your code to GitHub (including `netlify.toml` file created above)
2. Go to [Netlify](https://netlify.com) and sign in
3. Click "Add new site" → "Import an existing project"
4. Connect to your GitHub repository
5. Netlify will auto-detect settings from `netlify.toml`
6. Add Environment Variable:
   - **Key:** `REACT_APP_SERVER_URL`
   - **Value:** Your deployed backend URL (e.g., `https://college-erp-backend.onrender.com/`)
7. Click "Deploy site"

#### Option 2: Deploy to Vercel

1. Push your code to GitHub (including `vercel.json` file created above)
2. Go to [Vercel](https://vercel.com) and sign in
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Vercel will auto-detect settings from `vercel.json`
6. Add Environment Variable:
   - **Key:** `REACT_APP_SERVER_URL`
   - **Value:** Your deployed backend URL (e.g., `https://college-erp-backend.onrender.com/`)
7. Click "Deploy"

### Important Deployment Notes

⚠️ **CRITICAL:** After deploying the backend, you MUST update the frontend environment variable `REACT_APP_SERVER_URL` with your actual backend URL, then redeploy the frontend.

⚠️ **MongoDB Atlas:** Ensure your MongoDB Atlas cluster allows connections from anywhere (0.0.0.0/0) or add your deployment platform's IP addresses to the whitelist.

⚠️ **CORS:** The backend is already configured with CORS enabled for all origins. For production, consider restricting to your frontend domain only.

### Post-Deployment Checklist

- [ ] Backend is deployed and accessible
- [ ] Frontend environment variable `REACT_APP_SERVER_URL` points to deployed backend
- [ ] MongoDB Atlas allows connections from deployment platform
- [ ] Default admin account created (check backend logs)
- [ ] Can login with `Admin / 123` credentials
- [ ] Test all features (add student, faculty, marks, etc.)

# TechStack

1. Reactjs
2. Tailwind CSS
3. MongoDB
4. Express.js
5. Redux
6. Material UI Icons
7. JWT

# Features

1. Fully Functional Admin, Faculty and Student options
2. Login feature using JWT
3. User authentication using JWT
4. Admin can Update profile details, password in profile section
5. Admin can add delete or get any student, admin or faculty
6. Admin can add new departments and subjects
7. Admin can create new notices
8. Faculty can Update profile details, password in profile section
9. Faculty can create new test, mark attendance or students and also upload marks of created tests
10. Student can Update profile details, password in profile section
11. Student can check their attendance, marks and subject list
12. Error display feature available with form validation
14. Modern UI

# Features to be added later in the future

1. Mobile Responsiveness
2. Sections other than academics
3. More freedom to admin while adding new students,admins,faculties or subjects

# Preview

Admin Screens

![Admin Dashboard](client/public/Screenshot%20(144).png)
![Admin Panel](client/public/Screenshot%20(145).png)

Faculty Screens

![Faculty Dashboard](client/public/Screenshot%20(137).png)
![Faculty Actions](client/public/Screenshot%20(138).png)

Student Screens

![Student Dashboard](client/public/Screenshot%20(139).png)
![Attendance/Marks](client/public/Screenshot%20(140).png)
![Subject List](client/public/Screenshot%20(141).png)
