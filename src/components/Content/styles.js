import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   position: relative;
   width: 379px;
   height: 544px;
   left: 16px;
   top: 132px;
`;

export const List = styled.View`
   flex: 1;
   position: relative;
   padding: 0px;
   width: 379px;
   left: 0px;
   top: 0px;
`;

// export const List = styled.FlatList`
//    flex: 1;
// `;

// export const Title = styled.View`
//    font-style: normal;
//    font-weight: bold;
//    font-size: 16px;
//    line-height: 20px;
//    display: flex;
//    align-items: center;
// `;

export const Name = styled.Text`
   left: 0px;
   top: 0px;
   padding: 20px;
   color: #ffffff;
   font-size: 16px;
   font-style: normal;
   font-weight: bold;
   display: flex;
   align-items: center;
   line-height: 20px;
   text-align: left;
`;

export const Image = styled.Image`
   width: 64px;
   height: 64px;
   margin-bottom: 20px;
   border-radius: 30px;
`;
