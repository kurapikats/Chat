import React, { PropTypes } from 'react'
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet
} from 'react-native'
import KeyboardSpacer from 'react-native-keyboard-spacer'

import MessageBubble from './MessageBubble'

const ChatScreen = (props) => {
  const messages = [
    { isOwnMessage: false, message: 'Hi I\'m Alice. How can I help you today? '},
    { isOwnMessage: true, message: 'Hello Alice, I wanted to upgrade to the next tier of service' },
    { isOwnMessage: false, message: 'Sure thing! I can definitely help you out with that.' }
  ]

  const spacer = Platform.OS === 'ios' ? <KeyboardSpacer /> : null

  const bubbles = messages.map((m, i) => {
    return <MessageBubble {...m} key={i} />;
  })

  return (
    <View behavior="padding" style={styles.container}>
      <View style={styles.bubbleContainer}>
        {bubbles}
      </View>

      <View style={styles.messageBoxContainer}>
        <TextInput
          style={styles.messageBox}
          value={props.composingMessage}
          onChangeText={props.onComposeMessageUpdate}
          returnKeyType="send"
        />

        <TouchableOpacity>
          <Text style={styles.sendButton}>Send</Text>
        </TouchableOpacity>
      </View>

      {spacer}
    </View>
  )
}

ChatScreen.propTypes = {
  composingMessage: PropTypes.string,
  onComposeMessageUpdate: PropTypes.func.isRequired
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff'
  },
  bubbleContainer: {
    flex: 1
  },
  messageBoxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#cccccc',
    backgroundColor: '#eeeeee',
    paddingVertical: 5,
    paddingHorizontal: 10
  },
  messageBox: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#dddddd',
    backgroundColor: '#ffffff',
    paddingHorizontal: 5
  },
  sendButton: {
    color: 'blue',
    marginLeft: 10,
    marginRight: 5,
    fontSize: 16,
    fontWeight: '500'
  }
})

export default ChatScreen
