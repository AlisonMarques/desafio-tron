// import React, { Component, useState, useEffect } from 'react';
// import { Text } from 'react-native';

// import authHandler from '../../utils/authentication';

// import { connect } from 'react-redux';
// import {
//    setAcessToken,
//    setRefreshToken,
//    setLoadingTrue,
//    setLoadingFalse,
// } from '../../redux/features/authentication/authenticationSlice';

// import StackRoutes from '../../routes/stack.routes';

// export function Entry() {
//    const [refreshToken, setRefresh] = useState('');
//    const [acessToken, setAcessTokenState] = useState('');

//    const [loading, setLoading] = useState(true);

//    useEffect(() => {
//       function handleRefreshToken() {
//          if (refreshToken !== acessToken) {
//             tryAutoLogin();
//          }

//          if (acessToken !== acessToken) {
//             setLoadingFalse();
//          }
//       }
//       // console.tron.log(refreshToken);

//       return handleRefreshToken();
//    });

//    async function tryAutoLogin() {
//       setLoadingTrue();
//       const authenticationObject = await authHandler.refreshLogin();

//       setAcessToken({ acessToken: authenticationObject.acessToken });
//       setRefreshToken({ refreshToken: authenticationObject.refreshToken });

//       setLoadingFalse();
//    }

//    return <StackRoutes />;
// }

// const mapStateToProps = state => {
//    return {
//       authentication: state.authentication,
//       acessToken: state.authentication.acessToken,
//       refreshToken: state.authentication.refreshToken,
//    };
// };

// const mapDispatchToProps = {
//    setAcessToken,
//    setRefreshToken,
//    setLoadingTrue,
//    setLoadingFalse,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Entry);
