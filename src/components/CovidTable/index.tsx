import React, {FC, useEffect} from 'react';
import {
    Table,
    Thead,
    Tr,
    Th,
} from "@chakra-ui/react"
import '../../index.css'
import {$countriesGetStatus, countriesFx} from "./models";
import {useStore} from "effector-react";
import {Loader} from "../Loader";
import {TableRows} from "../TableRows";

export const CovidTable: FC = () => {
    const {loading} = useStore($countriesGetStatus)
    useEffect(() => {
        countriesFx()
    }, []);

    if (loading) {
        return <Loader size="lg"/>
    }

    return (
        <Table
            size="lg"
            isTruncated={true}
            borderRadius="lg"
        >
            <Thead>
                <Tr>
                    <Th>№</Th>
                    <Th>Country</Th>
                    <Th>Total Confirmed</Th>
                </Tr>
            </Thead>
            <TableRows/>
        </Table>
    );
};

