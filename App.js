import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ViewTest from './components/ViewTest'

export default function App() {
    return (
        <View style={styles.container}>

            {/* <Text style={styles.bold}>
                Open up App.js to
                <Text style={styles.red}> start working </Text>
                on your app!
            </Text> */}

            <ViewTest />
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    bold: {
        fontWeight: 'bold',
    },
    red: {
        color: '#f00',
    },
});
