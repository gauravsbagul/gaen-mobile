import React from "react"
import { useTranslation } from "react-i18next"
import { Linking, StyleSheet } from "react-native"

import { Button } from "../../components/Button"
import { AssessmentLayout } from "../AssessmentLayout"
import InfoText from "../InfoText"

import { Icons } from "../../assets"
import { Colors } from "../../styles"

/** @type {React.FunctionComponent<{}>} */
export const Emergency = () => {
  let { t } = useTranslation()

  const handleOnPress = () => Linking.openURL("tel:911")

  return (
    <AssessmentLayout
      backgroundColor={Colors.primaryBackgroundFaintShade}
      icon={Icons.SelfAssessment} // TODO: Placeholder, replace when we get icon
      scrollStyle={styles.containerItemsAlignment}
      footer={
        <Button
          onPress={handleOnPress}
          label={t("assessment.emergency_cta")}
          style={styles.button}
          textStyle={styles.buttonText}
          testID="assessment-button"
        />
      }
    >
      <InfoText
        title={t("assessment.emergency_title")}
        description={t("assessment.emergency_description")}
      />
    </AssessmentLayout>
  )
}

const styles = StyleSheet.create({
  containerItemsAlignment: {
    alignItems: "center",
  },
  button: {
    backgroundColor: Colors.secondaryRed,
  },
  buttonText: {
    color: Colors.white,
  },
})
