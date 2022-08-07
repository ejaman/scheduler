import styled from "styled-components";

export const BasicBtn = styled.button`
  padding: 0.6rem;
  margin-top: 0.5rem;
  background-color: black;
  color: white;
  border: thin;
  border-radius: 5px;
  width: ${(props) => props.width || "90%"};
  font-weight: 600;
  font-size: 1.1rem;
  border: 2px solid;
  &:hover {
    border: 2px solid;
    background-color: white;
    color: black;
  }
`;

export const TextBtn = styled.button`
  padding: 0.5rem;
  margin-top: 0.5rem;
  background: none;
  width: ${(props) => props.width || "90%"};
  font-weight: 600;
  font-size: 1.1rem;
  &:hover {
    opacity: 0.6;
  }
`;

export const RoundBtn = styled.button`
  background-color: black;
  color: white;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.5rem;
  margin-left: auto;
  border: none;
  &:hover {
    background-color: white;
    color: black;
  }
`;

// header
export const TabBtn = styled.a`
  color: black;
  font-size: 1.1em;
  font-weight: bold;
  margin: 0.3em;
  text-decoration: none;
  &:hover {
    border-bottom: 1px solid;
  }
`;
