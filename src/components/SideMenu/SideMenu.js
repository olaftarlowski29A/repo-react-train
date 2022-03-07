import Sidebar from "react-sidebar";
import styled from "styled-components";
import React, { useState } from "react";

const SideMenu = () => {
  const [sideMenuToggle, setSideMenuToggle] = useState(false);
  console.log(sideMenuToggle);

  const sideMenuTogglehandler = () => {
    setSideMenuToggle((e) => !e);
  };

  const sidebarStyle = styled.div`
    color: red;
    position: fixed;
  `;

  return (
    <Sidebar
      sidebar={<b>Sidebar content</b>}
      open={sideMenuToggle}
      onSetOpen={sideMenuTogglehandler}
      styles={{ sidebar: { background: "white" } }}
      sidebarClassName={sidebarStyle}
    >
      <button onClick={sideMenuTogglehandler}>Open sidebar</button>
    </Sidebar>
  );
};

export default SideMenu;
