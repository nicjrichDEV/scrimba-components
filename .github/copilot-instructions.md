# Scrimba Components - AI Agent Instructions

## Project Overview

React component library as part of [Scrimba's Frontend Developer Career Path](https://scrimba.com/frontend-path-c0j/~011n). The goal is to create a series of components that increase in complexity, demonstrating both simple and compound component patterns using React, Vite, and modern best practices. The components should be styled using CSS Modules and follow a consistent architecture for maintainability and scalability.

## LLM Responses Instructions

This project is meant to be an educational experience. When generating code snippets or explanations, please ensure that the responses are clear, concise, and suitable for learners who may be new to React and component architecture. Focus on best practices, maintainability, and readability in all code examples. Avoid overly complex solutions unless specifically requested, and always provide context for why certain patterns or practices are used. Act as senior React developer and educator walking a junior developer through the concepts a step at a time. Prefer the developer to write code themselves with your guidance rather than generating the code via Agent mode.

## Architecture Patterns

### Component Structure

- **Simple components** (Badge, Banner, Card, Testimonial): Single file + CSS Module
- **Compound components** (Toast, Tooltip): Multi-file with Root/Trigger/Body pattern + Context API + custom hooks

### Compound Component Pattern (Toast/Tooltip)

These follow a consistent architecture:

```
component-name/
  ├── ComponentRoot.jsx        # Context provider, state management
  ├── ComponentTrigger.jsx     # User interaction handler
  ├── ComponentBody.jsx        # Rendered content (often uses createPortal)
  ├── ComponentGlobalProvider.jsx  # App-wide coordination
  ├── context/
  │   ├── ComponentContext.js      # Local component context
  │   └── ComponentGlobalContext.js # Global coordination context
  └── hooks/
      ├── useComponent.js          # Access local context
      └── useGlobalComponent.js    # Access global context
```

**Key behaviors:**

- `Root` manages local state (open/closed), registers with global provider
- `Trigger` uses `asChild` prop with `cloneElement` to compose with custom elements
- `Body` uses `createPortal` for positioning outside DOM hierarchy
- Global providers coordinate multiple instances (e.g., toast stacking, tooltip warmup)

### Styling Convention

- **CSS Modules** for all components (`Component.module.css`)
- Use `cn()` utility (in `src/utilities/cn.js`) to merge class names conditionally
- Component props map to CSS classes: `<Badge color="red" shape="pill" />` → `styles.red` + `styles.pill`

### State Management

- **Local state**: `useState` in component Root
- **Cross-component coordination**: Global Context Providers wrap app in `main.jsx`
- **ID generation**: `useId()` for unique anchors/references (see `ToastRoot`, `TooltipRoot`)

### Routing

- React Router v7 with nested routes in `App.jsx`
- `NavigationLayout` wraps all pages with consistent navigation
- Page components in `src/pages/` demonstrate component usage

## Development Workflow

### Commands

```bash
npm run dev      # Start dev server (Vite with Rolldown)
npm run build    # Production build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

### Tech Stack Notes

- **Vite override**: Using `rolldown-vite@7.1.14` (note in `package.json` overrides)
- **React 19**: Latest features available
- **Icons**: Lucide React (`lucide-react`)
- **No TypeScript**: Plain JSX with ESLint configured for React Hooks

### Adding New Components

**Simple component:**

1. Create `src/components/component-name/ComponentName.jsx`
2. Create `src/components/component-name/ComponentName.module.css`
3. Use `cn()` for conditional class merging
4. Spread `...rest` props for flexibility
5. Create demo page in `src/pages/ComponentPage.jsx`
6. Add route in `App.jsx`

**Compound component:**

1. Follow Toast/Tooltip file structure (Root, Trigger, Body, contexts, hooks)
2. Implement `asChild` pattern in Trigger for composition
3. Create both local and global contexts if multi-instance coordination needed
4. Register global provider in `main.jsx` if required
5. Use `createPortal` in Body if content needs to escape parent DOM

### Code Style

- **No unused vars** allowed except uppercase/underscore-prefixed (see `eslint.config.js`)
- **Component props**: Use destructuring with defaults
- **Prop spreading**: Always include `...rest` for extensibility
- **File naming**: PascalCase for components, camelCase for utilities/hooks

## Key Files

- `src/main.jsx`: Global provider registration (Tooltip, Toast)
- `src/App.jsx`: Route definitions
- `src/utilities/cn.js`: Class name merging utility
- `src/index.css`: Theme variables and CSS reset
