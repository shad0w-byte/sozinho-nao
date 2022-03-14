/* eslint-disable @next/next/no-page-custom-font */
import React from 'react'
import Script from 'next/script'
import NextHead from 'next/head'

export default function head({title}) {
    return (
        <>
            <NextHead>
                <>
                    <meta name="keywords" content="victor kiss, ssik824, sk824, victor kisses, apoio emocional, apoio, ansiedade, depressão, tristeza, sozinho não, solidão, cvv"/>

                    <meta name="author" content="victor kiss (ssik824)"/>

                    <meta name="description" content="Você está se sentindo sozinho, triste ou passando por um momento difícil? Clique aqui! Você não vai se arrepender"/>

                    <meta charSet="UTF-8"/>

                    <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8"/>

                
                    
                    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                    
                    <meta httpEquiv="Content-Language" content="pt-br"/>

                    <meta name="robots" content="index, follow"/>
                    
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.1/font/bootstrap-icons.css"/>

                    <link rel="preconnect" href="https://fonts.googleapis.com"/>

                    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
    
                    <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@300;600&display=swap" rel="stylesheet"/>
                    <title>{title}</title> 
                    </>
            </NextHead>
        </>
    )
}
