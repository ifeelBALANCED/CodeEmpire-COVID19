import React, {FC} from 'react';
import {Tbody} from "@chakra-ui/react";
import {useStore} from "effector-react";
import {$countriesGetStatus} from "../CovidTable/models";
import {$textStore} from "../Search/models";
import {useDebounce} from "../../hooks/useDebounce";
import {ToastCountry} from "../ToastCountry";
import {Empty} from '../Empty';

export const TableRows: FC = (): JSX.Element => {
    const text = useStore($textStore)
    const {countries: {Countries}} = useStore($countriesGetStatus)
    const debouncedSearchTerm: string = useDebounce<string>(text, 500);
    const searchCountries = (name: string) => {
        const lowerName = name.toLowerCase()
        const names = Array.from(Countries)
        return !name.trim()
            ? names
            : names.filter(({Slug}) => Slug.toLowerCase().indexOf(lowerName) !== -1)
    }
    const filteredCounties = searchCountries(debouncedSearchTerm)
    return (
        <Tbody>
            {filteredCounties.length > 0
                ? filteredCounties.map((country, index) => (
                    <ToastCountry
                        key={index}
                        {...country}
                        index={index}
                    />
                )) : <Empty/>}
        </Tbody>
    )

};

