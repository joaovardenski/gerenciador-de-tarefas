import PropTypes from "prop-types";

function Title(props) {
    return <h1 className="text-3xl text-slate-100 font-bold text-center">{props.children}</h1>
}

export default Title;

Title.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};