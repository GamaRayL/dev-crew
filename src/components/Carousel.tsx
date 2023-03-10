import { FC, useState } from "react";
import styled, { css } from "styled-components";

const S: any = {};

const flexAln = css`
  display: flex;
  align-items: center;
`;

S.Carousel = styled.div`
  ${flexAln}
  justify-content: center;
  position: relative;
`;
S.Svg = styled.svg`
  width: 48px;
  height: 48px;
  opacity: 0.28;
  cursor: pointer;
  stroke: ${props => props.theme.colors.white};
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    opacity: 1;
    stroke: ${props => props.theme.colors.orange};
  }
`;
S.LeftArow = styled(S.Svg)`
  position: absolute;
  left: 0;
  top: 50%;
  transform: rotate(90deg);
`;
S.RightArrow = styled(S.Svg)`
  position: absolute;
  right: 0;
  transform: rotate(-90deg);
`;
S.DotBox = styled.div`
  position: absolute;
  display: flex;
  gap: 18px;
  bottom: 0;
`;
S.Dot = styled.div<{ selected: boolean; }>`
  width: 44px;
  height: 6px;
  background-color: ${props => props.theme.colors.darkBlue};;
  border-radius: 4px;
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  ${({ selected }) => selected && css`
    transform: scale(1.1);
    background-color: ${props => props.theme.colors.orange};
  `}

  &:hover {
    transform: scale(1.1);
    background-color: ${props => props.theme.colors.orange};
  }
`;
S.Item = styled.div`
  ${flexAln}
  gap: 58px;
  position: relative;

  &:after {
    content: "";
    position: absolute;
    top: 184px;
    left: 64px;
    box-shadow: 0 0 68px 14px #B345F1;
    height: 20px;
    z-index: -1;
  }

  &:before {
    content: "";
    position: absolute;
    bottom: 190px;
    left: 334px;
    box-shadow: 0 0 68px 16px rgba(255, 110, 48);;
    height: 20px;
    z-index: -1;
  }
`;
S.Person = styled.div`
  width: 399px;
  height: 492px;
  user-select: none;
  overflow: hidden;

  &:before {
    content: "“";
    top: -20px;
    left: -28px;
    position: absolute;
    font-family: 'Lora', serif;
    font-size: 250px;
    transform: rotate(22deg);
    background:
      linear-gradient(188.88deg, rgba(252, 252, 252, 0) 20.34%, rgba(255, 255, 255, 0.5) 155.72%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
  }
`;
S.Label = styled.div`
  --b:1px;
  display: inline-block;
  position: relative;
  z-index: 0;
  background-color: ${props => props.theme.colors.darkBlue20};
  overflow: hidden;
  border-radius: 8px;
  backdrop-filter: blur(25px);
  padding: 0 24px;
  bottom: 122px;
  left: 128px;

  &:before {
    content:"";
    position:absolute;
    z-index:-1;
    inset: 0;
    background: var(--c, linear-gradient(to right, #FFFFFF1A, #FFFFFF00));
    padding: var(--b);
    border-radius: 8px;
    mask:
       linear-gradient(#FFF 0 0) content-box,
       linear-gradient(#FFF 0 0);
    mask-composite: xor;
    transition: ${props => props.theme.transition.middleAll};
  }

  &:after {
    content: "";
    position: absolute;
    height: 8px;
    right: 20px;
    bottom: 5px;
    box-shadow: 0 0 40px 8px #007ACC;
    transition: ${props => props.theme.transition.middleAll};
  }
`;
S.Prgrph = styled.p`
  max-width: 393px;
  line-height: 30px;
  margin-bottom: 92px;
  font-size: ${props => props.theme.fontSizes.small};
  color: ${props => props.theme.colors.white78};
`;
S.Box = styled.div`
  position: relative;
  pointer-events: none;
`;
S.CircleImg = styled.img`
  position: absolute;
  bottom: 124px;
  right: 20px;
  z-index: -1;
`;
S.Name = styled.h3`
  margin: 16px 0 10px 2px;
  font-size: ${props => props.theme.fontSizes.medium26};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white78};
`;
S.Career = styled.p`
  margin-bottom: 18px;
`;

interface ICarouselProps {
  arSlides: {
    name: string;
    img: string;
    career: string;
    selected: boolean;
  }[];
}

export const Carousel: FC<ICarouselProps> = ({ arSlides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [slides, setSlides] = useState(arSlides);

  const getPreviousSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setSlides(
      slides.map((slide: any, slideIndex: any) =>
        slideIndex === newIndex
          ? { ...slide, selected: !slide.selected }
          : { ...slide, selected: false }
      )
    );
  };

  const getNextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setSlides(
      slides.map((slide, slideIndex) =>
        slideIndex === newIndex
          ? { ...slide, selected: !slide.selected }
          : { ...slide, selected: false }
      )
    );
  };

  const getToSlide = (index: number) => {
    setCurrentIndex(index);
    setSlides(
      slides.map((slide, slideIndex) =>
        slideIndex === index
          ? { ...slide, selected: !slide.selected }
          : { ...slide, selected: false }
      )
    );
  };

  return (
    <S.Carousel>
      <S.LeftArow onClick={getPreviousSlide}><use xlinkHref={`sprites/ui.svg#arrow`}></use></S.LeftArow>
      <S.Item>
        <S.Box>
          <S.Person>
            <img style={{ transition: "0.4s all", width: "100%" }} src={`images/${slides[currentIndex]["img"]}`} alt="" />
            <S.CircleImg src="images/circle.svg" alt="" />
          </S.Person>
          <S.Label>
            <S.Name>{slides[currentIndex]["name"]}</S.Name>
            <S.Career>{slides[currentIndex]["career"]}</S.Career>
          </S.Label>
        </S.Box>
        <div>
          <S.Prgrph>Incididunt cillum do sint sint enim ullamco id deserunt mollit qui reprehenderit do. Velit ex tempor cillum ad sint occaecat. Do nulla velit labore occaecat do deserunt Lorem magna officia incididunt consectetur amet. Sunt consectetur veniam minim ex commodo sint non. Occaecat aute officia excepteur non laboris id qui ad.</S.Prgrph>
        </div>
      </S.Item>
      <S.RightArrow onClick={getNextSlide}><use xlinkHref={`sprites/ui.svg#arrow`}></use></S.RightArrow>
      <S.DotBox>
        {slides.map((slide, slideIndex) => (
          <S.Dot key={slideIndex} selected={slide.selected} onClick={() => getToSlide(slideIndex)}></S.Dot>
        ))}
      </S.DotBox>
    </S.Carousel>
  );
};