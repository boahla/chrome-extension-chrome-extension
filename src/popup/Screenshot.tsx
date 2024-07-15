import styled from "styled-components";
import { ChromeMessage } from "../types";
import { getCurrentTabUId } from "../chrome/utils";

const Screenshot = ({ tcId }: { tcId: number | string }) => {
  const sendTestMessage = () => {
    const message: ChromeMessage = {
      message: "screenshotAll",
      tcId,
    };

    getCurrentTabUId((id) => {
      id &&
        chrome.tabs.sendMessage(id, message, () => {
          console.log("send msg");
        });
    });
  };

  const onClickFullScreenshot = async () => {
    try {
      sendTestMessage();
    } catch (error) {
      console.log({ error });
    }
  };

  const sendTestMessageSection = () => {
    const message: ChromeMessage = {
      message: "screenshotSection",
      tcId: tcId,
    };

    getCurrentTabUId((id) => {
      id &&
        chrome.tabs.sendMessage(id, message, () => {
          console.log("send msg");
        });
    });
  };

  const onClickSecionScreenshot = async () => {
    try {
      sendTestMessageSection();
    } catch (error) {
      console.log({ error });
    }
  };

  return (
    <Root>
      <TitleTypograph>스크린샷</TitleTypograph>
      <ButtonBox>
        <FullCaptureButton
          className="section-screenshot-button"
          onClick={onClickSecionScreenshot}
          disabled={!tcId}
        >
          선택 영역 스크린샷
        </FullCaptureButton>
        <FullCaptureButton
          className="full-screenshot-button"
          onClick={onClickFullScreenshot}
          disabled={!tcId}
        >
          전체 화면 스크린샷
        </FullCaptureButton>
      </ButtonBox>
    </Root>
  );
};

const Root = styled.div`
  padding: 12px 12px;
`;

const TitleTypograph = styled.div`
  font-size: 12px;
  line-height: 18px;
  color: #7a7a86;
  margin-bottom: 12px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  & > button {
    &:first-child {
      margin-right: 12px;
    }
  }
`;

const FullCaptureButton = styled.button`
  background-color: #5e6296;
  font-size: 14px;
  font-weight: bold;
  color: #fff;
  padding: 12px;
  border-radius: 6px;
  border: none;
  width: 100%;
  cursor: pointer;
  &:disabled {
    cursor: initial;
    background-color: #7a7a86;
  }
`;

export default Screenshot;
