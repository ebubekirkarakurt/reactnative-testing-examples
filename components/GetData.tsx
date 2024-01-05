import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import useGetData from './useGetData';

type Props = {};

type DataType = {
  title: string;
  id: number;
  userId: number;
};

const GetData = (props: Props) => {
  const result = useGetData();
  console.log('result:' + JSON.stringify(result));
  return (
    <View>
      <Text>Ebubekir</Text>
      {result &&
        result.map((element: any) => {
          return (
            <View>
              <Text>{element.id}</Text>
            </View>
          );
        })}
    </View>
  );
};

export default GetData;

const styles = StyleSheet.create({});
