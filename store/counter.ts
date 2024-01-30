import { create } from "zustand";
import { persist } from "zustand/middleware";



interface CounterState {
  value : number
  add : () => void
  reset : () => void
  multiply : ( value : number) => void

}

export const useCountStore = create<CounterState>()(
  persist(

    (set) => ({
      
      value : 0,
      add : () =>{
        set((state)=>({value:state.value+1}))
        
      },
      reset: () =>{
        set((state)=>({value:0}))
      },
      multiply: ( value : number) =>{
        set((state)=>({value:state.value * value}))
      }
    }),
    {
      name: "counter",
    }
  )
);

