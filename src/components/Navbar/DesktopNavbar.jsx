import * as React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import RecordVoiceOverOutlinedIcon from "@mui/icons-material/RecordVoiceOverOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import LoginIcon from "@mui/icons-material/Login";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRecoilValue } from "recoil";
import { userInfo } from "states";
import { useLogoutMutation } from "queries/auth";

const TabsLib = styled(Tabs)`
  position: fixed;
  padding: 3rem 0 2rem 2rem;
  height: 100vh;
  background: white;
  display: flex;
`;

const Logo = styled.span`
  margin: 0 0 0 1rem;
  font-size: 3rem;
  font-family: "Pr-Bold";
  font-weight: 600;
  line-height: 1.5;
`;

const NavLabel = styled.span`
  margin: 3.5rem 0 1rem 1rem;
  font-size: 1.4rem;
  font-family: "Pr-Bold";
  font-weight: 600;
  color: #737373;
`;

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
};

const DesktopNavbar = () => {
  const [value, setValue] = React.useState(2);
  const navigate = useNavigate();
  const user = useRecoilValue(userInfo);
  const { mutate } = useLogoutMutation();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const clickNow = () => {
    navigate("/");
  };

  const clickClub = () => {
    navigate("/club");
  };

  const clickAD = () => {
    navigate("/ad");
  };

  const clickSignIn = () => {
    navigate("/signin");
  };

  const clickReview = () => {
    navigate("/review");
  };

  const clickMypage = () => {
    navigate("/mypage");
  };
  const logout = () => {
    mutate();
  };
  return (
    <TabsLib
      orientation="vertical"
      variant="scrollable"
      value={value}
      onChange={handleChange}
      aria-label="Vertical tabs example"
      sx={{
        borderRight: 1,
        borderColor: "divider",
        fontSize: 200,
        border: "none",
        width: 290,
      }}
    >
      <Logo>대신</Logo>
      <NavLabel>MENU</NavLabel>
      <Tab
        icon={
          <HomeOutlinedIcon
            sx={{
              fontSize: 30,
              color: "#282828",
            }}
          />
        }
        iconPosition="start"
        label="NOW"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: "#282828",
          height: 20,
          marginTop: 1,
          justifyContent: "flex-start",
        }}
        onClick={clickNow}
      />
      <Tab
        icon={
          <EditOutlinedIcon
            sx={{
              fontSize: 30,
              color: "#282828",
            }}
          />
        }
        iconPosition="start"
        label="국민인"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: "#282828",
          marginTop: 1,
          justifyContent: "flex-start",
        }}
        onClick={clickReview}
      />
      <Tab
        icon={
          <PeopleAltOutlinedIcon
            sx={{
              fontSize: 30,
              color: "#282828",
            }}
          />
        }
        iconPosition="start"
        label="동아리"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: "#282828",
          marginTop: 1,
          justifyContent: "flex-start",
        }}
        onClick={clickClub}
      />
      <Tab
        icon={
          <RecordVoiceOverOutlinedIcon
            sx={{
              fontSize: 30,
              color: "#282828",
            }}
          />
        }
        iconPosition="start"
        label="홍보"
        sx={{
          fontSize: 20,
          fontWeight: 600,
          color: "#282828",
          marginTop: 1,
          justifyContent: "flex-start",
        }}
        onClick={clickAD}
      />
      <NavLabel>MY PAGE</NavLabel>
      {user.isLoggedIn ? (
        <Tab
          icon={
            <AccountCircleOutlinedIcon
              sx={{
                fontSize: 30,
                color: "#282828",
              }}
            />
          }
          iconPosition="start"
          label="마이페이지"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: "#282828",
            justifyContent: "flex-start",
          }}
          onClick={clickMypage}
        />
      ) : (
        <Tab
          icon={
            <LoginIcon
              sx={{
                fontSize: 30,
                color: "#282828",
              }}
            />
          }
          iconPosition="start"
          label="로그인/회원가입"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: "#282828",
            justifyContent: "flex-start",
          }}
          onClick={clickSignIn}
        />
      )}
      {user.isLoggedIn && (
        <Tab
          icon={
            <LogoutIcon
              sx={{
                fontSize: 30,
                color: "#282828",
              }}
            />
          }
          iconPosition="start"
          label="로그아웃"
          sx={{
            fontSize: 20,
            fontWeight: 600,
            color: "#282828",
            justifyContent: "flex-start",
          }}
          onClick={logout}
        />
      )}
    </TabsLib>
  );
};

export default DesktopNavbar;
