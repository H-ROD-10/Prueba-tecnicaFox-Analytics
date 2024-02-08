import React, { useEffect, useState } from 'react'
import { Text, StyleSheet, View, TouchableOpacity, Linking, FlatList, Image } from 'react-native'
import { getNews } from '../services'
import { INews, Article } from '../interfaces/INews';
import { Card } from '../components/Card';

export const News = () => {

  const [news, setNews] = useState<INews>();
  const [pageNumber, setPageNumber] = useState(1);
  const [totalResulst] = useState(4);


  useEffect(() => {
    getNews(totalResulst, pageNumber).then((res) => {
      setNews((prevNews) => ({
        ...prevNews,
        articles: [...(prevNews?.articles || []), ...res?.data?.articles!],
        status: res ? res.data.status : 'error',
        totalResults: res ? res.data.totalResults : 1
      }));
    })

  }, [pageNumber])

  const loadMoreNews = () => {


    if (pageNumber < 5) {
      setPageNumber(prevPageNumber => prevPageNumber + 1);
    }

  };

  const handlePress = async (url: string) => {
    try {
      await Linking.canOpenURL(url);
      await Linking.openURL(url);
    } catch (error) {
      console.error(`No se pudo abrir la URL ${url}: `, error);
    }
  };

  const renderItem = ({ item }: { item: Article }) => (
    <View style={styles.container}>
      <Card item={item} handlePress={handlePress} />
    </View>
  );


  return (
    <FlatList
      data={news?.articles}
      renderItem={renderItem}
      keyExtractor={(item, index) => item.author + index}
      onEndReached={loadMoreNews}
      onEndReachedThreshold={0.5} // Puedes ajustar este valor según sea necesario
    />
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },

})
//https://expo.dev/artifacts/eas/bfvxmfxaAnbp6RVJCa1jTE.apk