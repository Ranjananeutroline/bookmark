import styled from "styled-components";
export const SideBookMark = styled.div`
  height: 100%;
  position: fixed;
  top: 0;
  width: 25%;
  transition: 0.5s ease-in;
  background: #f0f2f5;
z-index:999;
  box-shadow: -5px 5px 10px rgba(105, 105, 105, 0.2),
    5px -5px 10px rgba(105, 105, 105, 0.2);

    @media screen and (max-width: 1500px) {
      width: 22%;
    }
  @media screen and (max-width: 1300px) {
    width: 22.8%;
  }
  @media screen and (max-width: 1100px) {
    width: 27.5%;
  }
  @media screen and (max-width: 965px) {
    width: 36%;
  }
  @media screen and (max-width: 730px) {
    width: 42%;
  }
  @media screen and (max-width: 689px) {
    width: 65%;
  }
  // @media screen and (max-width: 478px) {
  //   width: 60%;
  // }
  @media screen and (max-width: 425px) {
    width: 100%;
  }
`;
export const SideBookMarkContainer = styled.div`
  .topcontainer {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e5e4e2;
    color: #828282;
   
  }
`;
export const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: 400;
  font-family: Roboto;

  @media screen and (max-width:1500px)
  {
    font-size: 1.5rem;

  }
`;

export const CancelButton = styled.div`
  cursor: pointer;
  display: flex;
 
  justify-content: center;
  margin-top: 0.3rem;
  flex-direction: column;

  position: absolute;
  right: 0;
  margin-right: 0.67rem;

  & :hover {
    color: #000;
  }
`;

export const IconContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 1rem;
`;
export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-top: 3rem;
`;

export const BookMarkIconContainer = styled.div`
  margin: ${(props) => props.margin};
  @media screen and (max-width: 1600px) {
    margin:0.5rem;
  }
`;
export const IconLayout = styled.div`
  background: #ffffff;
  box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.08);

  border-radius: 10px;
  padding: ${(props) => props.padding};
  margin: 0.2rem 0.1rem 0.1rem 0.1rem;
  cursor: pointer;

  @media screen and (max-width: 1600px) {
    padding:10px 20px;
    // margin:0.1rem;
   
  }
  

  .deleteIconDiv {
    position: relative;
  }

  :hover {
    background: #fff;
    transition: all 0.5s ease;
    box-shadow: 0px 4px 4px 2px rgba(0, 0, 0, 0.15);
    // margin: 0.1rem;

    .deleteIcon {
      visibility: visible;
    }
  }
  .deleteIcon {
    visibility: hidden;
    position: absolute;
    margin-left: 0.3rem;
    margin-top: -0.5rem;

    font-size: 0.9rem;
    color: #e60000;
  }
`;
export const Icons = styled.img`
  width: 45px;
  height: 45px;

  padding: 0rem;

  @media screen and (max-width:1600px)
  {
    width: 35px;
    height: 35px;

  }
`;
export const Title = styled.div`
  font-size: 1rem;
  text-align: center;
  text-transform: capitalize;

  @media screen and (max-width:1600px)
  {
    font-size: 0.8rem;

  }
`;
