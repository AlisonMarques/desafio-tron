import React, { useState } from 'react';

import {
   Container,
   ContainerTouchable,
   NameArtist,
   ImageArtist,
   Content,
   Title,
   Content_Drescriptions,
   Drescriptions,
} from './styles';

import {
   Modal,
   TextInput,
   Text,
   View,
   TouchableOpacity,
   TouchableHighlight,
} from 'react-native';

import { Header } from '../../components/Header/Header';

import { useRoute } from '@react-navigation/core';

export default function Details() {
   const [isModalVisible, setModalVisible] = useState(false);
   const [textInput, setTextInput] = useState('');
   const [editItem, setEditItem] = useState(0);
   const [editedItem, setEditedItem] = useState([]);

   const route = useRoute();

   const [artists] = route.params;
   console.tron.log(artists);

   const genres = artists.genres.reduce((acc, item, index, array) => {
      if (index === array.length - 1) {
         return acc + `${item}.`;
      }

      return acc + `${item}, `;
   }, '');

   function handleModalVisible(bool) {
      setModalVisible(bool);
   }

   function handleTextInput(text) {
      setTextInput(text);
   }

   function handleEditItem(item) {
      setEditItem(item);
   }

   // const teste = artists.map(artist => {
   //    artist.name;
   // });

   // console.log(teste);

   async function handleEditedItem(editedItem) {
      const newData = await artists.filter(artist => {
         if (artist.id === editedItem) {
            artist.name = textInput;
            return artist;
         }
         return artist;
      });

      setEditedItem(newData);
   }

   return (
      <Container>
         <Header title="Details" />
         <ContainerTouchable
            onPress={() => {
               handleModalVisible(true);
               handleTextInput(artists.name);
               handleEditItem(artists.id);
            }}>
            <Content>
               <Title>
                  <ImageArtist source={{ uri: artists.images[0].url }} />

                  <NameArtist>{artists.name}</NameArtist>
               </Title>
               <Content_Drescriptions>
                  <Drescriptions>
                     Followers: {artists.followers.total}
                  </Drescriptions>
                  <Drescriptions>
                     Popularity: {artists.popularity}
                  </Drescriptions>
                  <Drescriptions>Genres: {genres}</Drescriptions>
               </Content_Drescriptions>
            </Content>
            <Modal
               animationType="fade"
               visible={isModalVisible}
               onRequestClose={() => handleModalVisible(false)}>
               <View>
                  <Text>Teste : {textInput} </Text>
                  <TextInput
                     editable={true}
                     multiline={false}
                     maxlength={200}
                     defaultValue={textInput}
                     onChangeText={text => setTextInput(text)}
                  />
                  <TouchableHighlight
                     onPress={() => {
                        handleEditedItem(editedItem);
                        handleModalVisible(false);
                     }}>
                     <Text>save</Text>
                  </TouchableHighlight>
               </View>
            </Modal>
         </ContainerTouchable>
      </Container>
   );
}
