import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface IEntryCardItemProps {
    color?: string;
    background?: string;
  }
  

export const Container = styled.div`
  
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #242525;

  
  img {
    width: 150px;
    margin-bottom: 10px;
  }
`;

export const EntryCard = styled.div`
  padding: 50px;
  background: #373737;
  border-radius: 4px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
export const EntryCardItem = styled.div<IEntryCardItemProps>`
    width: 200px;
    height: 230px;
    padding: 10px;
    border-radius: 4px;
    cursor: pointer;
    color: #242525;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    transition: 0.2s;
    
    ${props =>
        props.color &&
        css`
        color: ${props.color};
        `}
    ${props =>
        props.background
        ? css`
            background: ${props.background};
            &:hover {
                background: ${shade(0.2, props.background)};
            }
            `
        : css`
            background: #fe4e16;
            &:hover {
                background: ${shade(0.2, '#fe4e16')};
            }
            `}
    span {
        font-weight: bold;
    }
    margin: 5px;
    `;