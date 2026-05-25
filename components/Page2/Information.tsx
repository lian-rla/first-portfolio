import styled from "styled-components";
import { useState } from "react";
import { media } from "styles/theme";

const Information = () => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Conatiner className="flex" {...{ isHover }}>
      <div
        className="memoji"
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={() => setIsHover(false)}
      >
        <img src="/profile.jpg.png" alt="profile" className="memoji__photo" />
        <div className="memoji__info-circle" />
        <div className="memoji__info flex">
          {`
            김민재
            2002.07.29
            Gachon Univ.
            `}
        </div>
      </div>
      <div className="info">
        <div
          className="info__button"
          onClick={() => window.open("mailto:minjae20314@gmail.com")}
        >
          minjae20314@gmail.com
        </div>
        <div
          className="info__button"
          onClick={() => window.open("https://github.com/lian-rla")}
        >
          GITHUB
        </div>
        <div
          className="info__button"
          onClick={() =>
            window.open(
              "https://www.figma.com/design/5fuoP9p9HZIBWCrA6NGeIq/%EA%B9%80%EB%AF%BC%EC%9E%AC-%EC%9D%B4%EB%A0%A5%EC%84%9C?node-id=0-1&p=f&t=IFzQUow1ZdvcY5SN-0"
            )
          }
        >
          RESUME
        </div>
        <div
          className="info__button"
          onClick={() => window.open("http://lian-kim.com")}
        >
          BLOG
        </div>
      </div>
    </Conatiner>
  );
};

const Conatiner = styled.div<{ isHover: boolean }>`
  padding: 5rem;
  position: relative;
  background-color: ${({ theme }) => theme.color.white};
  ${media.mobile} {
    flex-direction: column;
  }
  .memoji {
    cursor: pointer;
    position: relative;
    &__photo {
      width: 13rem;
      height: 13rem;
      border-radius: 50%;
      object-fit: cover;
      object-position: center top;
      display: block;
    }
    &__info-circle {
      opacity: ${({ isHover }) => (isHover ? 0.8 : 0)};
      transition: 0.3s;
      position: absolute;
      top: 0;
      width: 13rem;
      height: 13rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.color.gray};
    }
    &__info {
      font-weight: 500;
      opacity: ${({ isHover }) => (isHover ? 1 : 0)};
      transition: 0.2s;
      position: absolute;
      top: -1rem;
      color: #fff;
      white-space: pre-line;
      text-align: center;
      line-height: 2rem;
      width: 13rem;
      height: 13rem;
    }
  }
  .info {
    border-radius: 2.5rem;
    padding: 4rem;
    margin-left: 5rem;
    box-sizing: border-box;
    height: 16rem;
    display: flex;
    font-weight: 600;
    letter-spacing: 0.1rem;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: 0.2rem solid ${({ theme }) => theme.color.blue};
    ${media.mobile} {
      margin-top: 5rem;
      margin-left: 0;
    }
    &__button {
      cursor: pointer;
      width: 100%;
      padding: 0.8rem 2rem;
      border-radius: 2rem;
      border: 0.5rem solid ${({ theme }) => theme.color.white};
      background-color: ${({ theme }) => theme.color.gray};
      color: ${({ theme }) => theme.color.white};
      :not(:first-child) {
        margin-top: 0.6rem;
      }
      :hover {
        background-color: ${({ theme }) => theme.color.blue};
      }
    }
  }
`;

export default Information;
