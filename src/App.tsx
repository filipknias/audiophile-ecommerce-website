import { Navbar } from "components/app/Navbar/Navbar";
import styled from "styled-components";
import { Container } from "components/common/Container";

const HeaderSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.dark};
`

export default (): JSX.Element => {
  return (
    <HeaderSection>
      <Container>
        <Navbar />
      </Container>
    </HeaderSection>
  )
}