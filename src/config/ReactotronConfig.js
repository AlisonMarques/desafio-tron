import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

if (__DEV__) {
   const tron = Reactotron.configure({ host: '192.168.0.105' })
      .useReactNative({
         networking: { ignoreUrls: /symbolicate|192.168.0.105/ },
      })
      .setAsyncStorageHandler(AsyncStorage)
      .use(reactotronRedux())
      .connect();

   tron.clear();

   console.tron = tron;
}
