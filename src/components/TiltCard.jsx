import { Tilt } from "react-tilt";

const defaultOptions = {
  reverse: false,
  max: 35,
  perspective: 1000,
  scale: 1.1,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

export const TiltCard = ({ children }) => {
  return <Tilt options={defaultOptions}>{children}</Tilt>;
};
