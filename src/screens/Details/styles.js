import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
`;

export const ContainerTouchable = styled.TouchableOpacity`
   width: 100%;
   height: 100%;
   justify-content: center;
`;

export const ContainerTouchableHight = styled.TouchableHighlight`
   justify-content: center;
`;

export const Content = styled.View`
   height: 50%;
   justify-content: center;
   align-items: center;
   background-color: #222;
   margin: 20px;
`;

export const ContentModal = styled.View`
   flex: 1;
   justify-content: center;
   align-items: center;
   background-color: #222;
   margin: 20px;
`;

export const Title = styled.View`
   flex-direction: row;
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

export const Content_Drescriptions = styled.View`
   margin: 10px;
`;

export const Drescriptions = styled.Text`
   color: white;
   text-align: center;
   line-height: 30px;
   font-style: normal;
   font-weight: bold;
`;
