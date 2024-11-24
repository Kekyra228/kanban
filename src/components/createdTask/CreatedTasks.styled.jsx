import styled from "styled-components";

const colorTheme = {
  "Web Design": {
    backgroundColor: "#E9D4FF",
    color: "#9a48f1",
  },
  Research: {
    backgroundColor: "#B4FDD1",
    color: "#06b16e",
  },
  Copywriting: {
    backgroundColor: "#FFE4C2",
    color: "#ff6d00",
  },
};

export const NewCard = styled.div`
  display: block;
  width: 100%;
  min-width: 375px;
  height: 100%;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 6;
  &:target {
    display: block;
  }
`;

export const NewCardContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 0 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.4);
`;

export const NewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const NewCardContent = styled.div`
  display: block;
  text-align: left;

  & h3 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
  }
`;

export const NewCardClose = styled.div`
  position: absolute;
  top: 20px;
  right: 30px;
  color: #94a6be;
  cursor: pointer;
  &:hover {
    color: #000000;
  }
`;

export const NewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
`;

export const NewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const NewCardFormTitle = styled.label`
  color: #000;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  padding-bottom: 10px;
`;

export const NewCardFormInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const NewCardFormTextArea = styled.textarea`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
`;

export const NewCardFormBlock = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 10px;
`;

export const CreateNewBtn = styled.button`
  width: 132px;
  height: 30px;
  background-color: #76c043;
  border-radius: 4px;
  border: 0;
  outline: none;
  font-size: 14px;
  font-weight: 500;
  line-height: 1;
  color: #ffffff;
  float: right;
  &:hover {
    background-color: #4e832b;
  }
`;

export const NewCardCategoris = styled.div`
  margin-bottom: 20px;
  & p {
    margin-bottom: 14px;
  }
`;
const topicTheme = {
  "Web Design": {
    backgroundColor: "#E9D4FF",
    color: "#9a48f1",
  },
  Research: {
    backgroundColor: "#B4FDD1",
    color: "#06b16e",
  },
  Copywriting: {
    backgroundColor: "#FFE4C2",
    color: "#ff6d00",
  },
};

export const NewCardCategorisThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const NewCardCategorisTheme = styled.label`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  margin-right: 7px;
  opacity: 0.4;
  background-color: ${(props) =>
    topicTheme[props.$topic]?.backgroundColor || "gray"};

  color: ${(props) => topicTheme[props.$topic]?.color || "black"};
`;
