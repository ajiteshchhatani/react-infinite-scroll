import React, { useState } from 'react';

export function useAuth() {
    const [authed, setAuthed] = useState(false);
    function login() {
        return new Promise((res) => {
            setAuthed(true);
            res();
        })
    }
    function logout() {
        return new Promise((res) => {
            setAuthed(false);
            res();
        })
    }
    return {
        authed,
        login,
        logout
    }
}