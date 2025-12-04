---
title: "Improving Dapp Stability by Eliminating Dependencies to Centralized Services: A Complete Guide for Deployment of a React.js Application to GitHub Pages"
author: "Zain"
date: "2024-12-08"
image: "/images/deploy-react-app.webp"
excerpt: "Step-by-step guide to deploying a React.js application to GitHub Pages — ideal for decentralized web projects."
---

# Improving Dapp Stability by Eliminating Dependencies to Centralized Services: A Complete Guide for Deployment of a React.js Application to GitHub Pages

As we transition towards more decentralized solutions, moving projects to GitHub Pages for deployment has become an increasingly popular choice. Not only does it reduce the reliance on centralized service providers like Vercel, but it also increases resilience, censorship resistance, and long-term stability.

In this article, we will explore how to deploy a React.js application to GitHub Pages, and share some tricks and best practices that we’ve learned through this process. This tutorial will cover everything from configuring your React.js app for static export, to setting up automated deployment via GitHub Actions.

### Why GitHub Pages?
GitHub Pages is a great choice for hosting static websites because:

- Decentralization: It’s hosted on GitHub, a version control platform that allows for greater control over your code and deployment.
- Censorship Resistance: GitHub Pages, while centralized, provides a platform where developers can deploy content without relying on a third-party provider.
- Resilience: With GitHub’s global infrastructure, your project benefits from robust reliability and uptime.

This makes GitHub Pages a solid option for those looking to deploy their static sites with greater control and fewer dependencies.

## Setting Up Your React.js Project for GitHub Pages

**Follow Step 1 Only if using Vite.**

### Step 1: Configure vite.config.ts Base Path

Before deploying to GitHub Pages, if you are using the default url for gh-pages https://<username>.github.io/<repository-name>/ we need to make sure that the base path is set to the repo name.

Here’s how to configure your vite.config.ts:

```
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
// https://vite.dev/config/
export default defineConfig({
plugins: [react()],
base: '/your-base-path/',
});
```

**Key Configurations:**
- base Path: “/your-repository-name”: GitHub Pages serves content under a specific base path if you are using a repository (as opposed to a custom domain).

### Step 2: Add homepage to package.json

The step below is important! If you skip it, your app will not deploy correctly. Open your package.json and add a homepage field for your project:

```
"homepage": "https://myusername.github.io/my-app",
```

or for a GitHub user page:

```
"homepage": "https://myusername.github.io",
```

or for a custom domain page:

```
"homepage": "https://mywebsite.com",
```

If using CRA Keep in mind Create React App uses the homepage field to determine the root URL in the built HTML file.

### Step 3: Install gh-pages and add deploy to scripts in package.json

Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at `https://myusername.github.io/my-app`, run:

```
npm install - save gh-pages
```

Alternatively you may use yarn:

```
yarn add gh-pages
```

Add the following scripts in your package.json:

```
"scripts": {
+ "predeploy": "npm run build",
+ "deploy": "gh-pages -d build",
"start": "react-scripts start",
"build": "react-scripts build",
```

The predeploy script will run automatically before deploy is run.

#### Setting Up GitHub Actions for Deployment

Now that we’ve configured the React.js app, let’s automate the deployment process using GitHub Actions. GitHub Actions is a powerful tool for automating workflows, and it integrates perfectly with GitHub Pages to deploy your app whenever you push changes to the main branch.Go to your GitHub Pages configuration in the repository settings page and choose the source of deployment as “GitHub Actions”.

### Step 4: Create a GitHub Actions Workflow

Create a new file in your repository at .github/workflows/node.js.yml. This will contain the instructions for building and deploying your site to GitHub Pages.

Here is the sample workflow for deploying a React.js app to GitHub Pages:

```
# Simple workflow for deploying static content to GitHub Pages
name: Deploy static content to Pages
on:
# Runs on pushes targeting the default branch
push:
branches: ["main"]
# Allows you to run this workflow manually from the Actions tab
workflow_dispatch:
# Sets the GITHUB_TOKEN permissions to allow deployment to GitHub Pages
permissions:
contents: read
pages: write
id-token: write
# Allow one concurrent deployment
concurrency:
group: "pages"
cancel-in-progress: true
jobs:
# Single deploy job since we're just deploying
deploy:
environment:
name: github-pages
url: ${{ steps.deployment.outputs.page_url }}
runs-on: ubuntu-latest
steps:
- name: Checkout
uses: actions/checkout@v4
- name: Set up Node
uses: actions/setup-node@v4
with:
node-version: 20
cache: "npm"
- name: Install dependencies
run: npm ci
- name: Build
run: npm run build
- name: Setup Pages
uses: actions/configure-pages@v4
- name: Upload artifact
uses: actions/upload-pages-artifact@v3
with:
# Upload dist folder
path: "./dist"
- name: Deploy to GitHub Pages
id: deployment
uses: actions/deploy-pages@v4
```

#### Key Steps in the Workflow
Trigger Workflow:

- A push is made to the main branch.
- A manual trigger is initiated from the Actions tab (workflow_dispatch).

**Set Permissions:**
Grants the required permissions:

- contents: read: To read the repository’s content.
- pages: write: To enable deployment to GitHub Pages.
- id-token: write: For authentication during deployment.

Enforce Deployment Concurrency:

- Ensures that only one deployment runs at a time.
- Cancels any in-progress deployments if a new one starts.

Checkout Code:
- Checks out the repository code using the actions/checkout action.

Set Up Node.js:
- Configures the required Node.js environment:
- Sets the Node.js version to 20.
- Enables dependency caching using npm.

Install Dependencies:

- Installs project dependencies using:
npm ci

Build the App:

Builds the static files for the app using the build script:
- npm run build
- The output (typically the dist directory) contains the static files.

Configure GitHub Pages:

- Prepares the repository for deployment to GitHub Pages using actions/configure-pages.

Upload Build Artifact:

- Uploads the built static files (from the dist folder) as an artifact using actions/upload-pages-artifact.

Deploy to GitHub Pages:

- Deploys the static files to GitHub Pages using actions/deploy-pages.
- Outputs the deployment URL for reference.

## Deployment URL

Once your workflow runs successfully, your site will be deployed to GitHub Pages under the following URL:

`https://<your-github-username>.github.io/<your-repository-name>`

Deploying a React.js app to GitHub Pages might seem daunting at first, especially with the need for careful configuration of GitHub Actions. However, with this setup, you gain significant benefits in terms of decentralization and resilience.

This tutorial provided the steps to configure your app to set up the necessary vite.config.ts options, and automate deployment with GitHub Actions. By following these steps, you can seamlessly deploy your React.js projects with minimal reliance on centralized providers and make your project more robust in the long run.

Happy coding, and enjoy the power of decentralized web hosting with GitHub Pages!