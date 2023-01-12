import { Steps,StepProps } from 'antd';
import { SvgIcon } from '../../../assets/svg/SvgIcon';
import { icon } from '../../../assets/svg/types';
import { Container } from './styles';

type Props = {
  items:Record<number,StepProps>
}

export const ProgressBarComponent:React.FC<Props> = ({items}) => {
    return <Container>
      <Steps
        items={Object.keys(items).map(item => ({...items[Number(item)],icon:<SvgIcon type={items[Number(item)].icon?.toString() as icon}/>}))}
      />
    </Container>
}