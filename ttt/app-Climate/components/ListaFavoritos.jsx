import React, {useState, useEffect} from 'react';
import {View, ScrollView, StyleSheet, Image} from 'react-native';
import {Text, Button} from 'react-native-paper';

const ListaFavoritos = ({datos}) => {
  //Almacenando los favoritos en un array
  const [favoritos, setFavorito] = useState([]);

  // Añadir los datos al array de favoritos cuando cambia
  useEffect(() => {
    if (datos) {
      setFavorito(prevFavoritos => [...prevFavoritos, datos]);
    }
  }, [datos]);

  return (
    <View>
      <ScrollView>
        {favoritos.length === 0 ? (
          <>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 80,
              }}>
              <Image
                source={require('../src/img/empty.png')}
                style={styles.image}
              />
              <Text style={styles.favorite}>There are no favorites</Text>
            </View>
          </>
        ) : (
          favoritos.map((item, index) => (
            <>
              <View style={styles.contenedor}>
                <Text key={index} style={styles.number}>
                  {item.temp}°
                </Text>

                <View style={styles.contenedorDesc}>
                  <Text style={styles.titleWeather}>{item.descriptions}</Text>
                  <Text style={styles.titleDescription}>
                    {item.name}, {item.contry}
                  </Text>
                </View>

                <Image
                  source={require('../src/img/nube-sol.png')}
                  style={styles.mainImage}
                />
                <Button
                  icon={({size, color}) => (
                    <Image
                      source={require('../src/img/basura.png')}
                      style={{width: size, height: size, tintColor: color}}
                    />
                  )}
                  style={{textAlign: 'center', width: '100%', marginTop: 10}}
                  mode="contained-tonal">
                  Remover de Favoritos
                </Button>
              </View>
            </>
          ))
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  contenedor: {
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    marginBottom: 10,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  number: {
    fontSize: 38,
    fontWeight: 'bold',
    marginBottom: 12,
    textAlign: 'left',
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
  contenedorDesc: {
    flexDirection: 'col',
    marginHorizontal: 20,
    justifyContent: 'center',
  },
  mainImage: {
    width: 55,
    height: 55,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  favorite: {
    textAlign: 'center',
    fontSize: 20,
  },
});

export default ListaFavoritos;
