import React from 'react';
import styles, { button } from './styles';

const Hello = () => {
  return (
    <div>
      <p>Hello World!</p>
      <button>click here</button>
      <style jsx>{styles}</style>
      <style jsx>{button}</style>
    </div>
  );
};

export default Hello;
