import React, {useState} from 'react';
import {Alert, Modal, StyleSheet, SafeAreaView, Text, Pressable, View} from 'react-native';

export default function App() {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <SafeAreaView style={styles.centeredView}>
      <Modal
        animationType='slide'
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.container}>
          <View style={styles.modalView}>
          <Text>This is Modal...</Text>
          <Pressable
            onPress={() => setModalVisible(!modalVisible)}>
            <Text>Close</Text>                
          </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        onPress={() => setModalVisible(true)}>
        <Text>Show Modal Message</Text>
      </Pressable>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
