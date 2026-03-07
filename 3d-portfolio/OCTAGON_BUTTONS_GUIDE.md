# Octagon Button System - Usage Guide

## Overview
The octagon button system provides flexible, reusable octagon-shaped buttons that can be easily customized via CSS classes. Two variants are available:

1. **`.octagon`** - Uses pseudo-elements (works best with solid colors)
2. **`.octagon-gradient`** - Uses clip-path (works perfectly with gradients)

## Basic Usage

### Simple Octagon Button (Solid Color)
```jsx
<button className="octagon octagon-blue octagon-md">
  Click Me
</button>
```

### Octagon Button with Gradient
```jsx
<button className="octagon-gradient octagon-blue-gradient octagon-md">
  Click Me
</button>
```

## Color Variants

### Solid Colors
- `.octagon-blue` - Blue (#3b82f6)
- `.octagon-white` - White/transparent (good for navigation)
- `.octagon-pink` - Pink (#ec4899)

### Gradients
- `.octagon-blue-gradient` - Blue gradient matching your project buttons (from-[#00c6ff] to-[#0072ff])

### Custom Colors (Inline)
```jsx
<button 
  className="octagon octagon-md"
  style={{
    '--octagon-color': '#your-color',
    '--octagon-text': '#ffffff'
  }}
>
  Custom Color
</button>
```

## Size Variants

- `.octagon-sm` - Small (8px corners, 0.5rem padding)
- `.octagon-md` - Medium (10px corners, 0.75rem padding) - **Default**
- `.octagon-lg` - Large (12px corners, 1rem padding)

### Custom Size
You can also combine with Tailwind padding classes:
```jsx
<button className="octagon octagon-blue px-8 py-4">
  Custom Padding
</button>
```

## Complete Examples

### Replace Current CTA Button
**Before:**
```jsx
<button className={classes.ctaButton}>
  Get Started
</button>
```

**After:**
```jsx
<button className="octagon-gradient octagon-blue-gradient octagon-lg">
  Get Started
</button>
```

### Navigation Button (Active State)
```jsx
<button className={`octagon octagon-sm ${
  isActive ? 'octagon-white-active' : 'octagon-white'
}`}>
  Navigation
</button>
```

### Submit Button
```jsx
<button 
  type="submit"
  className="octagon-gradient octagon-blue-gradient octagon-md"
  disabled={loading}
>
  {loading ? 'Sending...' : 'Submit'}
</button>
```

## When to Use Which Variant

- **Use `.octagon`** (pseudo-elements) when:
  - You want solid colors
  - Better browser compatibility needed
  - Simpler implementation

- **Use `.octagon-gradient`** (clip-path) when:
  - You want gradients
  - Modern browser support is sufficient
  - You need perfect gradient corners

## Features

✅ Automatic hover effects (scale + shadow)
✅ Disabled state styling
✅ Focus states for accessibility
✅ Fully responsive
✅ Customizable via CSS variables
✅ Works with Tailwind utilities

## Current Project Button Replacements

### Service.jsx Buttons

**CTA Button (Section 1):**
```jsx
// Replace: className={classes.ctaButton}
<button className="octagon-gradient octagon-blue-gradient octagon-lg">
  {t('service.section1.cta')}
</button>
```

**Demo Button:**
```jsx
// Replace: className={classes.demoButton}
<button className="octagon-gradient octagon-blue-gradient octagon-md">
  View Demo
</button>
```

**Performance Button:**
```jsx
// Replace: className={classes.performanceButton}
<button className="octagon-gradient octagon-blue-gradient octagon-md">
  View Report
</button>
```

**Navigation Buttons:**
```jsx
// Replace: className={`${classes.navigationButton} ${active ? classes.navigationButtonActive : classes.navigationButtonInactive}`}
<button className={`octagon octagon-sm ${active ? 'octagon-white-active' : 'octagon-white'}`}>
  {buttonText}
</button>
```

### Contact.jsx Submit Button

```jsx
// Replace: className="btn"
<button
  type="submit"
  className="octagon-gradient octagon-blue-gradient octagon-md"
  disabled={loading}
>
  {loading ? "Sending..." : "Submit"}
</button>
```

## Customization Tips

1. **Adjust corner size**: Modify `--octagon-corner-size` variable
2. **Adjust offset**: Modify `--octagon-offset` variable (usually negative of corner size)
3. **Custom hover effects**: Override the `:hover` styles
4. **Responsive sizing**: Combine with Tailwind responsive classes

## Notes

- The pseudo-element method (`.octagon`) creates perfect octagon shapes but works best with solid colors
- The clip-path method (`.octagon-gradient`) supports gradients but may have slight rendering differences in some browsers
- All variants support the same hover and interaction states
- Box-sizing is automatically applied for consistent sizing

