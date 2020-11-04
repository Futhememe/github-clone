import React, { useEffect, useState } from "react";

//Images
import ArrowLeft from '../../assets/arrow-left.png';
import Settings from '../../assets/settings.png';
import Share from '../../assets/share.png';
import ProfilePic from '../../assets/profile-pic.jpeg';
import Users from '../../assets/users.png'

import {
  SafeAreaView,
  View,
  FlatList,
  Text,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image
} from "react-native";

export default function ProfileHeader() {

  const [followers, setFollowers] = useState(23)
  const [following, setFollowing] = useState(45)
  const [username, setUsername] = useState('Gustavo')

  return (
    <>
      <View style={styles.profileContainer}>
        <View style={styles.iconsContainer}>
          <View style={{ alignItems: 'center' }}>
            <TouchableOpacity>
              <Image style={{ height: 28, width: 28 }} source={ArrowLeft} />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <TouchableOpacity>
              <Image style={{ height: 20, width: 20, marginRight: 12 }} source={Share} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image style={styles.icons} source={Settings} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.picContainer}>
          <View style={styles.border}>
            <Image style={styles.pic} source={ProfilePic} />
          </View>
        </View>
        <View style={[styles.socialContainer, {marginTop: 10}]}>
          <Text style={styles.usernameText}>{username}</Text>
        </View>
        <View style={styles.socialContainer}>
          <Text style={styles.socialText}>{followers} followers</Text>
          <View style={{ paddingHorizontal: 14 }}>
            <Image style={styles.icons} source={Users} />
          </View>
          <Text style={styles.socialText}>{following} following</Text>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  profileContainer: {
    width: '100%',
    backgroundColor: "#24292E",
    borderBottomRightRadius: 30,
    borderBottomLeftRadius: 30,
    paddingBottom: 30
  },
  iconsContainer: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    justifyContent: "space-between",
    alignItems: 'center'
  },
  icons: {
    height: 24,
    width: 24
  },
  picContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 100
  },
  border: {
    height: 160,
    width: 160,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#04D361',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80
  },
  pic: {
    height: 150,
    width: 150,
    borderRadius: 100,
    // borderWidth: 4,
    // borderColor: '#04D361',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  socialText: {
    color: '#fff',
    fontSize: 16,
  },
  usernameText: {
    fontSize: 20,
    color: '#FFF'
  }
});