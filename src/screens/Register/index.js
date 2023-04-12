import { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

import {
  Container,
  Title,
  Input,
  ButtonContainer,
  Button,
  ButtonTitle
} from './styles';

export default function Register({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        if (user.apiKey !== null) {
          navigation.navigate('Login');
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <Container>
      <Title>Registrar</Title>
      <Input
        placeholder="E-mail"
        type="text"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        placeholder="Senha"
        secureTextEntry={true}
        type="text"
        onChangeText={(text) => setPassword(text)}
        value={password}
      />
      <ButtonContainer>
        <Button onPress={registerUser}>
          <ButtonTitle>Registrar</ButtonTitle>
        </Button>
        <Button onPress={() => navigation.navigate('Login')}>
          <ButtonTitle>Voltar</ButtonTitle>
        </Button>
      </ButtonContainer>
    </Container>
  );
}