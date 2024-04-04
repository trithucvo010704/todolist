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
import CardComponent from '../components/CardComponent'

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


      <Sectioncomponent>
        <CardComponent>
          <Rowcomponents>
            <View style = {{flex: 1 }}>
              <Titlecomponent text="Task Progess"/>
              <Textcomponent text="30/40 task done"/> 
              <Textcomponent text="Tag"/>
            </View>
            <View>
              <Textcomponent text="Criclechar"/> 
            </View>
          </Rowcomponents>
        </CardComponent> 
      </Sectioncomponent>  
    </Container>

  )
}

export default HomeScreen