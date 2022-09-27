import styled from "styled-components";

export const Tem = styled.div 
`
display: flex;

align-items: center;
gap: 8%;

& div:last-child {   
}


hr{
    color: grey;
}
.temp{
    max-width: 50%;
}
.log{
    align-items: center;
    width: 35%;
}
`


export const LoginWrapper = styled.div 
`

padding: 30px;
justify-content: center;
background: white;
border-radius: 8px;
box-shadow: 10px 10px 5px lightblue;
.btn{
    width:220px;
    font-weight: bolder;
    border-radius: 5px;
}
.btn2{
    width:100%;
    font-weight: bolder;
    background: #36A420;
    border-radius: 5px;
}
span{
    font-size: small;
}

`

export const Feilds = styled.div 
`
display: flex;
flex-direction: column;
`

