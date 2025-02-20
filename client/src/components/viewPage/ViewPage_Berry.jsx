import React from "react";
import styled from "styled-components";
import LazyLoad from "react-lazyload";
import { icon_Berry } from "Assets/icons";
import { ViewPage_ButtonPrice } from "./common";
import {
  viewPage_Berry1,
  viewPage_Berry2,
  viewPage_Berry3,
  viewPage_Berry4,
  viewPage_Berry5,
  viewPage_Berry6,
  viewPage_Berry7,
  viewPage_Berry8,
  viewPage_Berry9,
} from "Assets/images";
import {
  video_ViewPageBerry1,
  video_ViewPageBerry2,
  video_ViewPageBerry3,
  video_ViewPageBerry4,
  video_ViewPageBerry5,
  video_ViewPageBerry6,
} from "Assets/videos";

export const ViewPage_Berry = () => {
  const handleVideoLoad = (event) => event.target.play();

  return (
    <Container>
      <TextWrapper>
        <TitleWrapper>
          <Title>Berry Whisper</Title>
          <Icon src={icon_Berry} />
        </TitleWrapper>
        <SubTitle>콘크리트케익 베리 위스퍼</SubTitle>
        <Text>
          유럽의 야생 베리 - 라즈베리, 크랜베리, 블랙베리, 블루베리, 딸기 그리고
          신비로운 아사이 베리에 관한 경이로운 이야기를 감상해보세요.
        </Text>
        <ViewPage_ButtonPrice />
      </TextWrapper>
      <ImageContainer>
        <LazyLoad height={200} offset={100} once>
          <Image src={viewPage_Berry1} />
        </LazyLoad>
        <VideoWrapper style={{ aspectRatio: "1822 / 1788" }}>
          <LazyLoad height={200} offset={100} once>
            <Video style={{ width: "174%" }} onLoadedData={handleVideoLoad}>
              <source src={video_ViewPageBerry1} />
            </Video>
          </LazyLoad>
          <VideoImage src={viewPage_Berry2} />
        </VideoWrapper>
        <LazyLoad height={200} offset={100} once>
          <Image src={viewPage_Berry3} />
        </LazyLoad>
        <VideoWrapper
          style={{ aspectRatio: "1822 / 2152", background: "#fff" }}
        >
          <LazyLoad height={200} offset={100} once>
            <Video style={{ width: "78.7%" }} onLoadedData={handleVideoLoad}>
              <source src={video_ViewPageBerry2} />
            </Video>
          </LazyLoad>
        </VideoWrapper>
        <LazyLoad height={200} offset={100} once>
          <Image src={viewPage_Berry4} />
        </LazyLoad>
        <VideoWrapper style={{ aspectRatio: "1822 / 1570", zIndex: -1 }}>
          <LazyLoad height={200} offset={100} once>
            <Video style={{ height: "100%" }} onLoadedData={handleVideoLoad}>
              <source src={video_ViewPageBerry3} />
            </Video>
          </LazyLoad>
        </VideoWrapper>
        <LazyLoad height={200} offset={100} once>
          <ImageOverlap src={viewPage_Berry5} />
        </LazyLoad>
        <VideoWrapper style={{ aspectRatio: "1822 / 1450" }}>
          <LazyLoad height={200} offset={100} once>
            <Video style={{ height: "100%" }} onLoadedData={handleVideoLoad}>
              <source src={video_ViewPageBerry4} />
            </Video>
          </LazyLoad>
        </VideoWrapper>
        <LazyLoad height={200} offset={100} once>
          <Image src={viewPage_Berry6} />
        </LazyLoad>
        <VideoWrapper style={{ aspectRatio: "1822 / 1450" }}>
          <LazyLoad height={200} offset={100} once>
            <Video style={{ height: "100%" }} onLoadedData={handleVideoLoad}>
              <source src={video_ViewPageBerry5} />
            </Video>
          </LazyLoad>
        </VideoWrapper>
        <LazyLoad height={200} offset={100} once>
          <Image src={viewPage_Berry7} />
        </LazyLoad>
        <VideoWrapper style={{ aspectRatio: "1822 / 2360" }}>
          <LazyLoad height={200} offset={100} once>
            <Video
              style={{ height: "103%", top: 0, left: "-8%", transform: "none" }}
              onLoadedData={handleVideoLoad}
            >
              <source src={video_ViewPageBerry6} />
            </Video>
          </LazyLoad>
          <VideoImage src={viewPage_Berry8} />
        </VideoWrapper>
        <LazyLoad height={200} offset={100} once>
          <Image src={viewPage_Berry9} />
        </LazyLoad>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.div`
  margin: auto;
  padding: 120px 0 0;
  max-width: 600px;

  @media (min-width: 768px) {
    padding-bottom: 200px;
  }
`;
const TextWrapper = styled.div`
  position: relative;

  padding: 0 16px 110px;
  width: 100%;

  @media (min-width: 500px) {
    padding-bottom: 0;
  }
`;
const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
const Title = styled.h4`
  font-size: 36px;
`;
const SubTitle = styled.p`
  margin-top: 9px;
  font-size: 20px;
`;
const Text = styled.p`
  margin-top: 15px;
  font-size: 16px;
`;
const Icon = styled.img`
  width: 40px;
`;
const ImageContainer = styled.div`
  margin-top: 16px;
  line-height: 0;
`;
const Image = styled.img`
  width: 100%;
`;
const ImageOverlap = styled.img`
  --ratio: -228 / 1822;
  margin-top: calc(var(--ratio) * 100%);
  width: 100%;
`;
const VideoWrapper = styled.div`
  position: relative;
  width: 100%;
  line-height: 0;
  overflow: hidden;
`;
const Video = styled.video.attrs(() => ({
  autoPlay: true,
  autoplay: true,
  loop: true,
  muted: true,
  playsinline: true,
  playsInline: true,
  playsInLine: true,
}))`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
const VideoImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
