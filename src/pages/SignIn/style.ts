import styled from 'styled-components';

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: stretch;
  justify-content: center;
  background: #111111;
  
  padding: 50px 0;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
`;

export const Form = styled.form`
  padding: 40px;
  border: 1px solid #373737;
  background: #373737;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  h1 {
    text-align: center;
    margin-bottom: 20px;
    color: #fff;
  }
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
`;

export const FormActions = styled.div`
  width: 100%;
  margin-top: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  a {
    text-decoration: none;
    color: #fe4e16;
    font-size: 14px;
  }
`;