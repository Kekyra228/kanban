import styled from "styled-components";

// const toggleTheme = {
//   "Светлая":{
//     color: "#FFFFFF"
//   },
//   "Темная":{
//     backgroundColor: "#20202C",
//   }
// }

export const HeaderMain = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: #fddb6d;
`;

export const HeaderBlock = styled.div`
  height: 90px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
`;

export const HeaderNav = styled.nav`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
`;
export const LogoImg = styled.img`
  width: 70px;
  height: auto;
`;
export const LogoText = styled.h2`
  margin-left: 4px;
  font-size: 18px;
  font-weight: bold;
  color: #333;
  display: flex;
  align-items: center;
`;

export const HeaderBtnMain = styled.button`
  width: 178px;
  height: 30px;
  border-radius: 4px;
  background-color: #76c043;
  color: black;
  border: 1px solid black;
  font-size: 14px;
  line-height: 1;
  font-weight: 500;
  margin-right: 20px;
  &:hover {
    background-color: #4e832b;
  }
  & a {
    color: black;
  }
  & a:hover {
    color: white;
  }
`;

export const HeaderUser = styled.a`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  line-height: 20px;
  font-weight: bold;
  color: black;
  &:after {
    content: "🧷";
    display: block;
    width: 15px;
    height: 15px;
    transform: rotate(-60deg);
    margin: -6px 0 0 5px;
    padding: 0;
    &:hover {
      color: #4e832b;
    }
  }
`;

export const HeaderPopUserSet = styled.div`
  display: block;
  position: absolute;
  top: 61px;
  right: -100px;
  width: 213px;
  height: 150px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 25px;
  text-align: center;
  z-index: 2;

  & p {
    color: #000;
    font-size: 14px;
    font-weight: 500;
    line-height: 21px;
    letter-spacing: -0.14px;
    margin-bottom: 4px;
  }
`;

export const UserMail = styled.p`
  color: #94a6be;
  font-size: 14px;
  line-height: 21px;
  letter-spacing: -0.14px;
  margin-bottom: 10px;
`;

export const UserTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
  & p {
    color: #000;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: -0.14px;
  }
`;

export const UserThemeLight = styled.button`
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  &::after {
    content: "☀️";
  }
`;
export const UserThemeDark = styled.button`
  border-radius: 100px;
  background: #eaeef6;
  outline: none;
  &::after {
    content: "🌑";
  }
`;

export const UserButton = styled.button`
  margin-top: 10px;
  width: 72px;
  height: 30px;
  background: transparent;
  border-radius: 4px;
  border: 1px solid #76c043;
  text-align: center;
  & p {
    color: #76c043;
    &:hover {
      color: black;
    }
  }
  &:hover {
    background-color: #76c043;
  }
`;

export const PopExit = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  min-width: 320px;
  min-height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 5;
`;

export const ExitContainer = styled.div`
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

export const ExitBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: #ffffff;
  max-width: 370px;
  width: 100%;
  padding: 50px 60px;
  border-radius: 10px;
  border: 0.7px solid #d4dbe5;
  box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
`;

export const ExitTtl = styled.div`
  & h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }
`;

export const ExitForm = styled.form``;

export const ExitFormGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const ExitButtonYes = styled.button`
  width: 153px;
  height: 30px;
  background-color: #76c043;
  border-radius: 4px;
  border: none;
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  margin-right: 10px;

  & a {
    width: 100%;
    height: 100%;
    color: #ffffff;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #4e832b;
  }
`;

export const ExitButtonNo = styled.button`
  width: 153px;
  height: 30px;
  background-color: transparent;
  border-radius: 4px;
  border: 0.7px solid var(--palette-navy-60, #76c043);
  outline: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  line-height: 21px;
  font-weight: 500;
  letter-spacing: -0.14px;
  color: #ffffff;
  & a {
    width: 100%;
    height: 100%;
    color: #76c043;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  &:hover {
    background-color: #4e832b;
    color: #ffffff;
  }
`;
