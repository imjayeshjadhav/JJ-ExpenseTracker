import { SignedIn, SignedOut, useUser } from '@clerk/clerk-expo'
import { Link, useRouter } from 'expo-router'
import { Text, View, Image, TouchableOpacity, FlatList, Alert, RefreshControl } from 'react-native'
import { Ionicons } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import PageLoader from '../../components/PageLoader'
import { styles } from '../../assets/styles/home.styles'
import { SignOutButton } from '../../components/SignOutButton'
import { useTransaction } from '../../hooks/useTransaction'
import {BalanceCard} from "../../components/BalanceCard"
import TransactionItem from '../../components/TransactionItem'
import NoTransactionFound from '../../components/NoTransactionFound'

export default function Index() {

    const { user } = useUser()
    const {transactions, summary, isLoading, loadData, deleteTransaction } = useTransaction(user?.id)

    useEffect(()=>{
      loadData()
    },[loadData])

    const router = useRouter()
    const [refreshing, setRefreshing] = useState(false)

    const OnRefresh = async ()=>{
      setRefreshing(true)
      await loadData
      setRefreshing(false)
    }

    const handleDelete =(id) =>{
      Alert.alert("Delete Transaction", "Are you sure want to delete this transaction?" ,[
      {text:"Cancel", style:"cancel"},
      {text: "Delete", style:"destructive", Onpress:() => deleteTransaction(id)}
    ])
    }

    if (isLoading && !refreshing) return <PageLoader/>

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        {/*Header*/}
        <View style={styles.header}>
          {/*Left */}
          <View style={styles.headerLeft}>
            <Image  
              source={require("../../assets/images/logo.png")}
              style={styles.headerLogo}
              resizeMode='contain'
            />
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome, </Text>
              <Text style={styles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/*Right*/}
          <View style={styles.headerRight}>
            <TouchableOpacity style={styles.addButton} onPress={()=> router.push("/create")}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={styles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton/>
          </View>
        </View>
        <BalanceCard summary={summary} />
        <View style={styles.transactionsHeaderContainer}>
          <Text style={styles.sectionTitle}>Recent Transactions</Text>
        </View>
      </View>
      <FlatList
        style={styles.transactionsList}
        contentContainerStyle={styles.transactionsListContent}
        data={transactions}
        renderItem={({item})=>(
          <TransactionItem item={item} onDelete ={handleDelete} />
        )}
        ListEmptyComponent={<NoTransactionFound/>}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={OnRefresh} />}
      />

    </View>
  );
}

