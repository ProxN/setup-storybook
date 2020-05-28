import React from 'react';

interface Props {
  color?: string;
}

const Button: React.FC<Props> = ({ color }) => {
  return (
    <button type='button' style={{ background: color }}>
      test button
    </button>
  );
};

export default Button;
