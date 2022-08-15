import React from 'react';
import {View, StyleSheet, FlatList, Dimensions, Animated} from 'react-native';
import LeaderBoard from '../../pages/LeaderBoard';
import TopPlayer from '../../pages/TopPlayer';
const {width} = Dimensions.get('window');
const swiperItem = [
  {
    id: 1,
    component: TopPlayer,
  },
  {
    id: 2,
    component: LeaderBoard,
  },
];
export default function Swipe() {
  const ScrollX = React.useRef(new Animated.Value(0)).current;
  const flatListRef = React.useRef(null);
  const viewConfig = React.useRef({viewAreaCoveragePercentThreshold: 50})
    .current;
  return (
    <FlatList
      ref={flatListRef}
      style={styles.container}
      data={swiperItem}
      keyExtractor={item => item.id}
      onScroll={Animated.event([{nativeEvent: {contentOffset: {x: ScrollX}}}], {
        useNativeDriver: false,
      })}
      scrollEventThrottle={32}
      viewabilityConfig={viewConfig}
      renderItem={({item}) => {
        const Page = item.component;
        return (
          <View style={styles.pages}>
            <Page />
          </View>
        );
      }}
      horizontal={true}
      pagingEnabled={true}
      showsHorizontalScrollIndicator={false}
    />
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pages: {
    width: width,
  },
});
