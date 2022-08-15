import React, { useState } from 'react';
import { View, StyleSheet, Text, Image } from 'react-native';
import {
  Collapse,
  CollapseHeader,
  CollapseBody,
} from 'accordion-collapse-react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Header, Footer } from '../components';
export const ChannelList = () => {
  const [collapseState, setCollapseState] = useState(false);

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
      <ScrollView>

      <View style={{ backgroundColor: '#8d46c5', height: 100, alignItems: 'center' }}>
        <Text style={{ alignSelf: 'center', fontSize: 24, fontWeight: '700', marginTop: 40, color: '#fff' }}>Channel List</Text>
      </View>
      <Text style={{ marginHorizontal: 25, fontSize: 15, marginTop: 10, color: 'grey', textAlign: 'center' }}>All channels with this icon on the list support the time shift</Text>
      <View style={{ backgroundColor: '#fff', elevation: 3, marginTop: 10, marginHorizontal: 25, marginBottom: 50 }}>

        {data.map((item, index) => {
          return (
            <Collapse
              onToggle={() => setCollapseState(!collapseState)}
              style={{
                marginTop: 9,
                // backgroundColor: 'red',
                // marginHorizontal: 25,
                // elevation: 3
                padding: 5,
                marginLeft: 10
              }}>
              <CollapseHeader
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View style={{ alignSelf: 'center' }}>
                  {collapseState ? (
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 14,
                        color: '#000',
                      }}>
                      - {item.name}
                    </Text>
                  ) : (
                    <Text
                      style={{
                        fontFamily: 'Montserrat-SemiBold',
                        fontSize: 14,
                        color: "#000",
                      }}>
                      + {item.name}
                    </Text>
                  )}
                </View>
              </CollapseHeader>
              <CollapseBody>
                {item.data.map((chl, index) => {
                  return (
                    <View
                      style={{
                        marginTop: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}>
                      <Text
                        style={{
                          fontSize: 10,
                          fontFamily: 'Montserrat-Regular',
                          color: "#000",
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
