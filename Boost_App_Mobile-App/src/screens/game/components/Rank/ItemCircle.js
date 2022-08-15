import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {TopPlayerCss} from '../../styles/Topplayercss';
export default function Item(props) {
  return (
    <View style={styles.container}>
      <Image source={{uri: props.avatar}} style={TopPlayerCss.avatar} />
      <Text style={[TopPlayerCss.txtPrimary, TopPlayerCss.txtRank]}>
        {props.rank}
      </Text>
      <Text style={[TopPlayerCss.txtSecondary, TopPlayerCss.txtUser]}>
        {props.username}
      </Text>
      <View style={TopPlayerCss.points}>
        <Text style={TopPlayerCss.txtTertiary}>{props.points} pts</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    minHeight: 20,
    width: '100%',
  },
});
