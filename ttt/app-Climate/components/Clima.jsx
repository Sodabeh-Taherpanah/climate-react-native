import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, Card, Button} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

const Clima = ({resultado}) => {
  //Definiendo la navegacion
  const navigation = useNavigation();

  //State de Favorites

  const [favorito, setFavorito] = useState(false);

  const {name, main, weather, sys} = resultado;

  //If there is no result, show nothing
  if (!name) return null;

  //Grados kelvin
  const kelvin = 273.15;

  //Recorrer el weather
  const descriptions = weather.map(element => element.description);
  const contry = sys.country;
  const temp = parseInt(main.temp - kelvin);

  //Creando un objeto con los parametros del favorito
  const objTemp = {
    descriptions,
    contry,
    temp,
    name,
  };

  const favoritos = () => {
    //Pasando el state
    setFavorito(true);
    navigation.navigate('Favorites', objTemp);
  };

  return (
    <View style={styles.content}>
      <Card>
        <Card.Content>
          <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
            <Text style={styles.number}>{temp}° </Text>

            <View style={styles.containerDesc}>
              <Text style={styles.titleWeather}>{descriptions}</Text>
              <Text style={styles.titleDescription}>
                {name}, {contry}
              </Text>
            </View>

            <Image
              source={require('../src/img/nube-sol.png')}
              style={styles.mainImage}
            />
          </View>
          <Button
            icon={({size, color}) => (
              <Image
                source={require('../src/img/corazon.png')}
                style={{width: size, height: size, tintColor: color}}
              />
            )}
            mode="contained-tonal"
            onPress={() => favoritos()}>
            Add to Favorites
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    marginVertical: 18,
  },
  number: {
    fontSize: 52,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
  },
  containerDesc: {
    flexDirection: 'col',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  titleWeather: {
    fontSize: 18,
    marginBottom: 4,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  titleDescription: {
    fontSize: 16,
    marginBottom: 4,
    textAlign: 'left',
    color: '#77818F',
  },
  mainImage: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Clima;
