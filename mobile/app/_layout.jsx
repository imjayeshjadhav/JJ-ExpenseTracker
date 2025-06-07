import { tokenCache } from '@clerk/clerk-expo/token-cache'
import SafeScreen from "@/components/SafeScreen"
import { ClerkProvider } from '@clerk/clerk-expo'
import { Slot } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function RootLayout() {
  const publishableKey = process.env.EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY;

  return (
    <ClerkProvider publishableKey={publishableKey} tokenCache={tokenCache}>
      <SafeScreen>
        <Slot />
      </SafeScreen>
      <StatusBar style="auto" />
    </ClerkProvider>
  )
}
