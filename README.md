<!-- Don't delete it -->
<div name="readme-top"></div>

<!-- Organization Logo -->
<div align="center" style="display: flex; align-items: center; justify-content: center; gap: 16px;">
  <img alt="Stability Nexus" src="public/StabilityNexus.svg" width="175">
  <!-- <img src="public/cross.svg" width="30" style="margin: 0;" /> -->
</div>

&nbsp;

<!-- Organization Name -->
<div align="center">

[![Static Badge](https://img.shields.io/badge/Stability_Nexus-/Gluon_Stablecoin_Protocol-228B22?style=for-the-badge&labelColor=FFC517)](https://hammer-auctions.stability.nexus/)

<!-- Correct deployed url to be added -->

</div>

<!-- Organization/Project Social Handles -->
<p align="center">
<!-- Telegram -->
<a href="https://t.me/StabilityNexus">
<img src="https://img.shields.io/badge/Telegram-black?style=flat&logo=telegram&logoColor=white&logoSize=auto&color=24A1DE" alt="Telegram Badge"/></a>
&nbsp;&nbsp;
<!-- X (formerly Twitter) -->
<a href="https://x.com/StabilityNexus">
<img src="https://img.shields.io/twitter/follow/StabilityNexus" alt="X (formerly Twitter) Badge"/></a>
&nbsp;&nbsp;
<!-- Discord -->
<a href="https://discord.gg/YzDKeEfWtS">
<img src="https://img.shields.io/discord/995968619034984528?style=flat&logo=discord&logoColor=white&logoSize=auto&label=Discord&labelColor=5865F2&color=57F287" alt="Discord Badge"/></a>
&nbsp;&nbsp;
<!-- Medium -->
<a href="https://news.stability.nexus/">
  <img src="https://img.shields.io/badge/Medium-black?style=flat&logo=medium&logoColor=black&logoSize=auto&color=white" alt="Medium Badge"></a>
&nbsp;&nbsp;
<!-- LinkedIn -->
<a href="https://linkedin.com/company/stability-nexus">
  <img src="https://img.shields.io/badge/LinkedIn-black?style=flat&logo=LinkedIn&logoColor=white&logoSize=auto&color=0A66C2" alt="LinkedIn Badge"></a>
&nbsp;&nbsp;
<!-- Youtube -->
<a href="https://www.youtube.com/@StabilityNexus">
  <img src="https://img.shields.io/youtube/channel/subscribers/UCZOG4YhFQdlGaLugr_e5BKw?style=flat&logo=youtube&logoColor=white&logoSize=auto&labelColor=FF0000&color=FF0000" alt="Youtube Badge"></a>
</p>

---

<div align="center">
<h1>Stable Viewpoints</h1>
</div>

**Independent Articles about Stability**

Stable Viewpoints is a digital publication focused on thoughtful perspectives about stability in our rapidly changing world. We explore how emerging technologies can be used to bring greater stability to the world.

Our mission is to provide well-researched, balanced viewpoints on issues that matter for creating a more stable future.

## Topics We Cover

- **Blockchain & Cryptocurrencies**: Digital assets, blockchain technology, cryptocurrency adoption, regulatory frameworks
- **Artificial Intelligence**: AI governance, machine learning applications, ethical AI development, automation impact
- **Economic & Financial Stability**: Monetary policy, financial markets, economic resilience, inflation dynamics
- **Decentralized Finance (DeFi)**: Protocol analysis, yield farming, liquidity provision, DeFi security
- **Technology & Society**: Digital transformation, cybersecurity, privacy rights, technological disruption
- **Monetary Systems**: Central bank digital currencies (CBDCs), stablecoins, alternative monetary frameworks

## How to Submit an Article

We welcome contributions from writers, researchers, and experts who share our commitment to thoughtful, well-researched content. Here's how to submit your article:

### Step 1: Prepare Your Article

Your article should be written in Markdown format (\`.md\` file) and include:

- **Title**: Clear and descriptive
- **Author**: Your name or preferred byline
- **Date**: Publication date (YYYY-MM-DD format)
- **Image**: A relevant header image (we can help source one if needed)
- **Excerpt**: A brief 1-2 sentence summary
- **Content**: Well-researched, original content (500-2000 words recommended)

### Step 2: Format Your Article

Create a file with this structure:

```markdown
---
title: "Your Article Title Here"
author: "Your Name"
date: "2024-01-25"
image: "/images/your-image.jpg"
excerpt: "A brief description of your article that will appear on the homepage."
---

# Your Article Title Here

Your article content goes here. You can use:

- **Bold text** and *italic text*
- Lists and bullet points
- Links to [external sources](https://example.com)
- Images: ![Alt text](/images/image-name.jpg)
- Quotes and other markdown formatting

## Subheadings

Break up your content with clear subheadings to improve readability.

Remember to cite your sources and provide value to our readers!
```

### Step 3: Submit via GitHub

Don't worry if you're new to GitHub - here's a simple step-by-step guide:

1. **Go to our repository**: Visit [github.com/your-username/stable-viewpoints-blog](https://github.com/your-username/stable-viewpoints-blog)

2. **Fork the repository**: 
   - Click the "Fork" button in the top-right corner
   - This creates your own copy of the project

3. **Add your images**:
   - In your forked repository, click on \`public\` folder
   - Then click on \`images\` folder
   - Click "Add file" → "Upload files"
   - Drag and drop your images or click "choose your files"
   - **Image requirements**: JPG, PNG, or WebP format, under 2MB each
   - **Naming**: Use descriptive names with hyphens (e.g., \`bitcoin-price-chart.jpg\`)
   - Commit the images with a message like "Add images for [article title]"

4. **Add your article**:
   - Navigate to \`public\` → \`articles\` folder
   - Click "Add file" → "Create new file"
   - Name your file: \`your-article-title.md\` (use hyphens instead of spaces)
   - Paste your article content in the editor

5. **Use images in your article**:
   - **Header image**: Set in the frontmatter as \`image: "/images/your-header-image.jpg"\`
   - **Inline images**: Use markdown syntax \`![Description](/images/your-image.jpg)\`
   - **Image paths**: Always start with \`/images/\` (e.g., \`/images/defi-protocol-diagram.png\`

6. **Commit your changes**:
   - Scroll down to "Commit new file"
   - Add a commit message like "Add article: Your Article Title"
   - Click "Commit new file"

7. **Add your article to the index**:
   - Navigate to `public` → `articles` folder
   - Click on `articles-index.json`
   - Click the pencil icon to edit the file
   - Add your article information to the `articles` array at the top (it will appear first on the website)
   - Use this format:
   ``` json
   {
      "slug": "your-article-filename", // Must exactly match your markdown filename (without the ".md" extension)
      "title": "Your Article Title Here",
      "author": "Your Name",
      "date": "YYYY-MM-DD", // Example: "2024-01-25"
      "image": "/images/your-header-image.jpg",
      "excerpt": "A brief description of your article that appears on the homepage.", // Meta description for SEO
      "featured": false // Set to true only if the article should be highlighted (ask first)
   }
   ```
   - **Important**: Add a comma after the previous entry and ensure proper JSON formatting
   - **Featured articles**: Set `"featured": true` if you want your article highlighted with a star (ask us first)
   - Commit the changes with a message like "Add [article title] to index"

8. **Create a Pull Request**:
   - You'll see a banner saying "This branch is ahead"
   - Click "Contribute" → "Open pull request"
   - Add a title and description for your submission
   - **Include**: List of images you've added and their purpose
   - Click "Create pull request"

### Step 4: Review Process

1. **Initial Review**: We'll review your submission as soon as possible
2. **Feedback**: If changes are needed, we'll provide constructive feedback
3. **Publication**: Once approved, your article will be published on the site
4. **Promotion**: We'll share your article on our social media channels

## Image Guidelines

### Technical Requirements
- **Formats**: JPG, PNG, or WebP
- **Size**: Maximum 2MB per image
- **Dimensions**: Minimum 800px width for header images
- **Quality**: High resolution, clear and professional

### Content Guidelines
- **Copyright**: Only use images you own or have permission to use
- **Relevance**: Images should directly relate to your article content
- **Attribution**: Include image credits in your article if required
- **Accessibility**: Use descriptive alt text for all images

### Naming Convention
- Use descriptive, lowercase names with hyphens
- Examples: \`blockchain-network-diagram.jpg\`, \`defi-yield-comparison.png\`
- Avoid spaces, special characters, or generic names like \`image1.jpg\`

## Submission Guidelines

### Content Standards
- **Original work only** - no plagiarism or previously published content
- **Well-researched** - include credible sources and citations
- **Balanced perspective** - present multiple viewpoints when appropriate
- **Constructive tone** - focus on solutions and positive change

### Technical Requirements
- **Markdown format** (\`.md\` file)
- **Images**: High-quality, royalty-free images
- **Length**: 500-2000 words

## Questions?

If you have questions about the submission process or want to discuss a potential article idea, contact us via:

- **Telegram**: [@StabilityNexus](https://t.me/StabilityNexus)
- **Discord**: [Join our community](https://discord.gg/fuuWX4AbJt)

## Connect With Us

- **Twitter**: [@StabilityNexus](https://twitter.com/StabilityNexus)
- **LinkedIn**: [Stability Nexus](https://www.linkedin.com/company/stability-nexus/)

---

*Stable Viewpoints is committed to fostering thoughtful dialogue about the challenges and opportunities of our time. We believe that through careful analysis and open discussion, we can work together toward a more stable future.*
