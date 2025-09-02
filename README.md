# Thibaut Rouard Portfolio - CSS Architecture

## 📁 Project Structure

```
SectionsLayout/
├── assets/
│   └── css/
│       ├── main.css              # Main CSS entry point
│       ├── base/                 # Foundation styles
│       │   ├── variables.css     # CSS custom properties
│       │   ├── reset.css         # CSS reset & normalization
│       │   ├── typography.css    # Font styles & text utilities
│       │   └── base.css          # Base layout & utilities
│       ├── components/           # Reusable components
│       │   ├── buttons.css       # Button variants & styles
│       │   ├── cards.css         # Card components
│       │   ├── forms.css         # Form elements
│       │   ├── navigation-dots.css # Navigation dots
│       │   └── sections.css      # Section-specific styles
│       ├── layout/               # Layout components
│       │   ├── header.css        # Header layout
│       │   ├── navigation.css    # Main navigation
│       │   ├── footer.css        # Footer layout
│       │   └── grid.css          # Grid systems
│       └── utilities/            # Utility classes
│           ├── animations.css    # Animations & transitions
│           ├── responsive.css    # Responsive utilities
│           └── scrollbar.css     # Scrollbar customization
├── images/                       # Image assets
├── index.html                    # Main HTML file
└── script.js                     # JavaScript functionality
```

## 🎨 Design System

### Color Palette (VS Code Dark Theme)
- **Primary Background**: `#1E1E1E` - Main dark background
- **Secondary Background**: `#252526` - Sidebar/secondary areas
- **Tertiary Background**: `#2D2D30` - Cards and panels
- **Primary Accent**: `#569CD6` - VS Code blue for links/buttons
- **Secondary Accent**: `#4FC3F7` - Cyan for highlights
- **Text Colors**: `#CCCCCC` (primary), `#FFFFFF` (inverse)

### Typography Scale
- **Heading 1**: 3rem (48px) - Hero titles
- **Heading 2**: 2.25rem (36px) - Section titles
- **Heading 3**: 1.875rem (30px) - Card titles
- **Body**: 1rem (16px) - Base text
- **Small**: 0.875rem (14px) - Captions

### Spacing System
- **XS**: 0.25rem (4px)
- **SM**: 0.5rem (8px)
- **MD**: 1rem (16px)
- **LG**: 1.5rem (24px)
- **XL**: 2rem (32px)
- **2XL**: 3rem (48px)
- **3XL**: 4rem (64px)
- **4XL**: 5rem (80px)

## 🧩 Component Architecture

### Base Layer
- **Variables**: Design tokens and CSS custom properties
- **Reset**: Modern CSS reset for cross-browser consistency
- **Typography**: Font styles, sizes, and text utilities
- **Base**: Core layout utilities and container systems

### Component Layer
- **Buttons**: Reusable button variants (primary, secondary, outline, ghost)
- **Cards**: Various card types (stat, palmares, championship, experience)
- **Forms**: Form elements and validation states
- **Navigation Dots**: Fixed side navigation system
- **Sections**: Section-specific styles and layouts

### Layout Layer
- **Header**: Header positioning and structure
- **Navigation**: Main navigation and mobile menu
- **Footer**: Site footer layout
- **Grid**: Flexible grid systems for content organization

### Utility Layer
- **Animations**: Keyframes, transitions, and animation utilities
- **Responsive**: Breakpoint-specific utilities and helpers
- **Scrollbar**: Custom scrollbar styling and behavior

## 🔧 Usage Guidelines

### Importing Styles
The `main.css` file imports all modules in the correct order. Simply link to it in your HTML:
```html
<link rel="stylesheet" href="assets/css/main.css">
```

### Using Components
Components are designed to be modular and reusable:

```html
<!-- Button examples -->
<a href="#" class="btn btn-primary">Primary Button</a>
<a href="#" class="btn btn-secondary">Secondary Button</a>
<a href="#" class="btn btn-outline">Outline Button</a>

<!-- Card examples -->
<div class="card card-primary">
  <div class="card-content">
    <h3>Card Title</h3>
    <p>Card content...</p>
  </div>
</div>
```

### Using Utilities
Utility classes provide quick styling solutions:

```html
<!-- Spacing -->
<div class="p-lg m-xl">Content with padding and margin</div>

<!-- Typography -->
<h2 class="text-2xl font-bold text-accent">Styled heading</h2>

<!-- Responsive -->
<div class="hidden-sm block-md">Hide on mobile, show on desktop</div>
```

## 📱 Responsive Design

The architecture follows a mobile-first approach with these breakpoints:
- **XS**: 0-479px (Mobile)
- **SM**: 480-767px (Large mobile)
- **MD**: 768-1023px (Tablet)
- **LG**: 1024-1199px (Small desktop)
- **XL**: 1200px+ (Large desktop)

## 🎯 Benefits of This Architecture

1. **Modularity**: Easy to maintain and update individual components
2. **Reusability**: Components can be reused across different sections
3. **Scalability**: Easy to add new components or modify existing ones
4. **Performance**: Only load the CSS you need
5. **Maintainability**: Clear separation of concerns
6. **Consistency**: Design system ensures visual consistency
7. **Developer Experience**: Easier to find and modify specific styles

## 🚀 Migration from Monolithic CSS

The previous single `style.css` file has been completely refactored into this modular system while maintaining all existing functionality. All classes and styles have been preserved but organized into logical modules.

## 📋 Development Workflow

1. **Global changes**: Modify variables in `base/variables.css`
2. **New components**: Create new files in `components/`
3. **Layout changes**: Modify files in `layout/`
4. **Responsive adjustments**: Use utilities or create responsive variants
5. **Animations**: Add to `utilities/animations.css`

This architecture provides a solid foundation for maintaining and scaling the portfolio website while keeping the code organized and maintainable.
