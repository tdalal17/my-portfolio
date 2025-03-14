# Instructions to push your code to GitHub

Follow these steps to push your portfolio website to GitHub and start the GitHub Pages workflow:

## 1. Create a new repository on GitHub
- Go to https://github.com/new
- Name it "my-portfolio"
- Make it public
- Don't initialize with a README (since we already have one)
- Click "Create repository"

## 2. Initialize Git in your local project (if not already done)
```bash
git init
```

## 3. Add all files to Git
```bash
git add .
```

## 4. Commit the files
```bash
git commit -m "Initial commit: Portfolio website with Next.js and GitHub Pages configuration"
```

## 5. Add the remote repository
```bash
git remote add origin https://github.com/tdalal17/my-portfolio
```
(Replace YOUR_USERNAME with your actual GitHub username)

## 6. Push to GitHub
```bash
git push -u origin master
```
(If your default branch is "master" instead of "main", use "master" in the command above)

## 7. Set up GitHub Pages
- Go to your repository on GitHub
- Go to Settings > Pages
- Under "Build and deployment", select "GitHub Actions" as the source
- The workflow we've already set up in .github/workflows/deploy.yml will handle the deployment

## 8. Trigger the workflow
- You can manually trigger the workflow by going to the "Actions" tab in your repository
- Click on "Deploy to GitHub Pages" workflow
- Click "Run workflow" and select the main branch

Your portfolio website should now be deployed to GitHub Pages at https://YOUR_USERNAME.github.io/my-portfolio/
