import { ThemeProvider, Heading, Box } from "@primer/react";
import Checker from "./Checker";
import styled from "styled-components";
import ColorModeSwitcher from "./ColorModeSwitcher";
export default function App() {
  return (
    <ThemeProvider colorMode="auto">
      <Box bg="canvas.inset">
        <StyledLayout>
          <ColorModeSwitcher />
          <Heading as="h1" sx={{ color: "fg.default", fontSize: 24, textAlign: "center" }}>Kiểm tra tiếng Việt</Heading>
          <Heading as="h2" sx={{ color: "fg.default", fontSize: 18, textAlign: "center", marginTop: 3 }}>Chỉ hỗ trợ tiếng Việt và một số ký tự đặc biệt phổ biến</Heading>
          <Checker />
        </StyledLayout>
      </Box>
    </ThemeProvider>
  )
}

const StyledLayout = styled.div`
  height: 100vh;
  max-width: 768px;
  margin: auto;
  padding: 32px;
  font-family: 'Be Vietnam Pro', san-serif;
`
