import React, { useRef, useEffect } from 'react';
import './cursorAnimation.css'

const CursorAnimation = () => {
    const cursorRef = useRef(null);
  
    useEffect(() => {
    //  const cursor = cursorRef.current;
      const cursor = cursorRef.current ?? document.createElement('div');
  
      const handleMouseMove = (e) => {
        if (cursor) {
          cursor.style.left = e.clientX + 'px';
          cursor.style.top = e.clientY + 'px';
        }
      };
  
      window.addEventListener('mousemove', handleMouseMove);
  
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
      };
    }, []);
  
    return (
      <div ref={cursorRef} className="cursor"></div>
    );
  }

  export default CursorAnimation