import styled from 'styled-components/native';

export const Container = styled.View`
   flex: 1;
   position: absolute;
   width: 246px;
   left: 16px;
   top: 94px;
`;

export const ButtonTitle = styled.TouchableOpacity`
   flex: 1;
   position: absolute;
   display: flex;
`;

export const Title = styled.Text`
   font-style: normal;
   font-weight: bold;
   font-size: 16px;
   line-height: 20px;
   align-items: center;
   color: #ffffff;
`;

export const Activity = styled.ActivityIndicator`
   position: absolute;
   left: 0%;
   right: 1%;
   top: 93.33%;
   bottom: 0%;
   /* Main */
   background: #1db954;
`;
