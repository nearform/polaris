import React from 'react'
import * as AuthSession from 'expo-auth-session'
import * as WebBrowser from 'expo-web-browser'
import jwtDecode from 'jwt-decode'
import { Alert, Platform, Text } from 'react-native'
import styled from 'styled-components/native'
import { useTranslation } from 'react-i18next'
import Container from 'components/atoms/container'
import Button from 'components/atoms/button'

WebBrowser.maybeCompleteAuthSession()

const Avatar = styled.Image`
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
`

const useProxy = Platform.select({ web: false, default: true })
const redirectUri = AuthSession.makeRedirectUri({ useProxy })

export const Auth = () => {
  const [data, setData] = React.useState(null)
  const { t } = useTranslation()

  const [request, result, promptAsync] = AuthSession.useAuthRequest(
    {
      redirectUri,
      clientId: process.env.AUTH0_CLIENT_ID,
      // id_token will return a JWT token
      responseType: 'id_token',
      // retrieve the user's profile
      scopes: ['openid', 'profile'],
      extraParams: {
        // ideally, this will be a random value
        nonce: 'nonce'
      }
    },
    { authorizationEndpoint: `https://${process.env.AUTH0_DOMAIN}/authorize` }
  )

  React.useEffect(() => {
    if (result) {
      if (result.error) {
        Alert.alert(
          t('authView:errorTitle'),
          result.params.error_description || t('authView:defaultErrorMessage')
        )
        return
      }
      if (result.type === 'success') {
        const jwtToken = result.params.id_token
        const decoded = jwtDecode(jwtToken)
        setData(decoded)
      }
    }
  }, [result])

  return (
    <Container>
      {data ? (
        <>
          {data.picture && <Avatar source={{ uri: data.picture }} />}
          <Text>
            {t('authView:welcomeText')}, {data.name}!
          </Text>
        </>
      ) : (
        <Button
          disabled={!request}
          title={t('authView:loginButton')}
          onPress={() => promptAsync({ useProxy, redirectUri })}
        />
      )}
    </Container>
  )
}
