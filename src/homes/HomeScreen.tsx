import { View, Text, TextComponent } from 'react-native'
import React from 'react'
import Container from '../components/Container'
import { globalStyles } from '../styles/globalStyles'
import { fontFamilies } from '../constants/fontFamilies'
import Rowcomponents from '../components/Rowcomponents'
import Sectioncomponent from '../components/Sectioncomponent'
import Textcomponent from '../components/Textcomponent'
import Titlecomponent from '../components/Titlecomponent'
import { colors } from '../constants/colors'

const HomeScreen = () => {
  return ( 
    <Container >
      <Sectioncomponent>
        <Rowcomponents justify="space-between">
          <Textcomponent text="Home"/>
          <Textcomponent text="Home"/>
        </Rowcomponents>
      </Sectioncomponent>
      <Sectioncomponent>
       
      <Textcomponent text="Hi, Jason"/>
      <Titlecomponent text="Be productive Today" />

      </Sectioncomponent>

      <Sectioncomponent>
        
        <Rowcomponents 
          styles ={[globalStyles.inputContainer]}
          onPress={() => console.log('An vao mat nick ')}>
          <Textcomponent text="Search"/>
          <Text> S</Text>
        </Rowcomponents>
      </Sectioncomponent>
        
    </Container>

  )
}

export default HomeScreen