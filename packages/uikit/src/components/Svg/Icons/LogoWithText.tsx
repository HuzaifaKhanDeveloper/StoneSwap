import Image from "next/image"
import React from "react";


interface LogoProps {
  isDark: boolean;
}

const Logo: React.FC<LogoProps> = ({ isDark,...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (
    <Image src="/StoneSwap.png" width="244" height="64" />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
