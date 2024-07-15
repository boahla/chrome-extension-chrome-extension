import axios from "axios";
import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";
import styled from "styled-components";

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
