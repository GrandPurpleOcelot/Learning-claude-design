# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a static, single-page website for an AI agency featuring a brutalist tech noir design aesthetic. The site consists of three core files:
- `index.html` - Main HTML structure
- `styles.css` - Complete styling with custom CSS variables and animations
- `script.js` - Interactive JavaScript features and animations

## Development

This is a vanilla HTML/CSS/JavaScript project with no build process or dependencies.

**Running the site:**
- Open `index.html` directly in a browser, or
- Use any local development server (e.g., `python -m http.server` or VS Code's Live Server extension)

## Design System

**Color Palette:**
- Primary: Monochrome blacks/grays (`--black`, `--dark-gray`, `--medium-gray`, `--light-gray`)
- Accent: Electric cyan (`--cyan: #00f0ff`)
- All color variables defined in `:root` in `styles.css:12-33`

**Typography:**
- Display font: 'Syne' (headings, large text)
- Monospace font: 'JetBrains Mono' (body text, technical elements)
- Fonts loaded from Google Fonts in `index.html:7-9`

**Interactive Elements:**
- Matrix-style animated background canvas (`script.js:6-48`)
- Scroll-triggered animations using IntersectionObserver (`script.js:81-122`)
- Glitch effects on service numbers on hover (`script.js:174-197`)
- Parallax effect on hero grid (`script.js:153-160`)
- Form submission handler with visual feedback (`script.js:125-150`)

## Code Architecture

**HTML Structure (index.html):**
- Fixed navbar with smooth scroll navigation
- Hero section with animated title, stats, and CTAs
- Services grid (6 cards with numbered services)
- Features section (split layout with metrics and feature blocks)
- About section (company info + tech stack sidebar)
- Contact section (form + contact details)
- Footer with site links

**CSS Organization (styles.css):**
Organized into clear sections with headers:
1. Reset and Base Styles (lines 5-75)
2. Navigation (lines 94-201)
3. Hero Section (lines 202-458)
4. Services Section (lines 459-583)
5. Features Section (lines 584-725)
6. About Section (lines 726-851)
7. Contact Section (lines 852-1017)
8. Footer (lines 1018-1115)
9. Responsive Design (lines 1116-1193)
10. Animations & Scroll Effects (lines 1194-1209)

**JavaScript Modules (script.js):**
- Matrix background initialization (lines 6-48)
- Smooth scrolling (lines 50-62)
- Navbar scroll effect (lines 64-78)
- Scroll-triggered animations (lines 80-122)
- Form submission handler (lines 124-150)
- Parallax effects (lines 152-160)
- Hover effects and micro-interactions (lines 162-225)

## Design Principles

When modifying this codebase:
- Maintain the brutalist, tech noir aesthetic (high contrast, monochrome + cyan, geometric shapes)
- Use the established CSS variables for all colors to maintain consistency
- Follow the existing animation patterns (fade + slide, stagger delays, intersection observer)
- Keep the monospace/display font pairing for technical feel
- Preserve the heavy use of borders, corners, and accent lines as decorative elements
