import { Wrapper, Content, ImagePlacement, Title } from "./styles";
import { OutlinedButton } from "components/common";
import { Link } from 'react-router-dom';

export const YX1Earphones = (): JSX.Element => {
  return (
    <Wrapper>
      <ImagePlacement></ImagePlacement>
      <Content>
        <Title>YX1 EARPHONES</Title>
        <Link to="/earphones/yx1-earphones">
          <OutlinedButton>See product</OutlinedButton>
        </Link>
      </Content>
    </Wrapper>
  )
}