import React from 'react';

import Routes from './routes';

import { StatusBar } from 'react-native';

// import { Container } from './styles';

export default function App() {
  return (
    <>
    <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5"/>
    <Routes />

    </>
  );
}
