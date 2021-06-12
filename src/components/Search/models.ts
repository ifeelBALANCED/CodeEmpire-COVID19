import {createEvent, restore} from "effector";
import {ChangeEvent} from "react";


export const inputChange = createEvent<ChangeEvent<HTMLInputElement>>()
export const inputChanged = inputChange.map(({target: {value}}) => value)
export const $textStore = restore(inputChanged, '')

