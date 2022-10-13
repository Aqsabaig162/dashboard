import styled from "styled-components";
import { Breadcrumb , } from 'antd';
import { Layout} from 'antd';
const {Content} = Layout;


export const Wrapperdiv = styled.div
`
display: flex;
justify-content: center;
align-items: center;
padding: 2%;
.wrap{
    background-color: pink;
   
    padding: 30px;
    background: white;
border-radius: 8px;
box-shadow: 5px 5px 5px #d1d7da;
display: flex;
justify-content: center;
}

.btn{
    display: flex;
    justify-content: center;
}

.innerwrap{
    display: flex;
    justify-content: space-between;
}

`

export const Btnstyle = styled.div
`
    display: flex;
    justify-content: flex-end;
    background: #FAFAFA;
    padding-right: 4.5%;
`
export const CustomBreadcrumb = styled(Breadcrumb)
`


`

export const ProfileWrapper = styled.div
`
padding: 30px;
background: white;
border-radius: 8px;
max-width: fit-content;
display: flex;
justify-content: center;

box-shadow: 5px 5px 5px #d1d7da;
.profile{
    display: flex;
    justify-content: center;
}

.pfp{
    height: 100%;
    width: 100%;

}


.pfp:hover .image {
    opacity: 0.3;
  }
  
  .pfp:hover .middle {
    opacity: 1;
    display: flex;
    gap: 12px;
  }
  

.ant-card-body{
    height: 100%;
}


.

`

export const CustomContent = styled (Content)
`
.midinfo{
    display: flex;
    justify-content: center;
}

input{

   opacity: 1%;
   position: absolute;
   cursor: pointer;
   
}

img{
    width: 100%;
    height: 100px;
   
   
    cursor: pointer;
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
}
.middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }

  .ant-card-body{
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
`