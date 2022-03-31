import styled, { css } from 'styled-components';

const inputStyles = css`
    color: #012a4a;
    font-family: "Poppins";
    font-size: 21px;
    font-weight: 200;
    padding: 8px 15px 8px 15px;
    margin-right: 10px;
    width: 100%;
    border: none;
    outline: none;
    transition: all ease-in-out 180ms;
    background-color: white;
    box-shadow: 0px 0px 8px 0px rgba(1, 42, 74, 0.21);

    &:hover {
    transition: all ease-in-out 180ms;
    box-shadow: 0px 1px 10px 0px rgba(1, 42, 74, 0.42);
    }

    &:focus {
    transition: all ease-in-out 180ms;
    box-shadow: 0px 3px 16px 0px rgba(1, 42, 74, 0.52);
    }
`;


const CustomInput = styled.input`
    ${inputStyles}
`;

export default CustomInput;