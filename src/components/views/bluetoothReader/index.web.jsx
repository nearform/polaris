import * as React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'react-native'
import Container from 'components/atoms/container'

export const Bluetooth = () => {
  const { t } = useTranslation()

  // const btSerial = new (require('bluetooth-serial-port')).BluetoothSerialPort();

  /* btSerial.on('found', function(address, name) {
    btSerial.findSerialPortChannel(address, function (channel) {
      console.log('connected')

      btSerial.write(Buffer.from('my data', 'utf-8'), function(err, bytesWritten) {
        if (err) console.log(err);
      });

      btSerial.on('data', function(buffer) {
        console.log(buffer.toString('utf-8'));
      });
    }, function () {
    console.log('cannot connect');
  });

    // close the connection when you're ready
    btSerial.close();
    }, function() {
    console.log('found nothing');

})
    btSerial.inquire(); */

  return (
    <Container>
      <Button
        title={t('bluetoothView:scanButton')}
        onPress={() => console.log('button pressed and nothing will happen')}
      />
    </Container>
  )
}
