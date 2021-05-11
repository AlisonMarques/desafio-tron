import React, { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import { FlatList, View, Text } from 'react-native';

import { Header } from '../../components/Header/Header';
import { Container, Lista, ContentList } from './styles';
import { Tabs } from '../../components/Tabs/Tabs.js';
import { Content } from '../../components/Content/Content.js';

import { useNavigation } from '@react-navigation/core';

import profile from '../../Image/alison.png';
import newsletter from '../../Image/newsletter-tron.png';
import sorted from '../../Image/plantsSorted.png';
import tela from '../../Image/tela.png';
import coursera from '../../Image/coursera.png';
import conta5 from '../../Image/conta5.png';
import indexImg from '../../Image/index.tsx.png';

import api from '../../services/api';

export function List() {
   const images = [
      { id: 1, Profile: profile, title: 'Alison Marques' },
      { id: 2, Profile: newsletter, title: 'Letíca Lopes' },
      { id: 3, Profile: sorted, title: 'Davi Marques' },
      { id: 4, Profile: tela, title: 'Jefferson Marques' },
      { id: 5, Profile: coursera, title: 'Claudio Marques' },
      { id: 6, Profile: conta5, title: 'Leia Tucunduva' },
      { id: 7, Profile: indexImg, title: 'Nick Marques' },
      { id: 8, Profile: indexImg, title: 'Nick Marques' },
      { id: 9, Profile: indexImg, title: 'Nick Marques' },
      { id: 10, Profile: indexImg, title: 'Nick Marques' },
   ];
   const navigation = useNavigation();

   function handleArtistSelected() {
      navigation.navigate('Details', { images });
   }
   const state = {
      data: images,
      page: 1 + 1,
      loading: false,
   };

   const componentDidMount = () => {
      loadRepositories();
   };

   const [page, setpage] = useState();

   const [data, setData] = useState();

   async function loadRepositories() {
      const accessToken =
         'BQCymHOzx2Oure73iuQDT8-vU2OGftkex02nD9foi6lRjzD3PD4z2f5u4W-BWsPqlE8SJtwur9I-Ndd4E4eFRQelHvWxZFdbrmliRCKSfnli1IZ2Smo8NfeNF1GYx6xWHao12GwCoyUBoiI3jXDcnvTEvYg';

      const artists =
         '2CIMQHirSU0MQqyYHq0eOx,57dN52uHvrHOxijzpIgu3E,1vCWHaC5f2uS3yhpwWbIA6,0oSGxfWSnnOXhD2fKuz2Gy,3dBVyJ7JuOMt4GE9607Qin';

      // if (state.loading) return;

      // const { page } = state;

      const { data } = await api.get(
         `artists?ids=${artists}`,
         {
            headers: { Authorization: `Bearer ${accessToken}` },
         },
         setData(data),
      );
      // const { id, name } = response.data;
      // const data = { id, name };

      console.log(data);
   }

   return (
      <Container>
         <Header title="Música" />
         <Tabs />
         <ContentList>
            <Lista>
               <FlatList
                  data={state.data}
                  onEndReached={loadRepositories}
                  onEndReachedThreshold={0.1}
                  showsVerticalScrollIndicator={false}
                  keyExtractor={item => String(item.id)}
                  renderItem={({ item }) => (
                     <Content
                        image={item.Profile}
                        name={item.title}
                        onPress={() => handleArtistSelected(item)}
                     />
                  )}
               />
            </Lista>
         </ContentList>
      </Container>
   );
}
