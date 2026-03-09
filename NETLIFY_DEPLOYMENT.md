# NETLIFY DEPLOYMENT GUIDE - College ERP Frontend

## Prerequisites
✅ GitHub repository with your code
✅ Backend deployed on Vercel: https://college-erp-opal.vercel.app
✅ Netlify account (free): https://app.netlify.com

---

## Option 1: Deploy via Netlify Dashboard (Recommended)

### Step 1: Prepare Your Code
```bash
# Make sure all changes are committed and pushed
git add .
git commit -m "Ready for Netlify deployment"
git push origin main
```

### Step 2: Connect to Netlify

1. Go to: https://app.netlify.com
2. Click **"Add new site"** → **"Import an existing project"**
3. Choose **"Deploy with GitHub"**
4. Authorize Netlify to access your GitHub account
5. Select your repository: **"College-ERP-main"** or similar

### Step 3: Configure Build Settings

Netlify should auto-detect settings from `netlify.toml`, but verify:

- **Base directory**: `client`
- **Build command**: `npm run build`
- **Publish directory**: `client/build`

### Step 4: Add Environment Variables

Before deploying, click **"Add environment variables"**:

```
Key: REACT_APP_SERVER_URL
Value: https://college-erp-opal.vercel.app/
```

⚠️ **IMPORTANT**: Include the trailing slash `/`

### Step 5: Deploy

1. Click **"Deploy [your-site-name]"**
2. Wait 2-3 minutes for build to complete
3. Netlify will show your live URL: `https://[random-name].netlify.app`

### Step 6: Custom Domain (Optional)

1. Go to **Site settings** → **Domain management**
2. Click **"Options"** → **"Edit site name"**
3. Change to: `college-erpsystem` (or your preferred name)
4. Your URL becomes: `https://college-erpsystem.netlify.app`

---

## Option 2: Deploy via Netlify CLI

### Step 1: Install Netlify CLI
```bash
npm install -g netlify-cli
```

### Step 2: Login
```bash
netlify login
```

### Step 3: Initialize
```bash
cd "D:\My Project\College-Erp-main"
netlify init
```

Follow prompts:
- Choose: **"Create & configure a new site"**
- Choose your team
- Site name: `college-erpsystem` (or any name)
- Build command: `npm run build`
- Directory: `client/build`
- Functions: (leave empty)

### Step 4: Add Environment Variable
```bash
netlify env:set REACT_APP_SERVER_URL "https://college-erp-opal.vercel.app/"
```

### Step 5: Deploy
```bash
netlify deploy --prod
```

---

## Option 3: Update Existing Netlify Site

If you already have a site at https://college-erpsystem.netlify.app:

### Update Environment Variables
1. Go to: https://app.netlify.com/sites/college-erpsystem/configuration/env
2. Check if `REACT_APP_SERVER_URL` exists
3. If not, click **"Add a variable"**:
   - Key: `REACT_APP_SERVER_URL`
   - Value: `https://college-erp-opal.vercel.app/`
4. If exists, verify it has the correct value with trailing slash

### Trigger Manual Redeploy
1. Go to: https://app.netlify.com/sites/college-erpsystem/deploys
2. Click **"Trigger deploy"** → **"Clear cache and deploy site"**
3. Wait 2-3 minutes for build to complete

---

## Verify Deployment

After deployment completes:

1. Visit: https://college-erpsystem.netlify.app/login/adminlogin
2. Login with:
   - **Username**: `Admin` (capital A)
   - **Password**: `123`
3. If login succeeds → ✅ Deployment successful!

---

## Troubleshooting

### Build Fails
- Check build logs in Netlify dashboard
- Verify `netlify.toml` exists in root directory
- Verify `client/package.json` has `"build": "react-scripts build"`

### White Screen / Blank Page
- Check browser console (F12) for errors
- Verify `REACT_APP_SERVER_URL` is set correctly
- Check if backend is running: https://college-erp-opal.vercel.app/

### Login Fails
- Open browser console (F12) → Network tab
- Check if API calls go to correct backend URL
- Verify backend environment variables are set on Vercel
- Check CORS settings in backend

### API Errors
- Verify backend is deployed and running
- Test backend directly: https://college-erp-opal.vercel.app/api/admin/login
- Check MongoDB Atlas allows connections from 0.0.0.0/0
- Verify environment variable has trailing slash

---

## Current Configuration

Your project is configured with:

**Frontend (Netlify)**
- URL: https://college-erpsystem.netlify.app
- Build from: `client` folder
- Environment: `REACT_APP_SERVER_URL=https://college-erp-opal.vercel.app/`

**Backend (Vercel)**
- URL: https://college-erp-opal.vercel.app
- Deploy from: `server` folder
- Environment: MongoDB connection + JWT secret

**Files for Netlify**
- `netlify.toml` (root) - Build configuration
- `client/.env.production` - Production environment template
- `client/public/_redirects` - SPA routing

---

## Continuous Deployment

Once connected, Netlify automatically deploys when you push to GitHub:

```bash
# Make changes to your code
git add .
git commit -m "Update feature"
git push origin main

# Netlify automatically builds and deploys
# Check status: https://app.netlify.com/sites/college-erpsystem/deploys
```

---

## Support

If you encounter issues:

1. Check Netlify build logs: https://app.netlify.com/sites/college-erpsystem/deploys
2. Check browser console (F12) for frontend errors
3. Check Vercel logs for backend errors
4. Verify environment variables are set on both platforms

**Need the complete deployment checklist? See `DEPLOYMENT.md` in root directory.**
