import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: none;
    max-width: 100%;
    height: auto;

    a {
        text-decoration: none;
    }

}

@import url('https://fonts.cdnfonts.com/css/sports-world');
@font-face {
 font-family: "Sports-World";
 src: local("Sports-World"),
  url("./src/fonts/Sports-World-Regular.otf") format("truetype");
 font-weight: bold;
}
@font-face {
 font-family: "Sports-World";
 src: local("Sports-World"),
  url("./src/fonts/Sports-World-Regular.ttf") format("truetype");
 font-weight: bold;
}

.poppins-thin {
  font-family: "Poppins", serif;
  font-weight: 100;
  font-style: normal;
}

.poppins-extralight {
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: normal;
}

.poppins-light {
  font-family: "Poppins", serif;
  font-weight: 300;
  font-style: normal;
}

.poppins-regular {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: normal;
}

.poppins-medium {
  font-family: "Poppins", serif;
  font-weight: 500;
  font-style: normal;
}

.poppins-semibold {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-style: normal;
}

.poppins-bold {
  font-family: "Poppins", serif;
  font-weight: 700;
  font-style: normal;
}

.poppins-extrabold {
  font-family: "Poppins", serif;
  font-weight: 800;
  font-style: normal;
}

.poppins-black {
  font-family: "Poppins", serif;
  font-weight: 900;
  font-style: normal;
}

.poppins-thin-italic {
  font-family: "Poppins", serif;
  font-weight: 100;
  font-style: italic;
}

.poppins-extralight-italic {
  font-family: "Poppins", serif;
  font-weight: 200;
  font-style: italic;
}

.poppins-light-italic {
  font-family: "Poppins", serif;
  font-weight: 300;
  font-style: italic;
}

.poppins-regular-italic {
  font-family: "Poppins", serif;
  font-weight: 400;
  font-style: italic;
}

.poppins-medium-italic {
  font-family: "Poppins", serif;
  font-weight: 500;
  font-style: italic;
}

.poppins-semibold-italic {
  font-family: "Poppins", serif;
  font-weight: 600;
  font-style: italic;
}

.poppins-bold-italic {
  font-family: "Poppins", serif;
  font-weight: 700;
  font-style: italic;
}

.poppins-extrabold-italic {
  font-family: "Poppins", serif;
  font-weight: 800;
  font-style: italic;
}

.poppins-black-italic {
  font-family: "Poppins", serif;
  font-weight: 900;
  font-style: italic;
}

`
