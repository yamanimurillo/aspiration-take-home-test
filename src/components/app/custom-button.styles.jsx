import styled, { css } from 'styled-components';

const buttonStyles = css`
    width: 180px;
    font-size: 16px;
    font-family: "Poppins";
    font-weight: 400;
    background-color: #61a5c2;
    border: none;
    color: white;

    &:hover {
        background-color: #2c7da0;
      }
  
    &:active {
        background-color: #014f86;
    }
`;


const CustomButton = styled.button`
    ${buttonStyles}
`;

export default CustomButton;