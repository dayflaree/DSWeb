# USG Horizon - Dead Space Roleplay Server Website

A high-quality, immersive website for the USG Horizon Dead Space roleplay server on Garry's Mod. The website features a complete Dead Space aesthetic with custom UI elements, interactive features, and comprehensive information about the server.

## Features

### 🎮 **Complete Dead Space Theme**
- Authentic Dead Space color scheme (dark backgrounds, cyan accents, orange highlights)
- Custom Dead Space fonts and typography
- Holographic UI elements and glowing effects
- Atmospheric background overlays and particle effects

### 📱 **Responsive Design**
- Fully responsive layout that works on all devices
- Mobile-optimized navigation and content
- Adaptive grid layouts for different screen sizes

### 🚀 **Interactive Features**
- Smooth animations and transitions
- Hover effects and visual feedback
- Sound effects integration (when available)
- Copy-to-clipboard functionality for server IP
- Dynamic content switching

### 📄 **Comprehensive Pages**

#### **Homepage (`index.html`)**
- Hero section with server introduction
- Quick access navigation panel
- Live server status display
- Recent updates and news
- Call-to-action buttons

#### **Server Biography (`server-bio.html`)**
- Detailed server overview and mission
- What to expect section with feature highlights
- Server features and technical specifications
- Visual gallery of ship areas
- Getting started guide

#### **Server Information (`server-info.html`)**
- Connection details and server IP
- Content pack information and features
- System requirements (minimum and recommended)
- Server rules and community standards
- Live server status with player list
- Quick connect instructions

#### **Branches (`branches.html`)**
- Detailed information about all four ship branches:
  - **Medical Branch**: Chief Medical Officer, Medical Officer, Medical Technician
  - **Engineering Branch**: Chief Engineer, Systems Engineer, Maintenance Technician
  - **Security Branch**: Security Chief, Security Officer, Security Guard
  - **Assistant Branch**: Senior Assistant, Assistant, Intern
- Role requirements and equipment lists
- Branch comparison table
- How to choose your branch guide

#### **Guides (`guides.html`)**
- Interactive guide categories:
  - Beginner Guides
  - Roleplay Basics
  - Character Creation
  - Branch Guides
  - Advanced Techniques
  - Server Etiquette
- Comprehensive articles for each category
- Step-by-step instructions and tips

#### **Crew Roster (`crew.html`)**
- Current crew members by branch
- Online/offline status indicators
- Character descriptions and roles
- Crew statistics and capacity
- Join the crew section

## Technical Implementation

### **HTML Structure**
- Semantic HTML5 elements
- Accessible navigation and content structure
- SEO-friendly meta tags and titles
- Proper heading hierarchy

### **CSS Styling**
- CSS Grid and Flexbox for responsive layouts
- CSS Custom Properties (variables) for consistent theming
- Advanced animations and transitions
- Dead Space themed color palette and effects
- Mobile-first responsive design

### **JavaScript Functionality**
- Interactive navigation and content switching
- Smooth scrolling and animations
- Copy-to-clipboard functionality
- Sound effect integration
- Particle effects and visual enhancements
- Keyboard navigation support

### **Assets Integration**
- Dead Space themed fonts (DeadSpace, Unitology, Orbitron)
- Custom UI icons and holographic elements
- Sound effects for enhanced immersion
- Optimized image assets

## File Structure

```
DSWeb/
├── index.html              # Homepage
├── server-bio.html         # Server biography page
├── server-info.html        # Server information page
├── branches.html           # Ship branches page
├── guides.html             # Roleplay guides page
├── crew.html               # Crew roster page
├── css/
│   └── styles.css          # Main stylesheet
├── js/
│   └── main.js             # Main JavaScript file
├── resources/              # Dead Space themed assets
│   ├── materials/
│   │   └── oakman/
│   │       └── deadspace/
│   │           └── holograms/  # UI icons and elements
│   ├── resource/
│   │   └── fonts/          # Custom fonts
│   └── sound/
│       └── oakman/
│           └── deadspace/
│               └── ui/     # Sound effects
└── README.md               # This file
```

## Customization

### **Colors**
The website uses CSS custom properties for easy color customization:
```css
:root {
    --ds-dark-bg: #0a0a0a;
    --ds-accent-cyan: #00ffff;
    --ds-accent-orange: #ff6600;
    --ds-accent-red: #ff0000;
    --ds-accent-green: #00ff00;
    /* ... more variables */
}
```

### **Content**
- Update server IP and connection details in `server-info.html`
- Modify crew roster in `crew.html`
- Add new guides in `guides.html`
- Update server statistics and information

### **Assets**
- Replace placeholder images with actual screenshots
- Add custom visual assets to the `resources/materials/` directory
- Update fonts in the `resources/resource/fonts/` directory

## Browser Support

- **Modern Browsers**: Chrome, Firefox, Safari, Edge (latest versions)
- **CSS Features**: Grid, Flexbox, Custom Properties, Animations
- **JavaScript**: ES6+ features with fallbacks for older browsers
- **Mobile**: iOS Safari, Chrome Mobile, Samsung Internet

## Performance

- Optimized CSS with efficient selectors
- Minimal JavaScript for fast loading
- Responsive images and assets
- Smooth 60fps animations
- Efficient DOM manipulation

## Accessibility

- Semantic HTML structure
- Proper heading hierarchy
- Keyboard navigation support
- High contrast color scheme
- Screen reader friendly content

## Installation

1. Download or clone the repository
2. Ensure all asset files are in the correct directories
3. Open `index.html` in a web browser
4. For production deployment, upload all files to a web server

## Contributing

To contribute to the website:
1. Follow the existing code style and structure
2. Test changes across different browsers and devices
3. Ensure accessibility standards are maintained
4. Update documentation as needed

## License

This project is created for the USG Horizon Dead Space roleplay server. All Dead Space assets and themes are property of their respective owners.

---

**USG Horizon** - Dead Space Roleplay Server  
*Experience the terror and survival of deep space*
