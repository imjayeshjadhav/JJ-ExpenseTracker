import { Redirect } from 'expo-router'
import { Stack } from 'expo-router/stack'

export default function Layout() {

  const {isSignedIn} = newUser()

  if (!isSignedIn) return <Redirect href={"/sign-in"} />

  return <Stack screenOptions={{headerShown : false}} />
}