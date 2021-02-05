import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100%;
  padding: 2% 10%;

  > .sectionContainerRow {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 10px;

    > .boxContainerProject {
      width: 100%;
      min-height: 140px;
      border-radius: 5px;
      border: solid 1px #ebebeb;
      padding: 10px;
      display: flex;
      justify-content: center;
      transition: all linear .1s;
      align-items: center;
      flex-direction: column;

      > p {
        color: #666;
        font-size: 1em;
      }

      > h1 {
        color: #333;
        font-size: 1.5em;
        font-weight: bold;
        margin: 10px 0px;
      }

      > small {
        color: red;
        font-weight: bold;
      }

      :hover {
        cursor: pointer;
        transform: scale(1.07);
        box-shadow: 0px 0px 15px 1px #1111112d;
      }
    }
  }
`;