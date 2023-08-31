/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

// var React = require('react');
// var ReactNative = require('react-native');

import React, {useRef} from 'react';
import {StyleSheet, Text, View, TouchableHighlight} from 'react-native';
import SignatureCapture from 'react-native-signature-capture';

const RNSignatureExample = () => {
  const signatureRef = useRef(null);

  function saveSign() {
    signatureRef.current.saveImage();
  }

  function resetSign() {
    signatureRef.current.resetImage();
  }

  function onSaveEvent(result) {
    //result.encoded - for the base64 encoded png
    //result.pathName - for the file path name
    console.log(result);
  }
  function onDragEvent() {
    // This callback will be called when the user enters signature
    console.log('dragged');
  }

  return (
    <View style={{flex: 1, flexDirection: 'column'}}>
      <Text style={{alignItems: 'center', justifyContent: 'center'}}>
        Signature Capture Extended{' '}
      </Text>
      <SignatureCapture
        style={[{flex: 1}, styles.signature]}
        ref={signatureRef}
        onSaveEvent={onSaveEvent}
        onDragEvent={onDragEvent}
        saveImageFileInExtStorage={false}
        showNativeButtons={false}
        showTitleLabel={false}
        backgroundColor="#ff00ff"
        strokeColor="#ffffff"
        minStrokeWidth={4}
        maxStrokeWidth={4}
        viewMode={'portrait'}
      />

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TouchableHighlight style={styles.buttonStyle} onPress={saveSign}>
          <Text>Save</Text>
        </TouchableHighlight>

        <TouchableHighlight style={styles.buttonStyle} onPress={resetSign}>
          <Text>Reset</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signature: {
    flex: 1,
    borderColor: '#000033',
    borderWidth: 1,
  },
  buttonStyle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    backgroundColor: '#eeeeee',
    margin: 10,
  },
});

export default RNSignatureExample;
