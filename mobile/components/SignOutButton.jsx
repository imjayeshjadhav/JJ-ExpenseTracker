import { useClerk } from '@clerk/clerk-expo'
import * as Linking from 'expo-linking'
import { Alert, Text, TouchableOpacity } from 'react-native'
import { styles } from '../assets/styles/home.styles'
import { Ionicons } from '@expo/vector-icons'
import { COLORS } from '../constants/colours'

export const SignOutButton = () => {
  // Use `useClerk()` to access the `signOut()` function
  const { signOut } = useClerk()
  const handleSignOut = async () => {
    
    Alert.alert("Logout", "Are you sure want to logout?" ,[
      {text:"Cancel", style:"cancel"},
      {text: "Logout", style:"destructive", onPress:signOut}
    ])

  }
  return (
    <TouchableOpacity style={styles.logoutButton} onPress={handleSignOut} >
      <Text><Ionicons name='log-out-outline' color={COLORS.text} size={22} /></Text>
    </TouchableOpacity>
  )
}       