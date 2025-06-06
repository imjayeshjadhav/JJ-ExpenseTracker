import { Redirect } from 'expo-router'
import { Stack } from 'expo-router/stack'
import { useUser } from '@clerk/clerk-expo'

export default function Layout() {

  const {isSignedIn, isLoaded} = useUser()

  if (!isLoaded) return null; // this is for a better user experience

  if (!isSignedIn) return <Redirect href={"/sign-in"} />

  return <Stack screenOptions={{headerShown : false}} />
}