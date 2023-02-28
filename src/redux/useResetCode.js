import { useDispatch, useSelector  } from "react-redux"
import { resetCode } from "./codeSlice"

export default function useResetCode(){
  const dispatch = useDispatch() 
  
  const hasNavigatedAway = useSelector(
    (state) => state.navigation.hasNavigatedAway
  )
  
  if(hasNavigatedAway){
    dispatch(resetCode())
  }
}


