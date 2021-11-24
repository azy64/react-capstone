import styled from 'styled-components';

export const Img = styled.img`
  width: 130px !important;
`;

export const Li = styled.li`
  background-color: #5586e3;
  cursor: pointer;
  padding: 30px 0;
  width: 100%;
  height: 100px;
  background: #3e61a3;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;

  &:nth-child(even) {
    background-color: #4268af;
  }

  &:first-child {
    align-items: flex-end;
    justify-content: center;
    gap: 20px;
    height: 200px;
    text-align: left;
    background-color: #5586e3;
    & img {
      width: 250px;
      height: auto;
    }
    & div {
      margin-bottom: 30px;
    }
  }

  & svg {
    font-size: 20px;
    cursor: pointer;
  }

  & h2 {
    text-align: left;
  }
`;

export const CountryName = styled.h2`
  font-size: 20px;
  font-family: gill-sans, sans-serif;
  text-transform: uppercase;
  width: 170px;
  text-align: right;
`;
export const DetailsEmpty = styled.h2`
  color: #fff;
  text-align: center;
  width: 100%;
  & a {
    margin-left: 5px;
    color: #fff;
  }
`;
export const Ul = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
`;

export const HomeLi = styled.li`
  position: relative;
  background-color: #5586e3;
  padding: 30px 0;
  min-height: 200px;
  background: #3e61a3;
  color: #fff;
  justify-content: center;
  self-align: center;
  align-items: center;

  &:nth-child(even) {
    background-color: #4268af;
  }
: hover {
  background-color: #5586e3;
  cursor: pointer;
}
  &:first-child {
    align-items: flex-end;
    gap: 20px;
    text-align: left;
    & img {
      width: 70%;
      height: 300px;
      display: block;
      margin:auto;
    }
    & div {
      margin-bottom: 30px;
    }
  }

  & a {
    width: 100%;
    align-items: center;
    color: #fff;
    text-decoration: none;
    flex-direction: column;
    display: flex;
    gap: 15px;
  }

  & svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    width: 100% !important;
  }
`;

export const Name = styled.h2`
  font-size: 20px;
  font-family: gill-sans, sans-serif;
  text-transform: uppercase;
`;

export const Deaths = styled.span`
  font-family: 'Lato', sans-serif;
`;

export const Seperator = styled.span`
  width: 100%;
  background: #35548b;
  font-family: 'Lato', sans-serif;
  padding: 5px;
  color: #fff;
  font-size: 18px;
  text-transform: uppercase;
`;

export const HomeImg = styled.img`
  width: 60%;
  height: 200px;
  @media screen and (max-width: 700px) {
    width:80%;
    height: 200px;
    margin-left:5px;
  }
`;

export const ImgFluid = styled.img`
  width: 70%;
  height: 300px;
  display: block;
  @media screen and (max-width:700px) {
    width: 50%;
    height: 10%;
  }
`;
export const Details = styled.div`
  align-self: flex-end;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  margin-right: 25px;
`;

export const Form = styled.form`
  background: #3e61a3;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  width: 100%;
  & input {
    width: 78%;
    height: 20px;
    font-size: 16px;
    text-indent: 5px;
    border-radius: -59px;
    background: #5586e3;
    outline: none;
    border: none;
    color: #fff;
    border-bottom: 1px solid #3e61a3;
    padding: 6px 4px 5px 0;
  }
  & input::placeholder {
    color: white;
    font-size: 16px;
    text-indent: 5px;
  }
`;

export const SearchIcon = styled.div`
  width: 19.45%;
  background: #3e61a3;
  padding: 3px 0.3px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  text-align: center;
`;

export const Invalid = styled.span`
  color: #fff;
  font-size: 16px;
  width: 100%;
  background: #4369b2;
  &.d-none {
    display: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  color: #fff;
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 18px;
  padding: 10px;
  text-decoration: underline;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #4369b2;
`;

export const Logo = styled.img`
  width: 180px;
  @media screen and (max-width: 991px) {
    width: 140px;
  }
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  justify-content: space-around;
  width: 40%;

  li a {
    color: #fff;
    font-family: gill-sans, sans-serif;
    font-size: 18px;
    text-decoration: none;
  }

  li a.active {
    text-decoration: underline;
  }
`;
export const Box = styled.div`
width: 100%;
margin: auto;
display: grid;
grid-template-columns: auto auto auto;

@media screen and (max-width: 700px){
  display: grid;
  grid-template-columns: auto !important;
  width: 100% !important;
}
`;
export const HeaderHome = styled.div`
width: 50%;
margin: auto;
@media screen and (max-width: 700px){
  width: 100% !important;
}
`;
export const HeaderLi = styled.li`
  position: relative;
  background-color: transparent;
  padding: 30px 0;
  min-height: 200px;
  background: #3e61a3;
  color: #fff;
  justify-content: center;
  self-align: center;
  align-items: center;

  &:nth-child(n) {
    background-color: transparent;
  }
    & div {
      margin-bottom: 30px;
    }
  }

  & a {
    width: 100%;
    align-items: center;
    color: #fff;
    text-decoration: none;
    flex-direction: column;
    display: flex;
    gap: 15px;
  }

  & svg {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
  }

  @media screen and (max-width: 700px) {
    width: 100% !important;
  }
`;
