import styled from "styled-components";

const S: any = {};

S.Footer = styled.div`
  display: flex;
  gap: 158px;
  padding: 72px 14px 98px 0;
`;
S.LogoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 25px;
`;
S.LogoIcon = styled.svg`
  width: 38px;
  height: 38px;
  cursor: pointer;
  transition: ${props => props.theme.transition.middleAll};

  &:hover {
    transform: scale(1.1);
  }
`;
S.LogoName = styled.span`
font-size:  ${props => props.theme.fontSizes.medium22};
  font-weight: ${props => props.theme.fontWeight.semiBold};
  color: ${props => props.theme.colors.white};
`;
S.Copyright = styled.p`
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white90};
  margin-bottom: 22px;
`;
S.Description = styled.p`
font-size:  ${props => props.theme.fontSizes.small};
  max-width: 260px;
  line-height: 25px;
`;
S.Title = styled.h3`
font-size:  ${props => props.theme.fontSizes.medium20};
  font-weight: ${props => props.theme.fontWeight.medium};
  color: ${props => props.theme.colors.white90};
`;
S.List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;
  padding-left: 0;
`;
S.Item = styled.li`
  font-weight: ${props => props.theme.fontWeight.medium};
  line-height: 24px;
`;
S.ItemActive = styled(S.Item)`
  transition: ${props => props.theme.transition.middleAll};
  cursor: pointer;

  &:hover {
    color: ${props => props.theme.colors.white};
  }
`;
S.Group = styled.div`
  display: flex;
  gap: 115px;
`
S.GroupBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 28px;
`

export const Footer = () => {
  return (
    <S.Footer>
      <div>
        <S.LogoBox>
          <S.LogoIcon>
            <use xlinkHref="sprites/logos.svg#logo"></use>
          </S.LogoIcon>
          <S.LogoName>antools.</S.LogoName>
        </S.LogoBox>
        <S.Copyright>Copyright 2021. Antools</S.Copyright>
        <S.Description>
          Antool is a web collection of information on paid or free Design and Development tools
        </S.Description>
      </div>
      <S.Group>
        <S.GroupBox>
          <S.Title>Contact Us</S.Title>
          <S.List>
            <S.Item>+621987463</S.Item>
            <S.Item>M Building, No.10 A</S.Item>
            <S.Item>antools@awesome.com</S.Item>
          </S.List>
        </S.GroupBox>
        <S.GroupBox>
          <S.Title>Categories</S.Title>
          <S.List>
            <S.ItemActive>Design</S.ItemActive>
            <S.ItemActive>Development</S.ItemActive>
          </S.List>
        </S.GroupBox>
        <S.GroupBox>
          <S.Title>Company Info</S.Title>
          <S.List>
            <S.ItemActive>About Us</S.ItemActive>
            <S.ItemActive>Our Partners</S.ItemActive>
            <S.ItemActive>Blog</S.ItemActive>
          </S.List>
        </S.GroupBox>
      </S.Group>
    </S.Footer>
  );
};