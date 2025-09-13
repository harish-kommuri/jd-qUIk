const QwenDoc4 = () => {
    return (
        `
        Title:
Troubleshooting React + CSS Modules + Tailwind Styling Problems

csv
Issue,	Cause,	Fix
Styles not applying,	Forgot to import CSS Module,	import styles from './Component.module.css'
Class names conflicting,	Used same class name in two modules,	Use unique names like btnPrimary"
Tailwind classes not working,	Tailwind not configured,	Ensure tailwind.config.js includes paths: "./src/**/*.{js
Animation doesn't trigger,	CSS Module keyframes not applied,	Make sure animation is applied to correct element
Dark mode breaks,	Missing dark: prefix,	Use dark:bg-gray-800 dark:text-white
Styles override order,	CSS Modules load after Tailwind?,	Tailwind loads first — CSS Modules override it correctly

Pro Tip: Use Developer Tools
In Chrome DevTools, inspect elements → see which classes are applied
Look for .module.css classes — they'll be hashed (e.g., Button_button__abc123)
Tailwind classes remain human-readable
        `
    );
}