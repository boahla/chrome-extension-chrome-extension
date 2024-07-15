import styled from "styled-components";
import Header from "./Header";
import Screenshot from "./Screenshot";
import ProjectSelect from "./ProjectSelect";
import { useState } from "react";

const Popup = () => {
  const [tcId, setTcId] = useState<number | string>(0);
  return (
    <Root>
      <Header />
      <Screenshot tcId={tcId} />
      <ProjectSelect tcId={tcId} setTcId={setTcId} />
    </Root>
  );
};
export default Popup;

const Root = styled.h1`
  padding: 10;
  width: 356px;
`;
