import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   display: flex;
   position: relative;
   width: 100%;
   height: 100%;
   left: 16px;
   top: 132px;
`;

export const List = styled.View`
   flex: 1;
   display: flex;
   justify-content: space-between;

   position: relative;
   width: 100%;
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
