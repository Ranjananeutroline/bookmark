import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";

function useOutsideHandler(ref, props) {
  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        props.clickOutside();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
   
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    
    };
  }, [ref]);
}

function OutsideHandler(props) {
  const wrapperRef = useRef(null);
  useOutsideHandler(wrapperRef, props);
  return <div ref={wrapperRef}>{props.children}</div>;
}

OutsideHandler.propTypes = {
  children: PropTypes.element.isRequired,
};

export default OutsideHandler;
