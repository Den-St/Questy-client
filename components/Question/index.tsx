import { Answers } from "../../containers/Question/Answers"
import { CreateAnswer } from "../../containers/Question/CreateAnswer"
import { QuestionT } from "../../types/question"
import { Body, BodyContainer, Container, Header, Rating, RatingButton, RatingControllerContainer, SubscribeButton, Title, TitleContainer } from "./styles"
import {CaretUpOutlined,CaretDownOutlined,BookOutlined} from '@ant-design/icons';
import { useAppSelector } from "../../hooks/redux";


type Props = {
    question:QuestionT;
    rates:{up:boolean,down:boolean},
    rating:number;
    onUp:() => void;
    onDown:() => void;
    ratesLoading:boolean;
    isSubscribed:boolean;
    onSubscribe:() => void;
    subscribeLoading:boolean
}

export const QuestionComponent:React.FC<Props> = ({isSubscribed,subscribeLoading,onSubscribe,question,rates,rating,onUp,onDown,ratesLoading}) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;

    return <Container>
        <TitleContainer><Title>{question.title}</Title></TitleContainer>
        <BodyContainer>
            <RatingControllerContainer>
                <RatingButton onClick={onUp} disabled={ratesLoading} $active={rates.up}><CaretUpOutlined /></RatingButton>
                <Rating>{rating}</Rating>
                <RatingButton onClick={onDown} disabled={ratesLoading} $active={rates.down}><CaretDownOutlined /></RatingButton>
                {userId && <SubscribeButton disabled={subscribeLoading} onClick={onSubscribe} $isSubscribed={isSubscribed}><BookOutlined /></SubscribeButton>}
            </RatingControllerContainer>
            <Body dangerouslySetInnerHTML={{__html:question.body}}/>
        </BodyContainer>
        <Header>{question.answersNumber} Answers</Header>
        <Answers/>
        <CreateAnswer/>
    </Container>
}