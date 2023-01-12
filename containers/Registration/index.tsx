import { notification } from 'antd';
import { NotificationPlacement } from 'antd/es/notification/interface';
import React from 'react'
import {RegistrationComponent} from '../../components/Registration'
import { useRegistration } from '../../hooks/registration'

export default function Registration() {
        
  const [api, contextHolder] = notification.useNotification();
  const placement: NotificationPlacement = 'topRight'

  const openNotification = () => {
    api.info({
      message: `This stage is not required`,
      description: 'You can fill in this form later',
      placement,
    });
  };

  const {onConfirmFirstStep,step,
        success,items,onConfirmSecondStep,err} = useRegistration(openNotification);

  return <RegistrationComponent notificationComponent={contextHolder} err={err} items={items}
          onConfirmFirstStep={onConfirmFirstStep} step={step} success={success} onConfirmSecondStep={onConfirmSecondStep}/>
      
}
