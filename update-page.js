const fs = require('fs');

const indexHtml = fs.readFileSync('../index.html', 'utf8');

// extract the body content between <main> and </main>
let bodyContent = indexHtml.substring(
  indexHtml.indexOf('<main>'),
  indexHtml.indexOf('</main>') + 7
);

// Basic JSX conversion
let jsxContent = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/<!--(.*?)-->/g, '{/* $1 */}')
  .replace(/<input(.*?)>/g, '<input$1 />');

// also need to replace style="..." with style={{...}}
jsxContent = jsxContent.replace(/style="background-image: url\('([^']+)'\)"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');
jsxContent = jsxContent.replace(/<br>/g, '<br />');

// fix routes
jsxContent = jsxContent.replace(/href="index\.html"/g, 'href="/"');
jsxContent = jsxContent.replace(/href="collection\.html"/g, 'href="/collection"');
jsxContent = jsxContent.replace(/href="contact\.html"/g, 'href="/contact"');
jsxContent = jsxContent.replace(/href="checkout\.html"/g, 'href="/checkout"');
jsxContent = jsxContent.replace(/<a /g, '<Link ').replace(/<\/a>/g, '</Link>');

const pageContent = `"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Done updating page.tsx with only main content');
