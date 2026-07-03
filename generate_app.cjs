const fs = require('fs');

try {
    let html = fs.readFileSync('source_dump.html', 'utf8');

    const mainMatch = html.match(/<main[^>]*>([\s\S]*?)<\/main>/);
    if (!mainMatch) {
        console.log('Main not found');
        process.exit(1);
    }

    let mainContent = '<main className="min-h-screen bg-background">' + mainMatch[1] + '</main>';

    // Basic React attribute conversions
    mainContent = mainContent.replace(/class=/g, 'className=');
    mainContent = mainContent.replace(/charSet=/g, 'charSet=');
    mainContent = mainContent.replace(/stroke-width/g, 'strokeWidth');
    mainContent = mainContent.replace(/stroke-linecap/g, 'strokeLinecap');
    mainContent = mainContent.replace(/stroke-linejoin/g, 'strokeLinejoin');
    mainContent = mainContent.replace(/fill-rule/g, 'fillRule');
    mainContent = mainContent.replace(/clip-rule/g, 'clipRule');
    mainContent = mainContent.replace(/stroke-miterlimit/g, 'strokeMiterlimit');

    // Clean up exact styles and non-camelCased react things
    mainContent = mainContent.replace(/referrerPolicy/g, 'referrerPolicy');
    mainContent = mainContent.replace(/fetchPriority/g, 'fetchPriority');

    // Convert empty closed tags
    mainContent = mainContent.replace(/<(img|br|hr|input|meta|link)\b([^>]*?)(?<!\/)>/g, '<$1$2 />');

    // Next.js specific things that could break JSX
    mainContent = mainContent.replace(/<!--.*?-->/gs, '');

    const appFile = `
import { useState } from 'react';

export default function App() {
  return (
    <>
      ${mainContent}
    </>
  );
}
  `;

    fs.writeFileSync('src/App.jsx', appFile);
    console.log('App.jsx successfully generated from source HTML.');
} catch (error) {
    console.error("Failed to generate", error);
}
