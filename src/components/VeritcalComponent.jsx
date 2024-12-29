import React from "react";
import PropTypes from "prop-types";

/**
 * A vertical social component to display children (e.g., social icons) aligned vertically.
 *
 * @param {Object} props - Component props.
 * @param {React.ReactNode} props.children - The children elements to render inside the component.
 * @param {"left" | "right"} props.position - Position of the component on the screen (left or right).
 */
const VeritcalComponent = ({ children, position }) => {
  return (
    <div
      className={`hidden sm:block z-10 fixed bottom-0 ${
        position === "left" ? "pl-10" : "pr-10 right-0"
      }`}
    >
      <div className="flex flex-col items-center gap-4">
        {children}
        <div className="w-[1px] h-32 bg-white"></div>
      </div>
    </div>
  );
};

VeritcalComponent.propTypes = {
  /** Children elements to be rendered inside the component */
  children: PropTypes.node.isRequired,
  /** Position of the component, either "left" or "right" */
  position: PropTypes.oneOf(["left", "right"]).isRequired,
};

export default VeritcalComponent;
