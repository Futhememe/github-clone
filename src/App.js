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

//// Partes do template
//Flatlist exemplo
{/* <FlatList
  data={repositories}
  keyExtractor={repository => repository.id}
  renderItem={({ item: repository }) => (
    <View style={styles.repositoryContainer}>
      <Text style={styles.repository}>Titulo</Text>

      <View style={styles.techsContainer}>
        <Text style={styles.tech}>
          Node.js
                  </Text>
      </View>

      <View style={styles.likesContainer}>
        <Text
          style={styles.likeText}
        >
          0 curtidas
                </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        //onPress={() => handleLikeRepository(repository.id)}
        testID={`like-button-1`}
      >
        <Text style={styles.buttonText}>Curtir</Text>
      </TouchableOpacity>
    </View>)}
/> */}

//estilo de exemplo
// repositoryContainer: {
//   //marginBottom: 15,
//   //marginHorizontal: 15,
//   backgroundColor: "#24292E",
//   padding: 20,
// },
// repository: {
//   fontSize: 32,
//   fontWeight: "bold",
// },
// techsContainer: {
//   flexDirection: "row",
//   marginTop: 10,
// },
// tech: {
//   fontSize: 12,
//   fontWeight: "bold",
//   marginRight: 10,
//   backgroundColor: "#04d361",
//   paddingHorizontal: 10,
//   paddingVertical: 5,
//   color: "#fff",
// },
// likesContainer: {
//   marginTop: 15,
//   flexDirection: "row",
//   justifyContent: "space-between",
// },
// likeText: {
//   fontSize: 14,
//   fontWeight: "bold",
//   marginRight: 10,
// },
// button: {
//   marginTop: 10,
// },
// buttonText: {
//   fontSize: 14,
//   fontWeight: "bold",
//   marginRight: 10,
//   color: "#fff",
//   backgroundColor: "#7159c1",
//   padding: 15,
// },