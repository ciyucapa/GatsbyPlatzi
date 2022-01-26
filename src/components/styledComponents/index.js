import styled from 'styled-components';

export const Button = styled.button`
    width: 8rem;
    background-color: #98ca3f;
    color: ${props => props.color};
    border: none;
    border-radius: 10px;

    &:hover {
        background-color: white;
        color: #98ca3f
    }
`;