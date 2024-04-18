import { atom, selector } from "recoil";

// atom defination 

export const networkAtom = atom({
  key : 'networkAtom' , 
  default : 104 
})
export const jobAtom = atom({
  key : 'jobAtom' , 
  default : 0
})
export const messageAtom = atom({
  key : 'messageAtom' , 
  default : 0 
})
export const notificationAtom = atom({
  key : 'notificationAtom' , 
  default : 12
})

// selectors 

export const totalNotificationSelector = selector({
  key : 'totalNotificationSelector' ,
  get : ({get})=>{
      const networkAtomCount = get(networkAtom) ; 
      const jobAtomCount = get(jobAtom) ; 
      const messageAtomCount = get(messageAtom) ; 
      const notificationAtomCount = get(notificationAtom) ; 

      return networkAtomCount + jobAtomCount + messageAtomCount + notificationAtomCount ;  
  }
})
