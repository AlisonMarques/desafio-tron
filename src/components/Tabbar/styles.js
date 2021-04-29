import styled from 'styled-components/native';

export const Container = styled.View`
   height: 80px;
   position: relative;
   justify-content: flex-end;

   background-color: #222;
   border-top-color: #000;
   border-width: 2px;
`;

export const SubContainer = styled.View`
   height: 70px;
   flex-direction: row;
`;

export const GroupAction = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
`;

export const ActionName = styled.Text`
   font-size: 11px;
   padding: 5px;
   color: #fff;
`;
