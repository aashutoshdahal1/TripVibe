# TravelMate Color System

## Global Color Variables

All colors are defined as CSS variables in `src/index.css` for easy customization. Simply update the values in the `:root` selector to change the entire app's color scheme.

## Color Palette

### Primary Colors
- **Forest Green** (`--color-primary`): `#2A9D8F` - Primary brand color
- **Forest Green Dark** (`--color-primary-dark`): `#238A7D` - Darker shade for gradients
- **Forest Green Light** (`--color-primary-light`): `#3DB5A7` - Lighter shade for hover states
- **Forest Green Alpha** (`--color-primary-alpha`): `rgba(42, 157, 143, 0.1)` - Transparent variant

### Secondary Colors
- **Sand Beige** (`--color-secondary`): `#E9C46A` - Secondary brand color
- **Sand Beige Dark** (`--color-secondary-dark`): `#D4B05A` - Darker shade for gradients
- **Sand Beige Light** (`--color-secondary-light`): `#F5D17A` - Lighter shade for hover states
- **Sand Beige Alpha** (`--color-secondary-alpha`): `rgba(233, 196, 106, 0.1)` - Transparent variant

### Accent Colors
- **Sunset Red** (`--color-accent`): `#E76F51` - Accent color
- **Sunset Red Dark** (`--color-accent-dark`): `#D15F41` - Darker shade for gradients
- **Sunset Red Light** (`--color-accent-light`): `#F57F61` - Lighter shade for hover states
- **Sunset Red Alpha** (`--color-accent-alpha`): `rgba(231, 111, 81, 0.1)` - Transparent variant

### Text Colors
- **Dark Olive** (`--color-text-dark`): `#264653` - Primary text color
- **Cream White** (`--color-text-light`): `#F4F1DE` - Light text on dark backgrounds

### Background Colors
- **Cream White** (`--color-bg-light`): `#F4F1DE` - Light background
- **Cream White Alt** (`--color-bg-light-alt`): `#E8E5D0` - Alternative light background
- **White** (`--color-white`): `#FFFFFF` - Pure white

## Pre-defined Gradients

### Brand Gradients
- `--gradient-primary`: Forest Green gradient (primary to dark)
- `--gradient-secondary`: Sand Beige gradient (secondary to dark)
- `--gradient-accent`: Sunset Red gradient (accent to dark)
- `--gradient-brand`: Forest Green to Sand Beige
- `--gradient-brand-full`: Forest Green → Sand Beige → Sunset Red
- `--gradient-brand-alpha`: Transparent brand gradient (for backgrounds)
- `--gradient-brand-alpha-hover`: Hover state transparent brand gradient

### Background Gradients
- `--gradient-bg`: Light background gradient

## Shadows

- `--shadow-primary`: Primary color shadow (Forest Green)
- `--shadow-secondary`: Secondary color shadow (Sand Beige)
- `--shadow-accent`: Accent color shadow (Sunset Red)
- `--shadow-sm`, `--shadow-md`, `--shadow-lg`, `--shadow-xl`: Standard shadows

## Usage Examples

### Using Primary Color
```css
.my-element {
  color: var(--color-primary);
  background: var(--gradient-primary);
  box-shadow: var(--shadow-primary);
}
```

### Using Brand Gradient
```css
.brand-button {
  background: var(--gradient-brand);
  color: var(--color-white);
}
```

### Using Transparent Variants
```css
.highlight-box {
  background: var(--gradient-brand-alpha);
  border: 1px solid var(--color-primary-alpha);
}
```

## Legacy Support

For backward compatibility, the following legacy variables are still available:
- `--sky-blue` → `var(--color-primary)` (now Forest Green)
- `--sunset-orange` → `var(--color-secondary)` (now Sand Beige)
- `--sunrise-yellow` → `var(--color-accent)` (now Sunset Red)
- `--deep-navy` → `var(--color-text-dark)` (now Dark Olive)
- `--off-white` → `var(--color-bg-light)` (now Cream White)

## Customization

To change the entire color scheme, simply update the values in `src/index.css`:

```css
:root {
  --color-primary: #YOUR_COLOR;
  --color-secondary: #YOUR_COLOR;
  --color-accent: #YOUR_COLOR;
  /* ... etc */
}
```

All components will automatically use the new colors!

