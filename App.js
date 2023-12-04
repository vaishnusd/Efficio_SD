import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import Login from './src/screens/LoginPage/Login';
import IssueReport from './src/screens/IssueReport/IssueReport';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Login/>
      {/* <IssueReport /> */}
      <StatusBar style="auto"   />
    </SafeAreaView>
  );
};
