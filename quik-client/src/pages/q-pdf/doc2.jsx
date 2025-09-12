const QwenDoc2 = () => {
    return (
        `
        Title:
How to Combine Tailwind CSS and CSS Modules Without Conflicts

Problem Statement:
Tailwind's utility classes are global by nature, while CSS Modules provide local scoping. Mixing them can lead to confusion or unintended style overrides.

Solution: Use Them Complementarily
Do:
Use Tailwind for structural/layout/color utilities.
Use CSS Modules only when you need:
Complex animations (@keyframes)
Pseudo-element styling (::before, ::after)
Deeply nested selectors not feasible with Tailwind
Don't:
Avoid duplicating Tailwind classes in CSS Modules (e.g., don't write .btn { padding: 0.5rem; } if you can use px-2).
Don't use !important in CSS Modules unless absolutely necessary.
Example: Modal Component with Animation

// src/components/Modal/Modal.jsx
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${styles.modalContent} bg-white rounded-lg shadow-xl max-w-md w-full`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ×
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

jsx
// src/components/Modal/Modal.jsx
import styles from './Modal.module.css';

const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className={`${styles.modalContent} bg-white rounded-lg shadow-xl max-w-md w-full`}>
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700 transition"
          >
            ×
          </button>
        </div>
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;

css
/* src/components/Modal/Modal.module.css */
.modalContent {
  animation: slideIn 0.3s ease-out forwards;
}

@keyframes slideIn {
  from {
    transform: translateY(-20px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}
        `
    );
}