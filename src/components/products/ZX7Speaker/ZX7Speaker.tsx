import { Wrapper, Content, Title } from './styles';
import { OutlinedButton } from 'components/common';
import { Link } from 'react-router-dom';

export const ZX7Speaker = (): JSX.Element => {
  return (
    <Wrapper>
      <Content>
        <Title>ZX7 SPEAKER</Title>
        <Link to="/speakers/zx7-speaker">
          <OutlinedButton>See product</OutlinedButton>
        </Link>
      </Content>
    </Wrapper>
  )
}