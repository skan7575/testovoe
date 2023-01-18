import React, {useEffect, useState} from 'react';
import style from './Main.module.scss'
import data from '../../utils/data.json'
import Product from "../../components/Product";

function Main(props) {
    console.log(data)
    return (
        <main className={style.main}>
            <h1 className={style.main__title}>Ты сегодня покормил кота?</h1>
            <div className={style.main__products}>
                    {data.map(item => {
                        return <Product
                            title={item.title}
                            lost={item.lost}
                            value={item.value}
                            weight={item.weight}
                            subTitle={item.subTitle}
                            aboutTop={item.aboutTop}
                            id={item.id}
                            aboutBottom={item.aboutBottom}
                            present={item.present}
                            text={item.text}
                        />
                    })}

            </div>
        </main>
    );
}

export default Main;