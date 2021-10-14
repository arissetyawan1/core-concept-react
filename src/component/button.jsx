// membuat sebuah atomic component yang akan digunakan secara reusable tanpa mengganggu komponen yang lain

const Button = ({ text, color, onClick }) => {
  const className = [
    "header-btn",
    color === "black" && "black-color",
    color === "red" && "main-red-color",
  ].join(" ");

  return (
    <button className={className} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
