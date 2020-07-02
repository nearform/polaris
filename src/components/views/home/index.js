import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { useTranslation } from "react-i18next";
import usePlatformNavigation from 'hooks/usePlatformNavigation';

import LinkButton from 'components/atoms/link-button'

export const HomeScreen = ({ navigation }) => {
	const { navigate } = usePlatformNavigation()
  const { t } = useTranslation()
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
			<Text>Home Screen</Text>
			<LinkButton title={t("home:viewOneButton")} path="/viewOne" />
			<LinkButton title={t("home:viewTwoButton")} path="/viewTwo" />
			<LinkButton title={t("home:viewThreeButton")} path="/viewThree" />
			<LinkButton title="Go to List View" path="/listView" />
		</View>
	)
}
