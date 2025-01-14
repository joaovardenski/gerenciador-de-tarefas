import PropTypes from "prop-types";

function Button(props) {
  return (
    <button {...props} className={`bg-slate-400 p-2 rounded-md text-white ${props.className || ""}`}>
      {props.children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;
