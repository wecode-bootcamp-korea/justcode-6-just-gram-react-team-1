import React, { forwardRef } from 'react';

const LoginInput = forwardRef(
  ({ id, type, placeholder, onAbleLoginBtn }, ref) => {
    return (
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={onAbleLoginBtn}
        ref={ref}
      />
    );
  }
);

export default LoginInput;
