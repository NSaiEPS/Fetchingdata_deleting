// import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk,createSlice } from "@reduxjs/toolkit";


// const API_KEY = `45b0ea5f3e6b36176d9842bf10d513fe`;
//    const API_ID =`37c4cfeb`;

//    export const getdata=createAsyncThunk('recipe/getrecipoe', async(data)=>{
//     return fetch(`https://api.edamam.com/search?q=${data}&app_id=${API_ID}&app_key=${API_KEY}`).then((res)=>
//     res.json()
//     )
//    } )

   

export const getdata=createAsyncThunk('recipe/getrecipoe', async()=>{
    return fetch(`https://reqres.in/api/users?page=1`).then((res)=>
    res.json()
    )
   } )

   console.log(getdata)


//    export const RecipeThunkSlce= createSlice({
//     name:'recipe',
//     initialState:{
//         recipeP:[],
//         status:null,
//     },

//     reducers:{
//         eraceRecipe:(state)=>{
//             state.recipeP=null;
//         },
//     },

//     extraReducers:{
//      [getdata.pending]:(state)=>{
//         state.status='loading'
//      },

//      [getdata.fulfilled]:(state,action)=>{
//         state.status='success'
//         state.recipeP=action.payload
//      },

//      [getdata.rejected]:(state)=>{
//         state.status='failed'
//      }
  

//     }



//    })


// export const { eraceRecipe } = RecipeThunkSlce.actions;


// export const selectThunkRcipe = (state) => state.reciepe.recipeP;
// export const selectSTatus = (state) => state.statuss.status;
// export const  fdf=(RecipeThunkSlce.reducer)







export const dataSlice=createSlice({
    name:'dataslice',
    initialState:{
        
        data:[],
        id:'',  
        
        status:null,
    },

    reducers:{
        deleteid:(state,action)=>{
          
            state.id=action.payload;
            // let dat=[...state.data]
            console.log(state.data)

            let newdata=state.data.filter((item)=>{
              return  item.id!==action.payload}
            // console.log(item)}
            )
            state.data=newdata
    //    state.data=newdata
    console.log(newdata)
    // console.log(dat)



        }
    },
    extraReducers:{
        [getdata.pending]:(state)=>{
           state.status='loading'
        },
   
        [getdata.fulfilled]:(state,action)=>{
           state.status='success'
           state.data=action.payload.data
        },
   
        [getdata.rejected]:(state)=>{
           state.status='failed'
        }
     
   
       }
})


export const {deleteid}=dataSlice.actions

export const SelectData=(state)=>state.datatodo.data
export const SelectId=(state)=>state.datatodo.id
// export const select= (state) => state.datatodo.data;
export const selectSTatus = (state) => state.datatodo.status;
// export const  thunkreducer=(dataSlice.reducer)

export default dataSlice.reducer
