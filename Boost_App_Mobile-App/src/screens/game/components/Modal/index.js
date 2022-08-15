import React from 'react';
import {View, Text, Modal, TouchableOpacity} from 'react-native';
import {COLOR} from '../../../../constants';

export default function ShowModal({allQuestions, score, isVisible, onPress}) {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View
        style={{
          flex: 1,
          backgroundColor: COLOR.bgColor__Main,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View
          style={{
            backgroundColor: COLOR.bgColor__White,
            width: '90%',
            borderRadius: 20,
            padding: 20,
            alignItems: 'center',
          }}
        >
          <Text style={{fontSize: 30, fontWeight: 'bold'}}>
            {score > allQuestions.length / 2 ? 'Congratulations!' : 'Oops!'}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'flex-start',
              alignItems: 'center',
              marginVertical: 20,
            }}
          >
            <Text
              style={{
                fontSize: 30,
                color:
                  score > allQuestions.length / 2 ? COLOR.Success : COLOR.Error,
              }}
            >
              {score}
            </Text>
            <Text
              style={{
                fontSize: 20,
                color: COLOR.bgColor__Black,
              }}
            >
              / {allQuestions.length}
            </Text>
          </View>
          {/* Retry Quiz button */}
          <TouchableOpacity
            onPress={onPress}
            style={{
              backgroundColor: COLOR.bgColor__Main,
              padding: 20,
              width: '100%',
              borderRadius: 20,
            }}
          >
            <Text
              style={{
                textAlign: 'center',
                color: COLOR.bgColor__White,
                fontSize: 20,
              }}
            >
              Retry Quiz
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
