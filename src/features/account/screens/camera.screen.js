import React, { useState, useEffect, useRef, useContext } from 'react'
import { View, Text } from 'react-native'
import { IconButton } from 'react-native-paper'
import { Camera, CameraType } from 'expo-camera'
import styled from 'styled-components'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthenticationContext } from '../../../services/authentication/authentication.context'

const ProfileCamera = styled(Camera)`
  width: 100%;
  height: 100%;
`

const CameraScreen = ({ navigation }) => {
  const { user } = useContext(AuthenticationContext)
  const cameraRef = useRef()
  const [type, setType] = useState(CameraType.front)
  const [hasPermission, setHasPermission] = useState({ status: null })

  const flipCamera = (type) => {
    setType(type === CameraType.back ? CameraType.front : CameraType.back)
  }
  const takePicture = async () => {
    if (cameraRef) {
      const data = await cameraRef.current.takePictureAsync()
      AsyncStorage.setItem(`@photo-${user.uid}`, data.uri)
      navigation.goBack()
    }
  }

  // request permission
  const { status } = Camera.useCameraPermissions()
  useEffect(() => {
    setHasPermission({ status })
  }, [status])

  if (hasPermission.status === null) {
    return <View />
  }
  if (hasPermission.status === false) {
    return <Text>No access to camera</Text>
  }

  return (
    <View>
      <ProfileCamera
        type={type}
        ref={(ref) => {
          cameraRef.current = ref
        }}
      ></ProfileCamera>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'center',
        }}
      >
        <IconButton
          icon="camera-flip"
          mode="text"
          onPress={() => flipCamera(type)}
          iconColor="white"
          size={40}
        />

        <IconButton
          icon="camera"
          mode="outlined"
          onPress={() => takePicture()}
          iconColor="white"
          size={40}
        />
      </View>
    </View>
  )
}

export default CameraScreen
