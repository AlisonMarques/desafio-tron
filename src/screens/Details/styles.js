import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   width: 100%;
   height: 100%;
   justify-content: center;
`;

export const Content = styled.View`
   display: flex;
   width: 100%;
   height: 50%;
   justify-content: center;
   align-items: center;
`;

export const NameArtist = styled.Text`
   padding: 25px;
   color: #ffffff;
   font-size: 16px;
   font-style: normal;
   font-weight: bold;
   display: flex;

   line-height: 20px;
   text-align: left;
`;

export const ImageArtist = styled.Image`
   width: 64px;
   height: 64px;
   margin-bottom: 20px;
   border-radius: 30px;
`;
