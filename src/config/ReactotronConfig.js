import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
   const tron = Reactotron.configure()
      .useReactNative()
      .setAsyncStorageHandler(AsyncStorage)
      .use(reactotronRedux())
      .connect();

   tron.clear();

   console.tron = tron;
}
