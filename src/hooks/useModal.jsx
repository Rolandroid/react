import {useContext} from 'react'
import {ModalContext} from "../contexts/ModalProvider"


export default function useModal (){
  return useContext(ModalContext)
}
 