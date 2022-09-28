import styled from "styled-components";

export const Tempwrapper = styled.div`
  img {
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 768px) {
        display: none; }
}
`;
export const Tem = styled.div`
  display: flex;
  align-items: center;
  .temp {
    max-width: 50%;
  }
  .log {
    align-items: center;
  }
  @media screen and (max-width: 768px) {
        justify-content: center;
        height: 100vh;
        align-items: center;
       } 
 }
  .route-wrapper {
    width: 100%;
    max-width: 50%;
    display: flex;
    justify-content: center;
    
  }
`;
