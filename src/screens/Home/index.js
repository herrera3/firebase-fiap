import React, { useState, useEffect } from "react";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {db} from "../../config/firebase";
import {query, collection, getDocs, addDoc, deleteDoc, doc}  from 'firebase/firestore';

import {
  Keyboard,
  Alert,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import {
  Container,
  Body,
  List,
  ContainerList,
  Text,
  Icon,
  Form,
  Input,
  Button
} from './styles';

export default function Home() {
  const [task, setTask] = useState([]);
  const [newTask, setNewTask] = useState("");

  // async function addTask() {
  //   const search = task.filter(task => task === newTask);

  //   if (search.length !== 0) {
  //     Alert.alert("Atenção", "Nome da tarefa repetido!");
  //     return;
  //   }

  //   setTask([...task, newTask]);
  //   setNewTask("");

  //   Keyboard.dismiss();
  // }
async function addTaskFireabse(){
  let taskFirebase = {
    id: Math.random(),
    task : newTask,
  }
  const docRef = addDoc(collection(db, "tasks"), taskFirebase);
  task.id = docRef.id
  let updatedTask = [...task, taskFirebase]

  setTask(updatedTask);
  setNewTask("")

  Keyboard.dismiss();
}
  async function removeTask(taskId) {
    Alert.alert(
      "Deletar Task",
      "Tem certeza que deseja remover esta anotação?",
      [
        {
          text: "Cancel",
          onPress: () => {
            return;
          },
          style: "cancel"
        },
        {
          text: "OK",
          onPress: async() =>{
            console.log(taskId)
            await deleteDoc(doc(db, "tasks", taskId))
            let updatedTask = [...task].filter((item)=> item.id != taskId);
            setTask(updatedTask);

          }
        }
      ],
      { cancelable: false }
    );
  }

  // useEffect(() => {
  //   async function carregaDados() {
  //     const task = await AsyncStorage.getItem("task");

  //     if (task) {
  //       setTask(JSON.parse(task));
  //     }
  //   }
  //   carregaDados();
  // }, []);
  useEffect(() => {
    async function carregaDadosFirebase() {
      const q = query(collection(db, "tasks"));
      const querySnapshot = await getDocs(q);
      let tasks = [];
      querySnapshot.forEach((doc) => {
        tasks.push(doc.data())
      });
      console.log(tasks);
      console.log(querySnapshot);
      setTask(tasks);
    }
    carregaDadosFirebase();
  }, [task]);

  useEffect(() => {
    async function salvaDados() {
      AsyncStorage.setItem("task", JSON.stringify(task));
    }
    salvaDados();
  }, [task]);

  return (
    <>
      <KeyboardAvoidingView
        keyboardVerticalOffset={0}
        behavior="padding"
        style={{ flex: 1 }}
        enabled={Platform.OS === "ios"}
      >
        <Container>
          <Body>
            <List
              data={task}
              keyExtractor={item => item.toString()}
              showsVerticalScrollIndicator={false}
              renderItem={({ item }) => (
                <ContainerList>
                  <Text>{item.task}</Text>
                  <Icon onPress={() => removeTask(item.id)}>
                    <MaterialIcons
                      name="delete-forever"
                      size={25}
                      color="#f64c75"
                    />
                  </Icon>
                </ContainerList>
              )}
            />
          </Body>

          <Form>
            <Input
              placeholderTextColor="#999"
              autoCorrect={true}
              value={newTask}
              placeholder="Adicione uma tarefa"
              maxLength={25}
              onChangeText={text => setNewTask(text)}
            />
            <Button onPress={() => addTaskFireabse()}>
              <Ionicons name="ios-add" size={20} color="white" />
            </Button>
          </Form>
        </Container>
      </KeyboardAvoidingView>
    </>
  );
}
