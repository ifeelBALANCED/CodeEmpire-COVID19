import {combine, createEffect, createStore, restore} from "effector";

export type Country = {
    ID: string,
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string,
    Premium: {}
}
type Store = {Countries: Country[]}
export const countriesFx = createEffect<void, Store>()

countriesFx.use(async () => {
    const url = `https://api.covid19api.com/summary`
    const req = await fetch(url)
    return req.json()
})
export const $store = createStore<Store>({
    Countries: []
})
    .on(countriesFx.doneData, (_, {Countries}) => ({Countries}))

export const $countriesError = restore<Error>(countriesFx.failData, null);

export const $countriesGetStatus = combine({
    loading: countriesFx.pending,
    error: $countriesError,
    countries: $store,
});

$store.watch(console.log)
