import PropTypes from "prop-types";

export default function FillButton({
  icon,
  text,
  bgColor,
  hoverBgColor,
  focusOutlineColor,
  textColor,
    size,
  width
}) {
  const buttonClasses = `inline-flex items-center gap-x-2 rounded-md ${bgColor} px-${
    size === "sm" ? "6" : "5"
  } py-${
    size === "sm" ? "1.5" : "2.5"
  } text-sm font-semibold w-${width} shadow-sm ${textColor} shadow-sm ${hoverBgColor} focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${focusOutlineColor}`;

  return (
    <button type="button" className={buttonClasses}>
      {icon}
      {text}
    </button>
  );
}

FillButton.propTypes = {
  icon: PropTypes.node.isRequired,
  text: PropTypes.string.isRequired,
  bgColor: PropTypes.string,
  hoverBgColor: PropTypes.string,
  focusOutlineColor: PropTypes.string,
  textColor: PropTypes.string,
  size: PropTypes.oneOf(["sm", "md"]),
};

FillButton.defaultProps = {
  bgColor: "bg-blue-600",
  hoverBgColor: "hover:bg-blue-700",
  focusOutlineColor: "focus-visible:outline-blue-600",
  textColor: "text-white",
  size: "md",
};
