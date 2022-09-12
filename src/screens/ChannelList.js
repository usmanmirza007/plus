import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import { Collapse, CollapseHeader, CollapseBody } from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Footer } from '../components';
import { colors, fontFamily, images, WINDOW_HEIGHT } from '../constant';
import commonStyle from '../constant/commonStyle';
export const ChannelList = () => {

  const data = [
    {
      name: 'USA',
      data: [
        'channel1',
        'channel1',
        'channel1',
        'channel1',
      ]
    },
    {
      name: 'UEA',
      data: [
        'channel2',
        'channel2',
        'channel2',
        'channel2',
        'channel2',
      ]
    },
    {
      name: 'INDIA',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'UK',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'TURKY',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'RUSSIA',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'AUSTRALIA',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'SPAN',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'ENGLAND',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
    {
      name: 'NEWZEALAND',
      data: [
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
        'channel3',
      ]
    },
  ]
  return (
    <>
      <Header />
      <ScrollView style={{ backgroundColor: colors.white }}>

        <View style={{ backgroundColor: '#8d46c5', height: WINDOW_HEIGHT * 0.22, justifyContent: 'center' }}>
          <Text style={{ textAlign: 'center', fontSize: 38, fontFamily: fontFamily.poppins.semibold, color: colors.white }}>Channel List</Text>
        </View>
        <Image source={images.dotCircle} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center', marginTop: 10 }} />
        <Text style={{ marginHorizontal: 20, fontSize: 14, fontFamily: fontFamily.poppins.regular, marginTop: 20, color: colors.darkGray, textAlign: 'center' }}>All channels with this icon on the list support the time shift</Text>

        <View style={{ backgroundColor: '#F6F6F6', marginTop: 40, marginHorizontal: 10, marginBottom: 50, ...commonStyle.shadow }}>
          {data.map((item, index) => {
            const [collapseState, setCollapseState] = useState(false);
            return (
              <Collapse
                key={index}
                onToggle={() => setCollapseState(!collapseState)}
                style={{
                  marginTop: 9,
                  padding: 10,
                  marginHorizontal: 10,
                  borderBottomWidth: 1,
                  borderColor: colors.gray,
                }}>
                <CollapseHeader
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', }}>
                    <Image source={images.playIcon} style={{ height: 10, width: 15, resizeMode: 'contain', tintColor: collapseState ? colors.purple : colors.black, transform: [{ rotate: collapseState ? '-90deg': '0deg' }] }} />
                    <Text
                      style={{
                        fontFamily: fontFamily.poppins.semibold,
                        fontSize: 14,
                        color: collapseState ? colors.purple : colors.primaryBlack,
                        marginLeft: 10,
                      }}>
                      {item.name}
                    </Text>
                  </View>
                </CollapseHeader>
                <CollapseBody>
                  {item.data.map((chl, index) => {
                    return (
                      <View
                        key={index}
                        style={{
                          marginTop: 10,
                          flexDirection: 'row',
                          alignItems: 'center',
                        }}>
                        <Text
                          style={{
                            fontFamily: fontFamily.poppins.regular,
                            fontSize: 14,
                            color: colors.darkGray,
                            marginLeft: 8,
                          }}>
                          {chl}
                        </Text>
                      </View>
                    )
                  })}

                </CollapseBody>
              </Collapse>
            )
          })}
        </View>
        <Footer />
        
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({})
