import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useGetTodosQuery } from '../redux/getData';

type Props = {};

const GetTodos = (props: Props) => {
  const { data } = useGetTodosQuery('') || [];

  return (
    <View>
      {data &&
        data.map((element: any) => {
          return (
            <View>
              <Text>{element.title}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default GetTodos;

const styles = StyleSheet.create({});
