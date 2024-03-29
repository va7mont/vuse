import React from 'react'
import { Trans, useTranslation } from 'react-i18next'

import DeviceBanner from 'src/containers/DeviceBanner.jsx'
import FAQ from 'src/containers/FAQ.jsx'
import DeviceCard from 'src/components/modules/deviceCard'
import GradientText from 'src/components/common/gradientText'
import AnimatedBanner from 'src/components/modules/banner700'
import GradientHeader from 'src/components/common/gradientHeader'

import device5 from 'src/assets/images/devices/700/device-taste-5.png'
import device6 from 'src/assets/images/devices/700/device-taste-6.png'
import taste5 from 'src/assets/images/tastes/taste-5.png'
import taste6 from 'src/assets/images/tastes/taste-6.png'
import icon from 'src/assets/images/icons/device700.svg'
import banner from 'src/assets/images/devices/700/device-banner.png'

const Device700 = () => {

  const {t} = useTranslation()

  return (
    <main className={'flex flex-col items-center overflow-x-hidden'}>
      <section className={'lg:h-screen'}>
        <DeviceBanner
          className={'container mx-auto'}
          name={t(`devices.device-4.name`)}
          text1={<Trans i18nKey="devices.device-4.text1" components={{br: <br/>}}/>}
          text2={<Trans i18nKey="devices.device-4.text2" components={{br: <br/>}}/>}
          tastes={2}
          icon={icon}
        >
          <AnimatedBanner/>
        </DeviceBanner>
      </section>

      <section className={'w-full'}>
        <GradientText
          topText={<Trans i18nKey={`devices.device-4.topText`} components={{br: <br/>}}/>}
          bottomText={<Trans i18nKey={`devices.device-4.bottomText`} components={{br: <br/>}}/>}
          topGradient={'from-[#FFA471] to-[#000000]'}
          bottomGradient={'from-[#2B9CAB] to-[#000000]'}
          image={banner}/>
      </section>

      <section className={'w-full p-10 py-20 border-b'}>
        <div className={'container mx-auto'}>
          <GradientHeader className={'text-xl lg:text-6xl py-2'}>
            {t(`devices.tastesTitle`)}
          </GradientHeader>

          <div className={'grid grid-cols-1 lg:grid-cols-4 gap-10 pt-10'}>
            <DeviceCard image={device5} bg={taste5} specs={[3, 1]} taste={'taste-5'}/>
            <DeviceCard image={device6} bg={taste6} specs={[3, 1]} taste={'taste-6'}/>
          </div>
        </div>
      </section>

      <section className={'px-3 lg:px-10 py-10 lg:py-60'}>
        <FAQ className={'container mx-auto'}/>
      </section>
    </main>
  )
}

export default Device700
