import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AppGetDataTypes } from '../types';
import useGetData from './useGetData';

type Props = {}

const GetData = (props: Props) => {
    const { data, isLoading } = useGetData<AppGetDataTypes>();

    if (isLoading) return <Text testID="loading-tid">Loading...</Text>;
  
    if (!data) return <Text>There is no data here</Text>;
  
    return (
      <View>
        <Text>{data.title}</Text>
        <Text>Id: {data.id}</Text>
        <Text>UserId: {data.userId}</Text>
      </View>
    );
}

export default GetData

const styles = StyleSheet.create({})