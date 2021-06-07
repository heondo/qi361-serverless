import React, {useState} from 'react'
import Swiper from 'react-native-swiper'

import {
  Text,
  EmptySpace,
  Row,
  View,
  ThemeContainer,
  ScreenContainer,
} from '@atoms'
import {colors} from '@constants'
import {TutorialButtonsRow} from '@molecules'
// import {FirstIntroScreen} from './FirstIntroScreen'

type Props = {
  handleClose: () => void
}

export const TutorialSwiper = ({handleClose}: Props) => {
  let swiperRef: Swiper | null
  const [currentIndex, setCurrentIndex] = useState(0)
  return (
    <ThemeContainer>
      <Swiper
        showsButtons={false}
        loop={false}
        ref={swiper => (swiperRef = swiper)}
        activeDotColor={colors.red['400']}
        containerStyle={{backgroundColor: colors.gray['700']}}
        dotColor="darkgray"
        showsPagination={true}
        onIndexChanged={index => setCurrentIndex(index)}
        index={currentIndex}>
        {/* <FirstIntroScreen /> */}
        <ScreenContainer>
          <Text>uno</Text>
        </ScreenContainer>
        <ScreenContainer>
          <Text>Screen numero dos</Text>
        </ScreenContainer>
      </Swiper>
      <TutorialButtonsRow
        index={currentIndex}
        maxIndex={1}
        handleNext={() => setCurrentIndex(currentIndex + 1)}
        handlePrev={() => setCurrentIndex(currentIndex - 1)}
        handleClose={handleClose}
      />
    </ThemeContainer>
  )
}
