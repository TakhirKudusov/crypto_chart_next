import { createGlobalStyle } from "styled-components";
import { COLOR } from "@/utils/enums/color.enum";

const Global = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-family: Inter, Roboto, -apple-system, BlinkMacSystemFont, Segoe UI, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    ::-webkit-scrollbar {
      width: 10px;
      background-color: ${COLOR.BLACK};
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${COLOR.WHITE_10};
    }

    ::-webkit-scrollbar-track {
      border-radius: 10px;
      background-color: ${COLOR.BLACK};
    }

    @media screen and (max-width: 767px) {
      -ms-overflow-style: none;
      scrollbar-width: none;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  html,
  body {
    max-width: 100vw;
    background-color: ${COLOR.BLACK};
  }
  
  body {
    overflow-x: hidden;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
  
  .grey_bg {
    background-color: ${COLOR.WHITE_10};
  }
  
  .flex {
    display: flex;
  }
  .flex_column {
    display: flex;
    flex-direction: column;
  }
  .rounded_border_20 {
    border-radius: 20px;
  }
  .rounded_border_100 {
    border-radius: 100px;
  }
  
  .gap_1 {
    gap: 1rem;
  }
`;

export { Global };
