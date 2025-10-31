# Scrimba Components

> A React component library showcasing modern component architecture patterns and design system principles.

**Part of [Scrimba's Frontend Developer Career Path](https://scrimba.com/frontend-path-c0j)**

## 🎯 Project Goal

Build a reusable component library that demonstrates mastery of both simple and advanced React patterns, with a focus on:

- **Component API Design**: Creating flexible, composable components with intuitive props
- **Advanced Patterns**: Implementing compound components with Context API and custom hooks
- **Design Systems**: Building consistent, scalable styling with CSS Modules
- **Developer Experience**: Crafting components that are easy to use and extend

This project bridges the gap between basic React knowledge and production-ready component development—essential skills for a design engineer role.

## ✨ Components

### Simple Components
- **Badge**: Status indicators with color and shape variants
- **Banner**: Contextual notifications with status icons
- **Card**: Content containers with hover states
- **Testimonial**: User feedback display with avatars

### Compound Components
- **Tooltip**: Context-aware popovers with warmup/cooldown states
- **Toast**: Stackable notifications with portal rendering

## 🏗️ Architecture Highlights

### Compound Component Pattern
The Toast and Tooltip components demonstrate advanced React patterns used in production libraries like Radix UI and Headless UI:

```jsx
<ToastRoot variant="success" duration={3000}>
  <ToastTrigger asChild>
    <button>Show Toast</button>
  </ToastTrigger>
  <ToastBody title="Success!" description="Your action completed." />
</ToastRoot>
```

**Key architectural decisions:**
- **Root**: Manages local state and registers with global provider
- **Trigger**: Uses `asChild` prop with `cloneElement` for maximum composability
- **Body**: Leverages `createPortal` for rendering outside parent DOM hierarchy
- **Global Providers**: Coordinate multiple instances (toast stacking, tooltip warmup)

### Styling System
- **CSS Modules** for scoped, predictable styling
- **Custom CSS Variables** with Halo/UNSC-inspired design tokens
- **Utility-First Approach** using `cn()` helper for conditional classes
- **Props-to-Classes Mapping**: `<Badge color="red" shape="pill" />` → `styles.red + styles.pill`

## 🛠️ Tech Stack

| Technology | Purpose | Why This Choice |
|------------|---------|-----------------|
| **React 19** | UI framework | Latest features including enhanced hooks |
| **Vite (Rolldown)** | Build tool | Lightning-fast HMR, optimized for modern React |
| **React Router v7** | Routing | Nested routes for component showcase pages |
| **CSS Modules** | Styling | Scoped styles without runtime cost |
| **Lucide React** | Icons | Modern, tree-shakeable icon library |
| **ESLint** | Code quality | Enforces React hooks rules and best practices |

### Technical Considerations

**Why no TypeScript?**
Focusing on component patterns and architecture first. TypeScript would be a natural next step for production use.

**Why Rolldown-Vite?**
Experimenting with Vite's next-generation bundler using Rolldown/oxc for faster builds.

**Why CSS Modules over Tailwind?**
Demonstrates understanding of CSS architecture and design tokens—critical for design engineering roles.

## 🚀 Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── badge/              # Simple component example
│   │   ├── Badge.jsx
│   │   └── Badge.module.css
│   └── toast/              # Compound component example
│       ├── ToastRoot.jsx
│       ├── ToastTrigger.jsx
│       ├── ToastBody.jsx
│       ├── ToastGlobalProvider.jsx
│       ├── context/
│       │   ├── ToastContext.js
│       │   └── ToastGlobalContext.js
│       └── hooks/
│           ├── useToast.js
│           └── useGlobalToast.js
├── pages/                  # Component demonstrations
├── utilities/
│   └── cn.js              # Class name utility
└── App.jsx                # React Router setup
```

## 🎨 Design Principles

1. **Composability**: Components built with the `asChild` pattern can be composed with any element
2. **Flexibility**: Props are spread with `...rest` for extensibility
3. **Consistency**: Shared patterns across all components (file structure, naming, styling)
4. **Accessibility**: Semantic HTML, keyboard navigation support
5. **Performance**: React.memo, proper hook dependencies, CSS Modules (zero runtime)

## 🔄 What I'd Change Next

### Short-term Improvements
- [ ] **Toast Refactor**: Refactor the toast component to be similar to [Sooner](https://sonner.emilkowal.ski/)
- [ ] **Polish Design**: The design is increadable basic right now and does not exactly scream its from a design engineer.
- [ ] **TypeScript Migration**: Add full type safety and IntelliSense support
- [ ] **Accessibility Audit**: ARIA labels, keyboard navigation, screen reader testing
- [ ] **Animation Library**: Add Framer Motion for smooth transitions
- [ ] **Storybook Integration**: Document components with interactive examples
- [ ] **Unit Tests**: Vitest + React Testing Library for component testing

### Long-term Goals
- [ ] **Design Tokens System**: JSON-based tokens for colors, spacing, typography
- [ ] **Dark Mode Support**: Theme switching with CSS variables
- [ ] **Documentation Site**: Custom docs with live code editor (like Radix)
- [ ] **NPM Package**: Bundle and publish as a real component library
- [ ] **Figma Integration**: Design tokens exported from Figma to code

### Architecture Refinements
- [ ] **Polymorphic Components**: `as` prop pattern for component-as-another-component
- [ ] **Controlled/Uncontrolled Modes**: Support both patterns for all stateful components
- [ ] **Size Variants**: Implement consistent `size` prop across all components
- [ ] **Loading States**: Skeleton patterns for async content

## 💡 Key Learnings

Building this project taught me:

- **Compound Components**: When and why to use Context API vs prop drilling
- **Portal Rendering**: Solving z-index and overflow issues with `createPortal`
- **Global Coordination**: Managing multiple component instances (toast stacking, tooltip warmup)
- **API Design**: Creating intuitive, predictable component APIs that scale
- **CSS Architecture**: Building maintainable styles with design tokens and modules

## 🔗 Links

- **Live Demo**: [Coming Soon]
- **Course**: [Scrimba Frontend Developer Career Path](https://scrimba.com/frontend-path-c0j)
- **Inspiration**: [Radix UI](https://www.radix-ui.com/), [Headless UI](https://headlessui.com/)

---

**Built by Nick Richardson** | [Portfolio](https://nicjrich.dev) | [LinkedIn](https://www.linkedin.com/in/nicjrichdev/) | [GitHub](https://github.com/nicjrichDEV)
