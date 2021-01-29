import styled from "styled-components"
import defaultbg from "../../images/room-1.jpeg";

const StyleHeader = styled.header`
background-image:url(${props => (props.img ? props.img :defaultbg)});
height: calc(100vh - 85px);
display: flex;
align-items: center;
justify-content: center;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
width: 100%;
`

export default StyleHeader;