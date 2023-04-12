import { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../../config/firebase';

import {
  Container,
  Title,
  Input,
  ButtonContainer,
  Button,
  ButtonTitle
} from './styles';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginUser = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {

        const user = userCredential.user;
        console.log(user.appName)
        if (user.apiKey !== null) {
          // navigation.navigate('Home');
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
        // ..
      });
  };

  return (
    <Container>
      <Title>FIAP</Title>
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
        <Button onPress={loginUser}>
          <ButtonTitle>Logar</ButtonTitle>
        </Button>
        <Button onPress={() => navigation.navigate('Register')}>
          <ButtonTitle>Registrar</ButtonTitle>
        </Button>
      </ButtonContainer>
    </Container>
  );
}