# Frames - Image Gallery

A responsive image gallery built with HTML, CSS and vanilla JavaScript, with category filters, a lightbox viewer and smooth hover effects.

**Live demo:** [YOUR-LINK-HERE](YOUR-LINK-HERE)

## Features

- Responsive grid layout with equal-size photo cards
- Category filters: All, Nature, City, Animals and Mountains
- Lightbox view with next and previous buttons and a photo counter
- Keyboard support: left and right arrows to navigate, Escape to close
- Click outside the photo to close the lightbox
- Hover effects: zoom, gradient overlay and expand icon
- Smooth transitions and entrance animations
- Animated gradient background
- Lazy loading for images
- Works on desktop, tablet and mobile

## Tech stack

- HTML5
- CSS3 (grid, custom animations, backdrop filter)
- Vanilla JavaScript
- Font Awesome icons via CDN

## Project structure

```
ImageGallery/
├── index.html
├── style.css
├── script.js
├── frames-icon.svg
└── assets/
    ├── animals/
    ├── city/
    ├── mountain/
    └── nature/
```

## Run locally

1. Download or clone this repository.
2. Open the folder in VS Code and start it with the Live Server extension, or open `index.html` in a browser.

## Add more photos

1. Put the image in the matching folder inside `assets/`.
2. In `index.html`, copy one `<figure class="item" ...>` block and change the `data-category`, the image path and the `alt` text.

The filters and the lightbox pick up new photos automatically.

## Credits

- Photos from Pexels and Unsplash (free to use)
- Icons by Font Awesome