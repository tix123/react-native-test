import { StyleSheet, View } from 'react-native';

const ViewTest = () => {
    return (
        <View style={styles.container}>
            <View style={styles.avatarContainer} >
                <View style={styles.avatar} />
                <View style={styles.avatar} />
                <View style={styles.avatar} />
                <View style={styles.avatar} />
            </View>
            <View style={styles.post} />
            <View style={styles.post} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingTop: 30,
    },
    avatarContainer: {
        height: 75,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
    },
    avatar: {
        height: 75,
        width: 75,
        backgroundColor: 'gray',
        borderRadius: 75,
    },
    post: {
        width: '100%',
        flex: 0.4,
        backgroundColor: 'gray',
    },
});

export default ViewTest