import React from 'react'
import Link from 'next/link'
import Button from '../buttons';
import './style.scss'

const BannerHome = () => (
    <header className="banner-home">
        <h1 className="banner-title">Todos os caminhos leval ao Sanarflix</h1>
        <p className="banner-text">
            Aprenda com professores referência na área da medicina.<br/>
            Acelere seu aprendizado tendo acesso a plataforma em qualquer lugar em diversos dispositivos.<br/>
            Aprenda o que é importante para a realização dos seus objetivos.
        </p>
        <Link href="/cadastro"><a><Button href="/cadastro" className="colored-button wide">Assine agora</Button></a></Link>
        <Link href="/sobre"><a><Button className="border-button small white">Conheça a sanar</Button></a></Link>
    </header>
)
export default BannerHome