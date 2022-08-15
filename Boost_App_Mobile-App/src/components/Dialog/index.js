import React from 'react';
import {Dialog} from '@rneui/themed';
import {DiaLogCss} from './styles';
export default function DiaLog({
  visible,
  onShow,
  headerChildren,
  bodyChildren,
  buttonChildren,
}) {
  const handleShowDialog = () => onShow(!visible);
  return (
    <Dialog
      overlayStyle={DiaLogCss.container}
      isVisible={visible}
      onBackdropPress={handleShowDialog}
    >
      {headerChildren}
      {bodyChildren}
      {buttonChildren}
    </Dialog>
  );
}
