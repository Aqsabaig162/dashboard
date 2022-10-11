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
box-shadow: 5px 5px 5px lightblue;
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

`

export const CustomContent = styled (Content)
`
.midinfo{
    display: flex;
    justify-content: center;
}
`