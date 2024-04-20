// Admins.js

import { useEffect, useState } from 'react';
import './Admin.css';
import useRepositoriesModel from '../../../main/models/AdminModel';

export default function Admins() {
    const {
        getAdmins,
        onChangeValue,
        Admins,
        Admin,
    } = useRepositoriesModel();

    useEffect(() => {
        getAdmins();
    }, []);

    const GoToLink = (link: string) => {
        window.location.href = link
    }


    return (
        <>
        </>
    );
}
