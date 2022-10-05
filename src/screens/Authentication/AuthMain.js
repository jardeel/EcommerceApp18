import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';

import { CountryDropdown } from '../../components';

const AuthMain = () => {

  //country
  const [countries, setCountries] = useState([]);
  const [showCountryModal, setCountryModal] = useState(false);

  useEffect(() => {
    //Fetch countries
    fetch("https://restcountries.com/v2/all")
      .then(response => response.json())
      .then(data => {
        let countryData = data.map(item => {
          return {
            code: item.alpha2Code,
            name: item.name,
            callingCode: `+${item.callingCodes[0]}`,
            flag: `https://countryflagsapi.com/png/${item.alpha2Code}`
          }
        })

        setCountries(countryData)
      })
  }, [])

  //Render
  function renderCountryModal() {
    reutrn (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showCountryModal}
      >
        <TouchableWithoutFeedback onPress={setCountryModal(false)}/>
        <View
          style={{
            height: 400,
            width: SIZES.width * 0.8,
            backgroundColor: COLORS.light,
            borderRadius: SIZES.radius
          }}
        >
          <FlatList
            data={countries}
            keyExtractor={(item) => item.code}
            contentContainerStyle={{
              paddingHorizontal: SIZES.padding,
              paddingBottom: SIZES.padding
            }}
            renderItem={({ item }) => {
              return (
                <TouchebleOpacity
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginTop: SIZES.radius
                  }}
                  onPress={() => {
                    console.log(item)
                    setSelectedCountry(item)
                    setCountryModal(false)
                  }}
                >
                  <Image
                    source={{ uri: item.flag }}
                    resizeMode="contain"
                    style={{
                      width: 40,
                      height: 30
                    }}
                  />
                  <Text 
                    style={{
                      flex: 1,
                      marginLeft: SIZES.radius,
                      ...FontFaceSet.body3
                    }}
                  >
                    {item.name}
                  </Text>
                </TouchebleOpacity>
              )
            }}
          />
        </View>
      </Modal>
    )
  }


  return (
    <View>

    </View>
  )
}

export default AuthMain;