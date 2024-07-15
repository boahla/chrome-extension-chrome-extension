import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled, { keyframes } from "styled-components";

const ProjectSelect = ({
  tcId,
  setTcId,
}: {
  tcId: string | number;
  setTcId: Dispatch<SetStateAction<string | number>>;
}) => {
  const [lists, setLists] = useState<any[]>([]);
  const load = useCallback(async () => {
    try {
      const { data } = await axios.get(`https://dapi.detailez.im/api/product`, {
        params: {
          status: "ing",
        },
      });
      setLists(data.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    load();
  }, [load]);

  return (
    <Root>
      <TitleTypograph>프로젝트 이동</TitleTypograph>

      {!!lists.length ? (
        <Select
          name="languages"
          id="lang"
          value={tcId}
          onChange={(e) => {
            setTcId(e.target.value);
          }}
        >
          {lists.map((item) => (
            <option value={item.id}>{item.name}</option>
          ))}
        </Select>
      ) : (
        <section>
          <ProgressBar>
            <ProgressBarGauage></ProgressBarGauage>
          </ProgressBar>
        </section>
      )}
    </Root>
  );
};
export default ProjectSelect;

const Root = styled.div`
  border-top: 1px solid #e2e3ec;
  padding: 12px 12px 20px 12px;
`;

const TitleTypograph = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #7a7a86;
  margin-bottom: 12px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  font-size: 16px;
  line-height: 24px;
  color: #7a7a86;
  border-radius: 6px;
  background-color: #f2f3f7;
  border-color: #e2e3ec;
`;

const ProgressBar = styled.div`
  position: relative;
  width: 100%;
  height: 12px;
  border-radius: 100px;
  background-color: rgba(167, 167, 167);
  overflow: hidden;
`;

const loading = keyframes`
0% {
width: 0;
opacity:1;
}
80% {
width:100%;
opacity: 1;
}
100% {
width: 100%;
opacity:0;
}
`;

const ProgressBarGauage = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 20px;
  height: 12px;
  border-radius: 100px;
  background-color: #5e6296;
  animation-name: ${loading};
  animation-duration: 1000ms;
  animation-iteration-count: infinite;
  animation-timing-function: ease-out;
`;
