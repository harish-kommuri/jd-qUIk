const QwenDoc5 = () => {
    return (
        `
            Title:
Documenting Components for RAG Systems: A Template

This format helps RAG models understand intent, structure, and usage patterns. 

Component: Alert
Description:
A dismissible alert component used for notifications, warnings, or success messages.

Props:

Prop,	Type,	Default,	Description
type,	'success' | 'warning' | 'error' | 'info',	'info',	Sets color scheme
show,	boolean,	TRUE,	Controls visibility
onDismiss,	function,	null,	Called when close button is clicked
children,	ReactNode,	—,	Content inside alert


Usage:
jsx
<Alert type="success" show={true} onDismiss={() => setIsVisible(false)}>
  Your changes have been saved!
</Alert>

Implementation Notes:
Uses Tailwind for background/text colors (bg-green-50 text-green-800)
Uses CSS Module for fade-out animation on dismissal
Close button uses × symbol with hover effect via CSS Module
File Path:
src/components/Alert/Alert.jsx
src/components/Alert/Alert.module.css

Related Components:
Button
Toast (for transient alerts)
        `
    );
}