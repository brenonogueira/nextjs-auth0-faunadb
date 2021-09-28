// import { response } from 'express';
import React, { useEffect, useState } from 'react'
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import axios from 'axios'

export default function onibus() {
const [userBusao, setUserBusao] = useState(null)

    useEffect(() => {
        (
            async () => {
                const response = await axios.get('/api/saldo-busao')
                setUserBusao(response.data.data)
            }    
        )()
        
    }, [])

    useEffect(() => {
        console.log(userBusao)
    }, [userBusao])

    return (
        <>
        {userBusao?.saldo == null ?
            <div>  carregando </div>
       : <div> O saldo atual é: {userBusao?.saldo} reais</div>}
    </>
    )
}
