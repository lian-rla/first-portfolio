import { useEffect, useState, useMemo } from "react";
import styled, { keyframes } from "styled-components";
import { theme } from "styles/theme";

function multipleBoxShadow(n: number): string {
  const shadows: string[] = [];
  for (let i = 0; i < n; i++) {
    const x = Math.floor(Math.random() * 700);
    const y = Math.floor(Math.random() * 100);
    shadows.push(`${x}vh ${y}vh #FFF`);
  }
  return shadows.join(", ");
}

const animStar = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100vh); }
`;

const Background = () => {
  const [bgColor, setBgColor] = useState<string>(theme.color.black);
  const shadowsSmall = useMemo(() => multipleBoxShadow(700), []);
  const shadowsMedium = useMemo(() => multipleBoxShadow(200), []);
  const shadowsBig = useMemo(() => multipleBoxShadow(100), []);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (innerHeight * 2.5 < pageYOffset) setBgColor(theme.color.white);
      else setBgColor(theme.color.black);
    });
  }, []);

  return (
    <Container bgColor={bgColor}>
      {bgColor === theme.color.black && (
        <>
          <Stars shadows={shadowsSmall} size={1} duration={50} />
          <Stars shadows={shadowsMedium} size={2} duration={70} />
          <Stars shadows={shadowsBig} size={3} duration={100} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div<{ bgColor: string }>`
  background-color: ${({ bgColor }) => bgColor};
  transition: 0.2s;
  width: 100%;
  height: 100%;
  position: fixed;
  z-index: -1;
  top: 0;
  left: 0;
`;

const Stars = styled.div<{ shadows: string; size: number; duration: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  background: transparent;
  box-shadow: ${({ shadows }) => shadows};
  animation: ${animStar} ${({ duration }) => duration}s linear infinite;
  &:after {
    content: " ";
    position: absolute;
    top: 100vh;
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
    background: transparent;
    box-shadow: ${({ shadows }) => shadows};
  }
`;

export default Background;
