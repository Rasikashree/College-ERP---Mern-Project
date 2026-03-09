# ===========================================
# DEPLOYMENT GUIDE: VERCEL + NETLIFY
# ===========================================

## BACKEND (Vercel) - https://vercel.com/rasikashrees-projects/college-erp

### Environment Variables to Set on Vercel:

CONNECTION_URL=mongodb+srv://rasikashree1991_db_user:Rasi@college-erp-system.cfc7i9h.mongodb.net/collegeErp?retryWrites=true&w=majority
PORT=5001
NODE_ENV=production
JWT_SECRET=sEcReT
FRONTEND_URL=https://college-erpsystem.netlify.app

### Steps:
1. Go to: https://vercel.com/rasikashrees-projects/college-erp/settings/environment-variables
2. Add each variable above
3. Redeploy: Deployments → Click "..." → Redeploy

---

## FRONTEND (Netlify) - https://college-erpsystem.netlify.app

### Environment Variables to Set on Netlify:

REACT_APP_SERVER_URL=https://college-erp-opal.vercel.app/

### Steps:
1. First, find your exact Vercel backend URL:
   - Go to Vercel dashboard
   - Look for "Domains" section
   - Copy the production URL (ends with .vercel.app)

2. Set variable on Netlify:
   - Go to: https://app.netlify.com/sites/college-erpsystem/configuration/env
   - Add variable: REACT_APP_SERVER_URL
   - Value: https://college-erp-opal.vercel.app/

3. Redeploy:
   - Go to: https://app.netlify.com/sites/college-erpsystem/deploys
   - Click "Trigger deploy" → "Deploy site"

---

## MONGODB ATLAS CONFIGURATION

1. Go to: https://cloud.mongodb.com/
2. Navigate to: Network Access
3. Click "Add IP Address"
4. Select "Allow access from anywhere" (0.0.0.0/0)
5. Click "Confirm"

---

## TESTING YOUR DEPLOYMENT

1. Wait for both deployments to complete
2. Visit: https://college-erpsystem.netlify.app/login/adminlogin
3. Login with:
   - Username: Admin
   - Password: 123
4. If login works, deployment is successful!

---

## TROUBLESHOOTING

### Backend not responding:
- Check Vercel logs for errors
- Verify all environment variables are set
- Check MongoDB connection string is correct
- Verify MongoDB Atlas allows connections from 0.0.0.0/0

### Frontend can't connect to backend:
- Verify REACT_APP_SERVER_URL is set correctly on Netlify
- Check the URL has trailing slash (/)
- Open browser console (F12) to see network errors
- Test backend directly: https://college-erp-opal.vercel.app/

### Login fails:
- Check browser console for errors
- Verify JWT_SECRET is set on Vercel
- Check MongoDB Atlas credentials
