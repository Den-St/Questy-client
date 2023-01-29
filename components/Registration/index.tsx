import { StepProps } from 'antd'
import Cookies from 'js-cookie'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { FirstStep } from '../../containers/FirstStep'
import { SecondStep } from '../../containers/SecondStep'
import { FirstStepRegistrationT, SecondStepT } from '../../types/registration'
import { ProgressBarComponent } from '../ui-kit/ProgressBar'
import { Banner, Container, SignContainer, Wrapper } from './styles'

type Props = {
  onConfirmFirstStep:(dto:FirstStepRegistrationT) => Promise<void>,
  step:number,
  success:boolean,
  items:Record<number,StepProps>,
  onConfirmSecondStep:(dto:SecondStepT) => void,
  err:any,
  notificationComponent:React.ReactElement<any, string | React.JSXElementConstructor<any>>
}

export const RegistrationComponent:React.FC<Props> = ({items,onConfirmFirstStep,step,
                                                      onConfirmSecondStep,err,success,
                                                      notificationComponent}) => {

  
  const token = Cookies.get('token');
  const router = useRouter();

  useEffect(() => {
    if(token) setTimeout(() => {router.push('/')},50);
  },[]);

  return <Container>
    {notificationComponent}
    <Banner>
      Questy!?
    </Banner>
    <SignContainer>
      <Wrapper>
          <ProgressBarComponent items={items}/>
          {step === 1 && <FirstStep err={err} onConfirm={onConfirmFirstStep}/>}
          {step === 2 && <SecondStep onConfirm={onConfirmSecondStep} success={success}/>}
      </Wrapper>
    </SignContainer>
  </Container>
}
