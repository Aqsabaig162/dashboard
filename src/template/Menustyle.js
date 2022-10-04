import styled from "styled-components";
import { Layout , Space , Input } from 'antd';
const { Header , Sider , Content , Footer} = Layout;

const { Search } = Input;

export const MenuBar = styled.div`
.menuBar {
    padding: 0 20px;
    border-bottom: solid 1px #e8e8e8;
    overflow: auto;
    box-shadow: 0 0 30px #f3f1f1;
  }

  .logo {
    width: 150px;
    float: left;
  }
  
  .logo a {
    display: inline-block;
    font-size: 20px;
    padding: 19px 20px;
    text-transform: capitalize;
  }
  
  .menuCon {
    width: calc(100% - 150px);
    float: left;
  }
  
  .menuCon .ant-menu-item {
    padding: 0px 5px;
  }
  
  .menuCon .ant-menu-submenu-title {
    padding: 10px 20px;
  }
  
  .menuCon .ant-menu-item a,
  .menuCon .ant-menu-submenu-title a {
    padding: 10px 15px;
  }
  
  .menuCon .ant-menu-horizontal {
    border-bottom: none;
    align-items: center;
  }
  
  .menuCon .leftMenu {
    float: left;
    align-items: center;
  }
  
  .menuCon .rightMenu {
    float: right;
  }
  
  .barsMenu {
    float: right;
    height: 32px;
    padding: 6px;
    margin-top: 8px;
    display: none;
    background: none;
  }
  
  .barsBtn {
    display: block;
    width: 20px;
    height: 2px;
    background: #1890ff;
    position: relative;
  }
  
  .barsBtn:after,
  .barsBtn:before {
    content: attr(x);
    width: 20px;
    position: absolute;
    top: -6px;
    left: 0;
    height: 2px;
    background: #1890ff;
  }
  
  .barsBtn:after {
    top: auto;
    bottom: -6px;
  }
  
  .ant-drawer-body {
    padding: 0;
  }
  
  .barsMenu>span {
    display: block;
  }
  
  .ant-drawer-body .ant-menu-horizontal>.ant-menu-item,
  .ant-drawer-body .ant-menu-horizontal>.ant-menu-submenu {
    display: inline-block;
    width: 100%;
  }
  
  .ant-drawer-body .ant-menu-horizontal {
    border-bottom: none;
  }
  
  .ant-drawer-body .ant-menu-horizontal>.ant-menu-item:hover {
    border-bottom-color: transparent;
  }
  
  @media (max-width: 767px) {
    .barsMenu {
      display: inline-block;
    }
  
    .leftMenu,
    .rightMenu {
      display: none;
    }
  
    .logo a {
      margin-left: -20px;
    }
  
    .menuCon .ant-menu-item,
    .menuCon .ant-menu-submenu-title {
      padding: 1px 20px;
    }
  ul{
    align-items: center;
  }
    .logo a {
      padding: 10px 20px;
    }
  }

`
export const CustomHeader = styled(Header)
`

background : #FAFAFA;
`
export const CustomLayoutp = styled(Layout)
`
background: grey;
display: flex;
height: 100vh;

.right{
  text-align: end;
}

.icon{
  font-size: 150%;
  cursor: pointer;
  color: black;
}



`
export const CustomLayoutc = styled(Layout)
`
flex: 1;
background: grey;
`
export const CustomSider = styled(Sider)
`
flex: 1;
color: white;
background: #023047;

.userside{
  cursor: pointer;
}

`
export const CustomContent = styled(Content)
`
flex: 1;
background: #F0F2F5;

`
export const CustomSpace = styled(Space)
`
width: 100%;
`
export const CustomSearch = styled(Search)
`
width: 60%;
vertical-align: middle;

`
export const CustomFooter = styled (Footer) 
`
display: flex;
justify-content: center;
background: white;
`

export const Container = styled.div 
`
padding: 15%;
display: flex;
flex-direction: column;
height: 100%;
gap: 10%;
.img{
  width: 60%;
}
`