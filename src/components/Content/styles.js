import styled from 'styled-components/native';

export const Container = styled.View`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding: 0px;

   position: absolute;
   width: 379px;
   height: 544px;
   left: 16px;
   top: 132px;
`;

export const List = styled.View`
   display: flex;
   flex-direction: row;
   padding: 0px;

   position: absolute;
   width: 379px;
   left: 0px;
   top: 0px;
`;

export const Name = styled.Text`
   padding: 10px;
   font-size: 30px;
   color: #ffffff;
`;
