import isDebugModeActive from './debug';

const LOG = (...args) => {
  if (isDebugModeActive()) {
    const newArgs = Array.prototype.slice.call(args);
    newArgs.unshift(
      '%c neohouse ',
      '-webkit-linear-gradient(left, #339966 37%, #339966 100%); background: linear-gradient(-270deg, #339966 37%, #339966 100%); color: #FFF; font-weight: 600; text-transform: uppercase;',
      '[DEBUG: ON]'
    );
    console.log(...newArgs); // eslint-disable-line
  }
};

export default LOG;