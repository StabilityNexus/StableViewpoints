---
title: "Improving Dapp Stability by Eliminating Dependencies to Centralized Services: A Complete Guide to Deploying a Next.js Application to GitHub Pages"
author: "Anjali Jha"
date: "2024-12-21"
image: "/images/deploy-next-app.png"
excerpt: "Comprehensive guide to boosting DApp stability by removing reliance on centralized services and embracing decentralized infrastructure."
---

# Improving Dapp Stability by Eliminating Dependencies to Centralized Services: A Complete Guide to Deploying a Next.js Application to GitHub Pages

As we transition towards more decentralized solutions, moving projects to GitHub Pages for deployment has become an increasingly popular choice. Not only does it reduce the reliance on centralized service providers like Vercel, but it also increases resilience, censorship resistance, and long-term stability.

In this article, we will explore how to deploy a Next.js application to GitHub Pages, and share some tricks and best practices that we’ve learned through this process. This tutorial will cover everything from configuring your Next.js app for static export, to setting up automated deployment via GitHub Actions.

### Why GitHub Pages?

GitHub Pages is a great choice for hosting static websites because:

- Decentralization: It’s hosted on GitHub, a version control platform that allows for greater control over your code and deployment.
- Censorship Resistance: GitHub Pages, while centralized, provides a platform where developers can deploy content without relying on a third-party provider.
- Resilience: With GitHub’s global infrastructure, your project benefits from robust reliability and uptime.

This makes GitHub Pages a solid option for those looking to deploy their static sites with greater control and fewer dependencies to centralized services. Every centralized service is a source of potential instability for an application, because failure in that service results in failure of the application. Therefore, by reducing such dependencies, we are making applications ultimately more stable.

### Prerequisites

Before starting, ensure you have the following:

- Node.js installed on your local machine.
- A GitHub account with an existing repository to host the application.
- Basic understanding of Next.js and GitHub Actions.
- Installed Git on your system to manage version control.

## Setting Up Your Next.js Project for GitHub Pages
### Step 1: Configure next.config.mjs for Static Export
Before deploying to GitHub Pages, we need to make sure that your Next.js application is configured for static export. The goal is to export the site as static HTML files, which is the format GitHub Pages can serve.

Here’s how to configure your `next.config.mjs`:

```
const nextConfig = {
output: 'export', // Tells Next.js to export the app statically
distDir: 'out', // Output directory for the static files
images: {
unoptimized: true, // Disables Next.js image optimization (required for static export)
loader: "custom", // Custom image loader for specific handling
loaderFile: "./src/loaders/cloudinary-loader.ts", // Path to the custom image loader
},
reactStrictMode: true, // Optional: Enables React Strict Mode
basePath: "/your-repository-name", // GitHub Pages requires the basePath for deployment under a repository. In case of custom domain name the basePath is not required
};
export default nextConfig;
```

#### Key Configurations:
- output: ‘export’: This setting tells Next.js to export the app as a static site.
distDir: ‘out’: This specifies the output folder (out), where static files will be generated after building the app.
- images: { unoptimized: true }: This disables automatic image optimization as it’s not supported in static export mode.
- basePath: “/your-repository-name”: GitHub Pages serves content under a specific base path if you are using a repository (as opposed to a custom domain).
- loaderFile:”./src/loaders/cloudinary-loader.ts” and loader: “custom” : This configuration is for setting up a custom image loader. In this case, it references a cloudinary-loader.ts file located in the src/loaders/ directory, where you can configure the image loading behavior for Cloudinary or any other service.

#### Handling Dynamic Pages with Static Generation

**Where should generateStaticParams be used?**

The generateStaticParams function is used in dynamic route files to pre-render pages for known dynamic paths during the build process. These files are located in the app directory and correspond to dynamic route segments like:

- app/id/[param]/page.tsx
- app/blog/[slug]/page.tsx
- app/category/[id]/page.tsx

**Example Use Case**

For a dynamic route like https://example.com/id/[param], where param can be any number, you can generate a finite set of pages at build time:

```
export async function generateStaticParams() {
const params = Array.from({ length: 100 }, (_, i) => i.toString()); // IDs 0 to 99
return params.map((param) => ({ param }));
}
```

For dynamic IDs fetched from an API:

```
export async function generateStaticParams() {
const data = await fetch('https://example.com/api/ids').then((res) => res.json());
return data.map((id: string) => ({ param: id }));
}
```

**Can we statically generate an infinite number of pages?**

No, it’s impractical and inefficient to generate an infinite or extremely large number of pages. This increases build times and bloats the deployment.

Recommended Solutions:

1. Pre-render Critical Pages: Use generateStaticParams for pages that are frequently accessed.
2. Incremental Static Regeneration (ISR): Enable ISR to dynamically generate pages on demand:

```
export const revalidate = 3600; // Revalidate every hour
```

3. Fallback for Non-Pre-Rendered Pages: Handle less-accessed pages dynamically using fallback options:

- Blocking fallback: Dynamically render and cache the page on first request.
- On-demand Revalidation: Use Next.js APIs to trigger revalidation for specific pages.

**Will sensitive data get exposed in static pages?**

Yes, sensitive data included during the static rendering process (e.g., in getStaticProps or generateStaticParams) will be exposed in the output.

Precaution:

- Avoid including sensitive information in props or static output.
- Use API keys or secrets exclusively on the server side.

## Configuring GitHub Secrets and Adding Environment Variables
### Step 1: Add GitHub Secrets

Store sensitive data like API keys securely in GitHub Secrets to prevent exposure in your codebase.

1. Store sensitive data like API keys securely in GitHub Secrets to prevent exposure in your codebase.
2. Go to Settings > Secrets and variables > Actions.
3. Click New repository secret and add your secret (e.g., ETHERSCAN_API_KEY).
4. Save the secret.

### Step 2: Reference Secrets in GitHub Actions

Secrets can be securely referenced in your GitHub Actions workflow using the syntax secrets.<SECRET_NAME>.

Example: yaml

```
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Build the Next.js app
        env:
          ETHERSCAN_API_KEY: ${{ secrets.ETHERSCAN_API_KEY }}
        run: npm run build
```

### Step 3: Add Environment Variables

To use environment variables during the build process:

- Add them in your workflow using the env keyword.

Example: yaml

```
jobs:
  build:
    runs-on: ubuntu-latest
    env:
      NEXT_PUBLIC_API_URL: https://api.example.com
    steps:
      - name: Checkout code
        uses: actions/checkout@v4
      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
      - name: Build the Next.js app
        run: npm run build
```

- Prefix variables with NEXT_PUBLIC_ to expose them to the client.

### Step 4: Securely Expose API Keys

If you must expose an API key (e.g., for client-side use), configure it carefully to ensure security:

1. Restrict API Access by Origin: Configure the API server to accept requests only from your domain.

Example: If you need to expose an API key for client-side requests, but want to ensure that it’s secure:

- Configure the API to check the origin of requests and only accept calls from your server’s domain.
- API Key Validation: Use CORS or origin-based validation on the API server to allow only your domain to use the exposed key.

Explanation of Approach: If your API key is visible on the frontend, you can still secure its use by configuring the API server to verify the origin of incoming requests. The server can be set up to only accept requests from specific domains or IP addresses, ensuring that even though the key is exposed in the frontend, only requests from your trusted domains will be processed.

For example, a server could check for a valid Origin header in the incoming HTTP request to ensure that it is coming from your authorized frontend.

API Key Example:

```
const API_KEY = process.env.NEXT_PUBLIC_API_KEY; // Publicly exposed
const data = await fetch(`https://api.example.com?apikey=${API_KEY}`);
```

On the server side, ensure the following:

-  The API accepts requests only from known sources (your domain or server).
- The key is scoped with limited permissions (e.g., read-only access).

#### Alternative: Server-Side Proxy for Sensitive API Keys

If the exposed key is too risky, route requests through your backend to keep the key hidden:

```
export default async function handler(req, res) {
const API_KEY = process.env.PRIVATE_API_KEY; // Kept private
const response = await fetch(`https://api.example.com?apikey=${API_KEY}`);
const data = await response.json();
res.status(200).json(data);
}
```

This keeps the API key secure on the server side and allows the frontend to make requests without exposing the key directly.

## Setting Up GitHub Actions for Deployment

Now that we’ve configured the Next.js app for static export, let’s automate the deployment process using GitHub Actions. GitHub Actions is a powerful tool for automating workflows, and it integrates perfectly with GitHub Pages to deploy your app whenever you push changes to the main branch.

### Step 1: Create a GitHub Actions Workflow

Create a new file in your repository at .github/workflows/nextjs.yml. This will contain the instructions for building and deploying your site to GitHub Pages.

Here is the sample workflow for deploying a Next.js app to GitHub Pages:

name: Deploy Next.js site to Pages

```
on:
  push:
    branches: ["main"]  # Trigger deployment on push to the 'main' branch
  workflow_dispatch:  # Manually trigger the deployment from GitHub Actions tab

permissions:
  contents: read
  pages: write
  id-token: write

concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-latest
    defaults:
      run:
        working-directory: ./web  # Specify the directory of your Next.js app
    steps:
      - name: Checkout code
        uses: actions/checkout@v4

      - name: Detect package manager
        id: detect-package-manager
        run: |
          if [ -f "${{ github.workspace }}/web/yarn.lock" ]; then
            echo "manager=yarn" >> $GITHUB_OUTPUT
            echo "command=install" >> $GITHUB_OUTPUT
            echo "runner=yarn" >> $GITHUB_OUTPUT
            exit 0
          elif [ -f "${{ github.workspace }}/web/package.json" ]; then
            echo "manager=npm" >> $GITHUB_OUTPUT
            echo "command=ci" >> $GITHUB_OUTPUT
            echo "runner=npx --no-install" >> $GITHUB_OUTPUT
            exit 0
          else
            echo "Unable to determine package manager"
            exit 1
          fi

      - name: Set up Node.js
        uses: actions/setup-node@v4
        with:
          node-version: "20"
          cache: ${{ steps.detect-package-manager.outputs.manager }}

      - name: Set up GitHub Pages
        uses: actions/configure-pages@v5
        with:
          static_site_generator: next

      - name: Restore cache
        uses: actions/cache@v4
        with:
          path: |
            web/.next/cache
          key: ${{ runner.os }}-nextjs-${{ hashFiles('web/**/package-lock.json', 'web/**/yarn.lock') }}
          restore-keys: |
            ${{ runner.os }}-nextjs-${{ hashFiles('web/**/package-lock.json', 'web/**/yarn.lock') }}-

      - name: Install dependencies
        run: ${{ steps.detect-package-manager.outputs.manager }} ${{ steps.detect-package-manager.outputs.command }}

      - name: Build the Next.js app
        run: ${{ steps.detect-package-manager.outputs.runner }} next build

      - name: Upload static files
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./web/out  # Specify the output directory for static files

  deploy:
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

**Key Steps in the Workflow:**

1. Checkout code: The workflow starts by checking out the repository’s code.
2. Package manager detection: Automatically detects whether the project uses npm or yarn.
3. Set up Node.js: Ensures that the correct Node.js version is set up.
4. Set up GitHub Pages: Configures the Pages deployment action.
5. Restore cache: Caches dependencies to speed up the build process.
6. Install dependencies and build the app: Installs necessary dependencies and builds the Next.js app.
7. Upload static files: The out directory, where the static files reside, is uploaded to GitHub Pages.
8. Deploy: Finally, the deployment action takes the built app and deploys it to GitHub Pages.

## Setting Up a Custom Domain for Your GitHub Pages Deployment

Once your Next.js app is successfully deployed to GitHub Pages, you may want to use your own custom domain instead of the default GitHub Pages domain. This can give your site a more professional appearance and make it easier to share.

### Step 1: Update the next.config.mjs File

To ensure your Next.js app works seamlessly with a custom domain, you should specify the custom basePath and assetPrefix in the next.config.mjs file. These options ensure that static assets like images and stylesheets are loaded correctly.

Here’s how to update the *next.config.mjs* file for a custom domain:

```
basePath: “/your-repository-name”, // Remove or leave empty for custom domain
```

### Step 2: Add a CNAME File to the Repository

GitHub Pages uses the CNAME file to associate a custom domain with your repository. This file should be placed in the root of your repository and contain your custom domain name.

Here’s how you can add the CNAME file:

1. In your repository, create a new file named CNAME (no file extension).
2. Inside the CNAME file, add your custom domain name.(e.g., www.yourdomain.com).
3. Commit and push the CNAME file to your GitHub repository. This step tells GitHub Pages to use www.yourdomain.com instead of the default GitHub Pages URL.In your repository, create a new file named CNAME (no file extension).
Inside the CNAME file, add your custom domain name.(e.g., www.yourdomain.com).
Commit and push the CNAME file to your GitHub repository. This step tells GitHub Pages to use *[www.yourdomain.com]* instead of the default GitHub Pages URL.

### Step 3: Update Your DNS Settings

To point your custom domain to GitHub Pages, you need to update your domain’s DNS settings. You’ll do this by adding A records or a CNAME record to your domain’s DNS settings.

- A Records: If you’re using an apex domain (e.g., yourdomain.com), you’ll need to set A records to point to GitHub’s IP addresses. These are the GitHub Pages IP addresses:
- 185.199.108.153
- 185.199.109.153

Add four A records to your DNS provider with these values.

- CNAME Record: If you’re using a subdomain (e.g., www.yourdomain.com), you’ll need to add a CNAME record to point to GitHub’s Pages domain:
- www CNAME yourusername.github.io

Replace www with the subdomain you want to use (e.g., blog, shop, etc.) and *yourusername* with your GitHub username.

Once you’ve updated your DNS settings, it may take some time (usually a few minutes to several hours) for the DNS changes to propagate.

### Step 4: Verify the Setup

After your DNS settings have propagated, you should be able to visit your custom domain (e.g., www.yourdomain.com) and see your Next.js app hosted on GitHub Pages.

## Deployment URL
Once the workflow completes successfully, your site will be deployed to GitHub Pages at the following URL:

`https://<your-github-username>.github.io/<your-repository-name>`

Replace `<your-github-username>` with your GitHub username and `<your-repository-name>` with your repository name.
If you’re using a custom domain, the site will be available at your custom domain (e.g., www.yourdomain.com).

## Final Thoughts

Deploying a Next.js app to GitHub Pages might seem daunting at first, especially with the need for static export and careful configuration of GitHub Actions. However, with this setup, you gain significant benefits in terms of decentralization and resilience.

This tutorial provided the steps to configure your app for static export, set up the necessary `next.config.mjs options`, and automate deployment with GitHub Actions. By following these steps, you can seamlessly deploy your Next.js projects with minimal reliance on centralized providers and make your project more robust in the long run.

Happy coding, and enjoy fewer centralized dependencies via web hosting with GitHub Pages!