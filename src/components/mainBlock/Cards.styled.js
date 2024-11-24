import styled from "styled-components";
import { topicStyles } from "./topic";

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

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #ffffff;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: box-shadow 0.2s ease-in-out;

  &:hover {
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.2);
  }
`;

export const CardContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;
`;

export const CardItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${(props) =>
    colorTheme[props.$theme]?.backgroundColor || "gray"};

  & p {
    font-size: 10px;
    font-weight: 600;
    line-height: 10px;
    color: ${(props) => colorTheme[props.$theme]?.color || "black"};
  }
`;

export const CardButton = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
  & div {
    width: 4px;
    height: 4px;
    border-radius: 50%;
    background-color: #94a6be;
  }
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  & p {
    margin-left: 6px;
    font-size: 10px;
    line-height: 13px;
    color: #94a6be;
    letter-spacing: 0.2px;
  }
  & svg {
    width: 13px;
  }
`;
