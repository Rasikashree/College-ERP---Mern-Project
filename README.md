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
