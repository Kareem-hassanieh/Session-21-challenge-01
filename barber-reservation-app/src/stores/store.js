import {create} from 'zustand';


const useStore=create((set)=>({
  reservedSlots:[],
  selectedSlot: null,

  reserveSlot:(slotId)=>set((state)=>({
    reservedSlots:[...state.reservedSlots,slotId]
  })),

  selectSlot:(slotId)=>set(()=>({
    selectedSlot:slotId,
  })),

  clearSelectedSlot:()=>set({
    selectedSlot:null
  })

}));

export default useStore;