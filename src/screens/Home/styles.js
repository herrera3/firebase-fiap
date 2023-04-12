import styled from 'styled-components/native'

export const Container = styled.View`
  flex: 1;
  padding: 20px;
  margin: 20px 0 0 0;
  background-color: #FFF;
`;

export const Body = styled.View`
  flex: 1;
`;

export const List = styled.FlatList`
  flex: 1;
  margin: 5px 0 0 0;
`;

export const ContainerList = styled.View`
  margin-bottom: 15px;
  padding: 15px;
  border-radius: 4px;
  background-color: #eee;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border: 1px solid #eee;
`;

export const Text = styled.Text`
  font-size: 14px;
  color: #333;
  font-weight: bold;
  margin: 4px 0 0 0;
  text-align: center;
`;

export const Icon = styled.TouchableOpacity``;

export const Form = styled.View`
  padding: 0;
  height: 60px;
  justify-content: center;
  align-self: stretch;
  flex-direction: row;
  padding-top: 13px;
  border-top-width: 1px;
  border-color: #eee;
`;

export const Input = styled.TextInput`
  flex: 1;
  height: 40px;
  background-color: #eee;
  border-radius: 4px;
  padding: 10px 5px;
  border-width: 1px;
  border-color: #eee;
`;

export const Button = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  justify-content: center;
  align-items: center;
  background-color: #1c6cce;
  border-radius: 4px;
  margin: 0 0 0 10px;
`;