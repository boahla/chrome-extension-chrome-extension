import styled from "styled-components";
import Header from "./components/Header";
import ProjectSelect from "./components/ProjectSelect";
import { useState } from "react";
import Screenshot from "./components/Screenshot";

const Popup = () => {
  const [tcId, setTcId] = useState<number | string>(0);
  return (
    <Root>
      <Header />
      <ProjectSelect tcId={tcId} setTcId={setTcId} />
      <Screenshot tcId={tcId} />
    </Root>
  );
};
export default Popup;

const Root = styled.h1`
  padding: 10;
  width: 356px;
`;
