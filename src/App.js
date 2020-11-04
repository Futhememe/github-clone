import React, { useEffect, useState } from "react";
//Components
import ProfileHeader from './components/Headers/ProfileHeader'

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
} from "react-native";

export default function App() {

  //const [repositories, setRepositories] = useState([{ message: 'Isso aqui' }])

  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#24292E" />
      <SafeAreaView style={styles.container}>
        <ProfileHeader></ProfileHeader>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
});