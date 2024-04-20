import { View, Text, TextComponent } from 'react-native';
import React from 'react';
import Container from '../components/Container';
import { globalStyles } from '../styles/globalStyles';
import { fontFamilies } from '../constants/fontFamilies';
import Rowcomponents from '../components/Rowcomponents';
import Sectioncomponent from '../components/Sectioncomponent';
import Textcomponent from '../components/Textcomponent';
import Titlecomponent from '../components/Titlecomponent';
import { colors } from '../constants/colors';
import CardComponent from '../components/CardComponent';
import { Element3, Notification, SearchNormal1 } from 'iconsax-react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TagComponent from '../components/TagComponent';
import SpaceComponent from '../components/SpaceComponent';
const HomeScreen = () => {
  return (
    <Container>
      <Sectioncomponent>
        <Rowcomponents justify="space-between">
          <Element3 size={24} color={colors.desc} />
          <Notification size={24} color={colors.desc} />
        </Rowcomponents>
      </Sectioncomponent>
      <Sectioncomponent>
        <Textcomponent text="Hi, Jason" />
        <Titlecomponent text="Be productive Today" />
      </Sectioncomponent>

      <Sectioncomponent>
        <Rowcomponents
          styles={[globalStyles.inputContainer]}
          onPress={() => console.log('An vao mat nick ')}>
          <Textcomponent color="#696B6F" text="Search Task" />
          <SearchNormal1 size={18} color={colors.desc} />
        </Rowcomponents>
      </Sectioncomponent>

      <Sectioncomponent>
        <CardComponent>
          <Rowcomponents>
            <View style={{ flex: 1 }}>
              <Titlecomponent text="Task Progess" />
              <Textcomponent text="30/40 task done" />

              <SpaceComponent height={14} />

              <Rowcomponents justify="flex-start">
                <TagComponent
                  onPress={() => console.log("An vo gay xuong !")}
                  text="March 22" />
              </Rowcomponents>
            </View>
            <View>
              <Textcomponent text="Criclechar" />
            </View>
          </Rowcomponents>
        </CardComponent>
      </Sectioncomponent>
    </Container>
  );
};

export default HomeScreen;
