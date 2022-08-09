import { configureStore } from "@reduxjs/toolkit";
import recipereducer from './Actioncreator'

export const store=configureStore({
    reducer:{
        datatodo:recipereducer
    }
})