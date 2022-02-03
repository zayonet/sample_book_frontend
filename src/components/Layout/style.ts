import styled from "styled-components";

/* 
Layout
MH = Main Header
AS = Aside
CT = Content 
*/
export const Container = styled.div`
    display: grid;
    grid-template-columns: auto;
    grid-template-rows: auto;

    grid-template-areas: 'MH' 'CT';

    height: 100vh;
`