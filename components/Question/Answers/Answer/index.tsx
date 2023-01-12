import { Avatar, BodyContainer, Container, CorrectButton, CreatorContainer, Days, Name, RatingContainer, User } from "./styles"
import {CaretUpOutlined,CaretDownOutlined,CheckOutlined} from '@ant-design/icons';
import { Body, Rating, RatingButton } from "../../styles";
import { AnswerT } from "../../../../types/answer";
import { useAppSelector } from "../../../../hooks/redux";

type Props = {
    rates:{up:boolean,down:boolean},
    rating:number,
    ratesLoading:boolean,
    onDown:() => void,
    onUp:() => void;
    answer:AnswerT;
    isCorrect:boolean;
    onCorrect:() => void;
    correctLoading:boolean
}

export const AnswerComponent:React.FC<Props> = ({correctLoading,onCorrect,isCorrect,rates,ratesLoading,rating,onDown,onUp,answer}) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;

    return <Container>
        
        <BodyContainer>
            <RatingContainer>
                <RatingButton onClick={onUp} disabled={ratesLoading} $active={rates.up}><CaretUpOutlined/></RatingButton>
                <Rating>{rating}</Rating>
                <RatingButton onClick={onDown} disabled={ratesLoading} $active={rates.down}><CaretDownOutlined/></RatingButton>
                {isCorrect && userId !== answer.creator.id && <CorrectButton $correct={isCorrect}><CheckOutlined /></CorrectButton>}
                {userId === answer.creator.id && <CorrectButton onClick={onCorrect} disabled={correctLoading} $correct={isCorrect}><CheckOutlined /></CorrectButton>}
            </RatingContainer>
            <Body dangerouslySetInnerHTML={{__html:answer.text}}/>
        </BodyContainer>
        <CreatorContainer href={`/users/${answer.creator?.id}?dir=profile`}>
            <Days></Days>
            <User>
                <Avatar src={answer.creator.avatar?.path}/>
                <Name>{answer.creator.name}</Name>
            </User>
        </CreatorContainer>
        </Container>
}