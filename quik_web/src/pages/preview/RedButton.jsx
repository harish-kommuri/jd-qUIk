const RedButton = ({ children, onClick, className = "" }) => { return (<button onClick={onClick} className={`bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded transition-colors duration-200 ${className}`} > {children} </button>); }; 

export default RedButton
