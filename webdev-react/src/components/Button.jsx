const Button = ({children, onClick, color = 'blue', disabled = false}) => {
  const colorClasses = {
    blue: 'bg-blue-500 hover:bg-blue-600',
    red: 'bg-red-500 hover:bg-red-600',
    green: 'bg-green-500 hover:bg-green-600',
  };

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`${colorClasses[color]} text-white px-4 py-2 rounded transition disabled:opacity-50 disabled:cursor-not-allowed`}
    >
      {children}
    </button>
  );
};

export default Button;
