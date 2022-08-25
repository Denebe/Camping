import styled from "styled-components";

export const Gnb = styled.div`
  display: flex;
  margin-top: 50px;
  justify-content: space-around;
  & > div {
    width: 100%;
    font-size: 20px;
    cursor: pointer;
    &:after {
      display: block; /*a요소를 블록 요소라고 선언*/
      width: 100%; /*카테고리 메뉴 밑줄의 크기를 동일하게 주기 위해 width 설정*/
      content: "";
      border-bottom: solid 2px #fff;
      transform: scaleX(0); /*크기를 0으로 줌으로써 평상시엔 밑줄 없음*/
      transition: transform 250ms ease-in-out; /*변형 방식*/
      background-color: white;
    }

    &:hover:after {
      transform: scaleX(1); /*a 속성에 hover시 기존 크기로*/
    }
  }

`;
