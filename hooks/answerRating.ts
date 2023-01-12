import { useState, useEffect } from 'react';
import axios from '../axios';
import { AnswerT } from '../types/answer';
import { useAppSelector } from './redux';
export const useAnswerRating = (answer:AnswerT) => {
    const userId = useAppSelector(state => state).userReducer.user?.id;
    const [rates,setRates] = useState<{up:boolean,down:boolean}>({up:false,down:false});
    const [ratesLoading,setRatesLoading] = useState(false);
    const [rating,setRating] = useState(answer.rating);

    useEffect(() => {
        setRatesLoading(true);
        if(userId){
            setRates({
                up:answer.ratedUpUsers.some(user => user.id === userId),
                down:answer.ratedDownUsers.some(user => user.id === userId),
            })
        }
        setRatesLoading(false);
    },[userId])

    const onUp = async () => {
        const dto = {
            userId,
            answerId:answer.id
        }
        setRatesLoading(true);
        if(rates.up){
            setRates(prev => ({...prev,up:false}));
            setRating(prev => --prev);
            try{
                
                const res = await axios.post('/answers/cancelRating',dto);
            }catch(err){
                console.log(err);
                setRates(prev => ({...prev,up:true}));
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
            const cancelRes = await axios.post('/answers/cancelRating',dto);
            const res = await axios.post('/answers/rateUp',dto);
        }catch(err){
            console.log(err);
            setRates({up:false,down:false})
            setRatesLoading(false);
        }
        setRatesLoading(false);
    }

    const onDown = async () => {
        const dto = {
            userId,
            answerId:answer.id
        }
        setRatesLoading(true);
        if(rates.down) {
            setRates(prev => ({...prev,down:false}));
            setRating(prev => ++prev);
            try{
                const res = await axios.post('/answers/cancelRating',dto);
            }catch(err){
                console.log(err);
                setRating(prev => --prev);
                setRates(prev => ({...prev,down:true}));
                setRatesLoading(true);
            }
            setRatesLoading(false);

            return;
        }

        if(rates.up){
            setRating(prev => prev - 2);
            setRates(prev => ({...prev,up:false}));
        }else{
            setRating(prev => --prev);
        }
        setRates(prev => ({...prev,down:true}));

        try{
            const cancelRes = await axios.post('/answers/cancelRating',dto);
            const res = await axios.post('/answers/rateDown',dto);
        }catch(err){
            console.log(err);
            setRatesLoading(false);
        }
        setRatesLoading(false);
    }

    return {rates,ratesLoading,rating,onDown,onUp};
}