function Button({ child, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {child}
    </button>
  );
}
export default Button;
