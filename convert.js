const fs = require('fs');

const indexHtml = fs.readFileSync('../index.html', 'utf8');

// extract the body content between <body ...> and </body> (excluding script tags)
let bodyContent = indexHtml.substring(
  indexHtml.indexOf('<header'),
  indexHtml.indexOf('<script>')
);

// Basic JSX conversion
let jsxContent = bodyContent
  .replace(/class=/g, 'className=')
  .replace(/<!--(.*?)-->/g, '{/* $1 */}')
  .replace(/<input(.*?)>/g, '<input$1 />');

// also need to replace style="..." with style={{...}}
// in the original HTML there are these:
// style="background-image: url('...')"
jsxContent = jsxContent.replace(/style="background-image: url\('([^']+)'\)"/g, 'style={{ backgroundImage: "url(\'$1\')" }}');
jsxContent = jsxContent.replace(/<br>/g, '<br />');

const pageContent = `"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('active'); });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    document.querySelectorAll('.reveal-on-scroll').forEach(el => observer.observe(el));

    const header = document.getElementById('main-header');
    if (header) {
      const handleScroll = () => {
        if (window.scrollY > 50) {
          header.classList.add('border-b', 'border-[#C8A96A]/30');
          header.classList.remove('bg-surface/85');
          header.classList.add('bg-white');
        } else {
          header.classList.remove('bg-white');
          header.classList.add('bg-surface/85');
        }
      };
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
        observer.disconnect();
      };
    }
  }, []);

  return (
    <>
      ${jsxContent}
    </>
  );
}
`;

fs.writeFileSync('src/app/page.tsx', pageContent);
console.log('Done generating page.tsx');
