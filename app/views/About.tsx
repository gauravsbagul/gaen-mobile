import React, { FunctionComponent } from "react"
import { useTranslation } from "react-i18next"
import { useNavigation } from "@react-navigation/native"
import {
  Linking,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native"

import { useStrategyContent } from "../TracingStrategyContext"
import packageJson from "../../package.json"
import { NavigationBarWrapper } from "../components/NavigationBarWrapper"
import { Typography } from "../components/Typography"

import { Colors, Spacing, Typography as TypographyStyles } from "../styles"

export const AboutScreen: FunctionComponent = () => {
  const navigation = useNavigation()
  const { t } = useTranslation()
  const { StrategyCopy } = useStrategyContent()

  const backToMain = () => {
    navigation.goBack()
  }

  return (
    <NavigationBarWrapper
      title={t("screen_titles.about")}
      onBackPress={backToMain}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        alwaysBounceVertical={false}
      >
        <View>
          <Typography use="headline2" style={styles.heading}>
            {StrategyCopy.aboutHeader}
          </Typography>
        </View>
        <Typography use="body2">{t("label.about_para")}</Typography>
        <Typography
          style={styles.hyperlink}
          onPress={() => {
            Linking.openURL("https://pathcheck.org/")
          }}
        >
          <Text>{"pathcheck.org"}</Text>
        </Typography>

        <View style={styles.rowContainer}>
          <View style={styles.row}>
            <Typography style={styles.aboutSectionParaLabel}>
              {t("about.version")}
            </Typography>

            <Typography style={styles.aboutSectionParaContent}>
              {packageJson.version}
            </Typography>
          </View>
          <View style={styles.row}>
            <Typography style={styles.aboutSectionParaLabel}>
              {t("about.operating_system_abbr")}
            </Typography>
            <Typography style={styles.aboutSectionParaContent}>
              {Platform.OS + " v" + Platform.Version}
            </Typography>
          </View>
        </View>
      </ScrollView>
    </NavigationBarWrapper>
  )
}

const styles = StyleSheet.create({
  contentContainer: {
    backgroundColor: Colors.primaryBackground,
    paddingHorizontal: Spacing.medium,
    paddingTop: Spacing.huge,
  },
  heading: {
    marginBottom: Spacing.small,
  },
  hyperlink: {
    color: Colors.linkText,
    textDecorationLine: "underline",
  },
  aboutSectionParaLabel: {
    ...TypographyStyles.header5,
    width: Spacing.xxxHuge * 2,
    marginTop: Spacing.small,
  },
  aboutSectionParaContent: {
    ...TypographyStyles.mainContent,
    marginTop: Spacing.small,
  },
  rowContainer: {
    marginTop: Spacing.medium,
  },
  row: {
    flexDirection: "row",
  },
})

export default AboutScreen
