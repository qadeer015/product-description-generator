# Product Description Generator

A Chrome extension that automatically generates SEO-friendly product descriptions using Google's Gemini AI for Online Sale Point.

## ✨ Features

- **🚀 One-Click Generation**: Generate both short and long product descriptions instantly
- **🔐 Secure API Key Management**: Store multiple API keys securely using Chrome's sync storage
- **☁️ Cloud Sync**: Settings sync across all your devices automatically
- **🎯 Smart Parsing**: Auto-fills form fields on product edit pages
- **⚡ Auto-Generate**: Automatically generate descriptions when navigating to product edit pages
- **💾 Auto-Save**: Automatically save products after description generation
- **🔄 Multiple API Keys**: Rotate between multiple Gemini API keys for better rate limiting
- **🎨 Floating Button**: Quick access button for generating descriptions without opening the popup
- **📱 Custom API Endpoint**: Configure custom Gemini API endpoints

## 📋 Requirements

- Chrome Browser (version 88+)
- Google Gemini API key (get one free at [AI Studio](https://aistudio.google.com/apikey))
- Product edit page on https://onlinesalepoint.com

## 🚀 Installation

### From Source (Development)

1. Clone or download this repository
2. Open Chrome and go to `chrome://extensions/`
3. Enable **Developer mode** (toggle in top right)
4. Click **Load unpacked**
5. Select the `product-description-generator` folder
6. The extension will appear in your Chrome toolbar

### Configuration

1. Click the extension icon in the toolbar
2. Click **⚙️ Settings**
3. Enter your Gemini API key from [AI Studio](https://aistudio.google.com/apikey)
4. (Optional) Customize the API endpoint if needed
5. Click **Save Settings**

Your settings are now encrypted and synced to your Chrome account!

## 📖 How to Use

### On Product Edit Pages

1. Navigate to a product edit page (e.g., `onlinesalepoint.com/shop/products/*/edit`)
2. Either:
   - Click the **floating icon button** (bottom center of page), or
   - Use the extension popup to click **✨ Generate Description**
3. Watch as descriptions are generated and auto-filled:
   - Short Description (40-60 words) → `#product_short_description`
   - Long Description (120-150 words) → `#product_description`
4. Review the generated content and make any edits if needed
5. Save your product

## ⚙️ Advanced Settings

### Auto-Generate Descriptions
Enable this option to automatically generate descriptions whenever you navigate to a product edit page. Perfect for bulk editing!

1. Open Settings
2. Check **Auto-Generate Descriptions**
3. Click **Save Settings**
4. Descriptions will now generate automatically within 1-2 seconds of page load

### Auto-Save Products
Automatically save products after description generation to streamline your workflow.

1. Open Settings
2. Check **Auto-Save Product**
3. Click **Save Settings**
4. Products will be saved immediately after descriptions are generated

### Multiple API Keys
Manage and rotate between multiple Gemini API keys to handle rate limiting better.

1. Open Settings
2. Enter your API keys (one per line)
3. Select the primary API key to use
4. Click **Save Settings**
5. The extension will use the selected key and rotate through alternatives if rate limited

### Custom API Endpoint
For advanced users who want to use custom or alternative endpoints:

1. Open Settings
2. Modify the **API Endpoint** field
3. Click **Save Settings**
4. Default: `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent`
