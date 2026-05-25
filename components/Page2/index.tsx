import styled from "styled-components";
import { media } from "styles/theme";
import TextSlider from "./TextSlider";
import ProgressBar from "./ProgressBar";
import Information from "./Information";

const Page2 = () => (
  <Wrapper className="flex">
    <Container className="flex">
      <TextSlider />
      <ProgressBar />
      <Information />
      <TextBox className="flex pc-only">
        <div>
          <Bold>AI 개발</Bold>에 깊이 있게 파고드는
          <Bold>주니어 개발자</Bold>입니다.{"\n"}
          Python과 PyTorch를 기반으로 머신러닝, 영상처리, 임베디드 시스템까지
          분야를 넘나들며 개발하고 있습니다.{"\n"}
          <Bold>
            " 만들고 싶은 것이 있으면 직접 만든다. "
          </Bold>
          {"\n"}
          항상 새로운 문제를 찾아 나만의 방식으로 해결하려 합니다.{"\n"}
          LLM, 컴퓨터 비전, 임베디드까지
          <Bold>다양한 도메인의 경험</Bold>을 쌓아왔으며,{"\n"}
          이를 바탕으로 계속해서
          <Bold>실용적인 AI 서비스</Bold>를 만들어나가고자 합니다.
        </div>
      </TextBox>

      <TextBox className="flex mobile-only">
        <div>
          <Bold>AI 개발</Bold>에 깊이 있게 파고드는
          <Bold>주니어 개발자</Bold>입니다.{"\n"}
          Python과 PyTorch를 기반으로{"\n"} 머신러닝, 영상처리, 임베디드 시스템까지
          분야를 넘나들며 개발하고 있습니다.{"\n"}
          <Bold>
            " 만들고 싶은 것이 있으면 직접 만든다. "
          </Bold>
          {"\n"}
          항상 새로운 문제를 찾아 나만의 방식으로 해결하려 합니다.{"\n"}
          LLM, 컴퓨터 비전, 임베디드까지{"\n"}
          <Bold>다양한 도메인의 경험</Bold>을 쌓아왔으며,{"\n"}
          계속해서
          <Bold>실용적인 AI 서비스</Bold>를 만들어나가고자 합니다.
        </div>
      </TextBox>
    </Container>
  </Wrapper>
);

const Wrapper = styled.div`
  margin-top: 100vh;
  height: 100vh;
  padding: 2rem 0;
  box-sizing: border-box;
`;

const Container = styled.div`
  border-radius: 2rem;
  max-width: 1373px;
  height: 100%;
  padding-top: 3rem;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.color.white};
  overflow: hidden;
  position: relative;
  flex-direction: column;
`;

const TextBox = styled.div`
  white-space: pre-line;
  line-height: 230%;
  margin-top: 3rem;
  font-size: 1.1rem;
  ${media.mobile} {
    font-size: 1.3rem;
    line-height: 200%;
    font-weight: 700;
    padding-left: 7rem;
  }
`;

const Bold = styled.span`
  font-weight: 700;
  font-size: 1.3rem;
  margin-left: 0.3rem;
  background: ${({ theme }) => theme.color.gradient};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  ${media.mobile} {
    font-size: 1.5rem;
    font-weight: 800;
  }
`;

export default Page2;
