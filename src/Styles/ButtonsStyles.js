import styled from "styled-components";

export const StandardButton = styled.button`

width: ${props => (props.small ? "50px" : "70px")};
padding: 0.3 rem;
border-radius: 15px;
border:none;
cursor: pointer;
background: ${props => props.background};

`;

export const LogoutButton = styled(StandardButton)`
    color: ${props => props.theme.text};
    width: 100px;
    font-size: 20px;
`;