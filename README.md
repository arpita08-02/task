# Hello API

## Overview
A simple Node.js/Express backend API with a single endpoint `/sayHello` that returns `{ "message": "Hello User" }` and runs on port 80.

---

## Project Structure
```
task/
├── app.js
├── package.json
├── .gitignore
├── README.md
└── .github/
    └── workflows/
        └── deploy.yml
```

---

## Setup & Local Development
1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Run locally (requires sudo for port 80):**
   ```bash
   sudo npm start
   ```
3. **Test endpoint:**
   ```bash
   curl http://localhost/sayHello
   # Response: {"message":"Hello User"}
   ```

---

## GitHub Repository Setup
1. **Initialize and push to a private repo:**
   ```bash
   git init
   git remote add origin [private-repo-url]
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git push -u origin main
   ```
2. **Ensure your repository is private.**
3. **No secrets or credentials are committed.**

---

## GitHub Actions Deployment
- Deployment is automated via `.github/workflows/deploy.yml`.
- **On every push to `main`:**
  - Code is securely copied to the VM using SCP (no git on VM).
  - Node.js is installed if missing.
  - Dependencies are installed and the app is started on port 80.

### **Required GitHub Secrets:**
- `VM_HOST` = `34.10.127.166`
- `VM_USERNAME` = `arpita`
- `VM_PASSWORD` = `12345`

**Add these in your GitHub repo settings under Settings > Secrets and variables > Actions.**

---

## Testing & Validation
1. **After deployment, test the API:**
   ```bash
   curl http://34.10.127.166/sayHello
   # Should return: {"message":"Hello User"}
   ```
2. **Check GitHub Actions:**
   - Ensure the workflow run is successful.
   - Check for errors in the Actions tab.

---

## Troubleshooting
- **Port 80 Permission Error:** Ensure the workflow uses `sudo` to start the app on port 80.
- **SSH Connection Issues:** Double-check `VM_HOST`, `VM_USERNAME`, and `VM_PASSWORD` secrets.
- **Node.js Not Installed:** The workflow installs Node.js if missing.
- **Dependency Failures:** Ensure `npm install` runs after copying files.
- **App Not Running:** Check `app.log` on the VM for errors: `cat ~/api/app.log`

---

## Security Considerations
- **No secrets are present in the repository.**
- **All credentials are managed via GitHub Secrets.**
- **No manual steps or git commands are run on the VM.**

---

## Submission
- **Provide your private repo link.**
- **Zip and share the project directory (excluding node_modules).**
- **No secrets or sensitive data in the zip or repo.**
