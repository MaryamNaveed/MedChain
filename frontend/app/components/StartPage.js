import React from 'react';
import { View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

const StartPage = () => {
    const navigation = useNavigation();
    const image = { uri: "../images/appBack.jpg" };

    const navigateToPatient = () => {
        navigation.navigate('SigninPatient');

    }
    const navigateToDoctor = () => {
        navigation.navigate('SigninDoctor');
    }


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../images/appBack.jpg')}
                resizeMode="cover"
                style={{ height: '100%' }}>
                <Text
                    variant="displayMedium"
                    style={styles.headingtext}>
                    Hello!
                </Text>
                <Text
                    variant="headlineMedium"
                    style={styles.subheadingtext}>
                    Are you a doctor or a Patient?
                </Text>
                <Image
                    source={require('../images/doctor_and_patient.jpg')}
                    style={styles.image}
                />
                <Button
                    buttonColor='royalblue'
                    style={styles.button}
                    mode="contained"
                    onPress={navigateToDoctor}>
                    <Text style={styles.whitetext}>
                        Doctor
                    </Text>
                </Button>
                <Button
                    buttonColor='royalblue'
                    style={styles.button}
                    mode="contained"
                    onPress={navigateToPatient}>
                    <Text style={styles.whitetext}>
                        Patient
                    </Text>
                </Button>
            </ImageBackground>
        </View>


    );

};

const styles = StyleSheet.create({
    container: {

    },
    button: {
        margin: 10,
        borderRadius: 10,
        textColor: 'white'
    },
    image: {
        marginLeft: 'auto',
        marginRight: 'auto',
        marginBottom: 10
    },
    headingtext: {
        color: '#00ced1',
        margin: 15
    },
    subheadingtext: {
        margin: 20,
        color: 'white'

    },
    whitetext: {
        color: 'white'
    }
});

export default StartPage;
