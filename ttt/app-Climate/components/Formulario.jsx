import React, {useState} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {Text, TextInput, Button, Dialog, Portal} from 'react-native-paper';
import {Picker} from '@react-native-picker/picker';

const Formulario = ({busqueda, setBusqueda, setConsultar}) => {
  //Extraer los datos de la busqueda
  const {ciudad, pais} = busqueda;

  //Mostrar el Dialog
  const [alerta, setAlerta] = useState(false);

  //Validacion
  const consultarClima = () => {
    if (ciudad.trim() === '' || pais.trim() === '') {
      setAlerta(true);
      return;
    }
    setConsultar(true);
  };

  return (
    <View>
      <View>
        <TextInput
          label="Ciudad"
          mode="outlined"
          value={ciudad}
          onChangeText={ciudad => setBusqueda({...busqueda, ciudad})}
        />
        <Picker
          //Adding styles to the form
          // style={{ height: 120, backgroundColor: 'white', borderRadius: 15,}}
          selectedValue={pais}
          onValueChange={pais => setBusqueda({...busqueda, pais})}>
          <Picker.Item label="-- Select a country --" value="" />
          <Picker.Item label="Mexico" value="MX" />
          <Picker.Item label="Estados Unidos" value="US" />
          <Picker.Item label="Argentina" value="AR" />
          <Picker.Item label="Colombia" value="CO" />
          <Picker.Item label="Costa Rica" value="CR" />
          <Picker.Item label="España" value="ES" />
          <Picker.Item label="Francia" value="FR" />
        </Picker>

        <Button
          mode="elevated"
          onPress={() => {
            consultarClima();
          }}
          icon={({size, color}) => (
            <Image
              source={require('../src/img/busqueda.png')}
              style={{width: size, height: size, tintColor: color}}
            />
          )}>
          Search Weather
        </Button>
      </View>

      <Portal>
        <Dialog visible={alerta} onDismiss={() => setAlerta(false)}>
          <Dialog.Title>Error</Dialog.Title>
          <Dialog.Content>
            <Text variant="bodyMedium">All fields are required</Text>
          </Dialog.Content>
          <Dialog.Actions>
            <Button onPress={() => setAlerta(false)}>Close</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </View>
  );

  const styles = StyleSheet.create({
    contenedor: {
      flex: 1,
    },
  });
};

export default Formulario;
