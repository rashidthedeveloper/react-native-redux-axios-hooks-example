import React, {useEffect} from 'react';
import {View, Text, FlatList, ActivityIndicator} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import apiCall from './ApiActionCreator';

const Home = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.apiReducer.data);
  const loading = useSelector((state) => state.apiReducer.loading);
  useEffect(() => {
    dispatch(apiCall('https://jsonplaceholder.typicode.com/posts'));
  }, []);

  return (
    <View style={{flex: 1, backgroundColor: 'white', justifyContent: 'center'}}>
      {loading ? (
        <ActivityIndicator size="large" color="red" />
      ) : (
        <FlatList
          data={data}
          renderItem={({item}) => <Text>{item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      )}
    </View>
  );
};

export default Home;
