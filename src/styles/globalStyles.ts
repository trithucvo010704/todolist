import {Platform, StyleSheet} from 'react-native';
import {colors} from '../constants/colors';
import {fontFamilies} from '../constants/fontFamilies';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 52 : 42,
  },

  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center', // noi dung mac dinh nen nam o giua
    alignItems: 'center', // can chinh noi dung o giua
  },

  text: {
    fontSize: 14,
    fontFamily: fontFamilies.bold,
    color: colors.text,
  },
  inputContainer: {
    backgroundColor: colors.gray,
    borderRadius: 12,
    paddingHorizontal: Platform.OS === 'ios' ? 12 : 10,
    paddingVertical: Platform.OS === 'ios' ? 12 : 10,
  },
  section: {
    marginBottom: 16, // le duoi
  },
  tag: {
    paddingHorizontal: 20,
    paddingVertical: Platform.OS === 'ios' ? 6 : 4,
    borderRadius: 100,
    backgroundColor: colors.blue,
  },
});
