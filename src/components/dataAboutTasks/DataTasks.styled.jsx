import styled from "styled-components";

export const PopBrowse = styled.div`
  display: block;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 7;
`;
export const PopBrowseContainer = styled.div`
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
export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  position: relative;
`;

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;

  & h3 {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }
`;

export const PopBrowseStatus = styled.div`
  margin-bottom: 11px;
  & p {
    margin-bottom: 14px;
  }
`;
export const PopBrowseStatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const PopBrowseStatusTheme = styled.label`
  height: 30px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  align-items: center;
  padding: 0px;
  margin: 14px 0px;
  border-radius: 24px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: rgb(148, 166, 190);
  color: rgb(255, 255, 255);
  padding: 8px 20px 8px 20px;
  margin-right: 7px;
  box-sizing: border-box;
  /* & p {
    box-sizing: border-box;
border: 0.7px solid rgba(148, 166, 190, 0.4);
border-radius: 24px;
color: rgb(255, 255, 255);
font-size: 14px;
font-weight: 400;
line-height: 10px;
text-align: center;
padding: 10px 14px 10px 14px;
background: rgb(148, 166, 190);
  } */
`;
export const PopBrowseStatusThemeInput = styled.input``;

export const PopBrowseWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
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

export const PopBrowseContentThemeTop = styled.div`
  display: block;
  position: static;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 20px 8px 20px;
  flex: none;
  order: 1;
  border-radius: 24px;
  margin: 0px 10px;
  background-color: ${(props) => props.color || "gray"};
`;

export const PopBrowseContentTheme = styled.div`
  display: none;
  margin-bottom: 20px;
`;

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 20px;
`;

export const PopBrowseFormBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PopBrowseBtn = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  flex-direction: row;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  margin-top: 18px;
  padding: 0 14px;
`;

export const PopBrowseBtnGroup = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const PopBrowseBtnEdit = styled.button`
  height: 30px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #76c043);
  outline: none;
  background: transparent;
  color: #76c043;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  margin-right: 8px;

  &:hover {
    background-color: #4e832b;
    color: #fff;
  }
`;

export const PopBrowseBtnDelete = styled.button`
  height: 30px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #76c043);
  outline: none;
  background: transparent;
  color: #76c043;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  &:hover {
    background-color: #4e832b;
    color: #fff;
  }
`;

export const PopBrowseBtnClose = styled.button`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  background: #76c043;
  border: none;
  outline: none;

  & p {
    color: #ffffff;
  }
  &:hover {
    background-color: #4e832b;
    color: #fff;
  }
`;

export const PopBrowseEditMode = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
`;

export const PopBrowseEditBtnGroup = styled.div`
  display: flex;
  margin-right: 8px;
`;

export const PopBrowseBtnEditSave = styled.button`
  width: 99px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  background: #76c043;
  border: none;
  outline: none;
  color: #ffffff;
  margin-right: 8px;
  &:hover {
    background-color: #4e832b;
    color: #fff;
  }
`;

export const PopBrowseBtnEditUndo = styled.button`
  width: 99px;
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #76c043);
  outline: none;
  background: transparent;
  color: #76c043;
  margin-right: 8px;
  &:hover {
    background-color: #4e832b;
    color: #ffffff;
  }
`;

export const PopBrowseBtnEditDelete = styled.button`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #76c043);
  outline: none;
  background: transparent;
  color: #76c043;

  &:hover {
    background-color: #4e832b;
    color: #ffffff;
  }
`;

export const PopBrowseBtnEditClose = styled.button`
  height: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 10px 14px 10px 14px;
  border-radius: 4px;
  background: #76c043;
  border: none;
  outline: none;

  & p {
    color: #ffffff;
  }
  &:hover {
    background-color: #4e832b;
    color: #fff;
  }
`;

export const EditedArea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: #eaeef6;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  border-radius: 8px;
  font-size: 14px;
  line-height: 1;
  letter-spacing: -0.14px;
  margin-top: 14px;
  height: 200px;
`;
