import React, { useContext } from 'react'
import T from 'prop-types'
import { useTranslation } from 'react-i18next'
import { Text, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Header as NativeHeader } from 'react-native-elements'
import { AntDesign } from '@expo/vector-icons'
import { replaceParams } from 'utils/paths'
import usePlatformLocation from 'utils/hooks/usePlatformLocation'
import { RoutesContext } from 'store/routing/routes-provider'

const Left = ({ isHome, goBack }) =>
  isHome ? (
    <Text> </Text>
  ) : (
    <TouchableOpacity onPress={goBack}>
      <AntDesign name="arrowleft" color="white" size={28} />
    </TouchableOpacity>
  )

Left.propTypes = {
  isHome: T.bool,
  goBack: T.func
}

const Right = ({ toggleDrawer }) => (
  <TouchableOpacity onPress={toggleDrawer}>
    <AntDesign name="bars" color="white" size={28} />
  </TouchableOpacity>
)

Right.propTypes = {
  toggleDrawer: T.func
}

const Header = () => {
  const { t } = useTranslation()
  const navigation = useNavigation()
  const { currentRoute, params } = usePlatformLocation()
  const { defaultPath } = useContext(RoutesContext)
  const isHome = currentRoute.path === defaultPath
  const translatedName = t(currentRoute.name)
  const title = replaceParams(translatedName, params)
  return (
    <NativeHeader
      leftComponent={<Left isHome={isHome} goBack={navigation.goBack} />}
      centerComponent={{
        text: title,
        style: {
          color: '#fff',
          fontSize: 21
        }
      }}
      rightComponent={<Right toggleDrawer={navigation.toggleDrawer} />}
    />
  )
}

export default Header
