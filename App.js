import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import Navigation from './src/navigations/Navigation';


export default function App() {
  console.disableYellowBox=true;  
  
  return (
    <>
    <Navigation/>
    </>
  );
}

