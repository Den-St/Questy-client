import { useAppSelector } from './redux';
import { QuestionT } from "../types/question";
import { useState, useEffect } from 'react';
import axios from '../axios';
import { UserT } from '../types/user';

export const useQuestionRating = (question:QuestionT) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;
    const [rates,setRates] = useState<{up:boolean,down:boolean}>({up:false,down:false});
    const [ratesLoading,setRatesLoading] = useState(false);
    const [rating,setRating] = useState(question.rating);

    useEffect(() => {
        setRatesLoading(true);
        if(userId) {
            setRates({
                up:question.ratedUpUsers.some(user => user.id === userId),
                down:question.ratedDownUsers.some(user => user.id === userId),
            })
        };
        setRatesLoading(false);
    },[userId]);


    const onUp = async () => {
        setRatesLoading(true);
        if(rates.up){
            setRates(prev => ({...prev,up:false}));
            setRating(prev => --prev);
            try{
                const dto = {
                    userId,
                    questionId:question.id
                }
                const res = await axios.post('/questions/cancelRating',dto);
            }catch(err){
                setRates(prev => ({...prev,up:true}))
                setRating(prev => ++prev);
                setRatesLoading(false);
            }
            setRatesLoading(false);
            return;
        }

        if(rates.down){
            setRating(prev => prev + 2);
            setRates(prev => ({...prev,down:false}));
        }else{
            setRating(prev => ++prev);
        }
        setRates(prev => ({...prev,up:true}));
        try{
            const dto = {
                userId,
                questionId:question.id
            }

            const cancelRes = await axios.post('/questions/cancelRating',dto);
            const upRes = await axios.post('/questions/rateUp',dto);
        }catch(err){
            setRates(prev => ({...prev,up:false}));
            setRates(prev => ({...prev,down:false}));
            setRating(prev => --prev);
            setRatesLoading(false);
        }
        setRatesLoading(false);
    }

    const onDown = async () => {
        setRatesLoading(true);
        if(rates.down){
            setRating(prev => ++prev);
            setRates(prev => ({...prev,down:false}));
            try{
                const dto = {
                    userId,
                    questionId:question.id
                }
                const res = await axios.post('/questions/cancelRating',dto);
            }catch(err){
                setRating(prev => --prev);
                setRates(prev => ({...prev,down:true}));
                console.log(err);
                setRatesLoading(false);
            }
            setRatesLoading(false);
            return;
        }
        
        if(rates.up){
            setRating(prev => prev - 2);
        }else{
            setRating(prev => --prev);
        }
        setRates(prev => ({...prev,down:true}));
        setRates(prev => ({...prev,up:false}));
        try{
            const dto = {
                userId,
                questionId:question.id
            }

            const cancelRes = await axios.post('/questions/cancelRating',dto);
            const downRes = await axios.post('/questions/rateDown',dto);
        }catch(err){
            setRating(prev => prev + 2);
            setRates(prev => ({...prev,down:false}));
            setRates(prev => ({...prev,up:false}));
            console.log(err);
            setRatesLoading(false);
        }
        setRatesLoading(false);
    }

    return {rating,rates,onUp,onDown,ratesLoading}
}