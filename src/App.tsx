import { Navbar } from "components/app/Navbar/Navbar";
import styled from "styled-components";

const HeaderSection = styled.div`
  width: 100%;
  background-color: ${({ theme }) => theme.background.dark};
`

export default (): JSX.Element => {
  return (
    <HeaderSection>
      <Navbar />
    </HeaderSection>
  )
}