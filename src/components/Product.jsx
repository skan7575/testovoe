import React from 'react';
import style from "../Pages/Main/Main.module.scss";
import cat from "../images/cat.png";
import {useState} from "react";

function Product({id, aboutTop, title, subTitle, aboutBottom, weight, value, lost, present, text}) {
    const [isClick, setIsClick] = useState(false)
    const [isClickButton, setIsClickButton] = useState(false)
    const [isMouseOut, setIsMouseOut] = useState(false)
    const onClickCard = (e) => {
        setIsClick(!isClick)
    }
    const onClickBuyButton = (e) => {
        setIsClickButton(!isClickButton)
    }

    return (
        <div key={id}>
            <article onMouseLeave={() => {
                if (isClick) {
                    setIsMouseOut(!isMouseOut)
                }
            }} onClick={onClickCard}
                     className={isClick ? `${style.productActive} ${style.product}` : style.product && isClickButton ? `${style.productActiveToButton} ${style.product}` : style.product}>
                <div className={style.product__container}>
                    <p className={isMouseOut ? `${style.product__about} ${style.product__about_active}` : style.product__about}>{isMouseOut ? 'Котэ не одобряет?' : aboutTop}</p>
                    <h2 className={style.product__title}>{title}</h2>
                    <span className={style.product__title_span}>{subTitle}</span>
                    <p className={style.product__value}>{present}</p>
                    <p className={style.product__aboutBottom}>{aboutBottom}</p>
                </div>
                <img className={style.product__cat} src={cat} alt="кошечка:)"/>
                <div className={isClick ? `${style.product__circle} ${style.product__circle_active}` : style.product__circle && isClickButton ? `${style.product__circle} ${style.product__circle_lose}` : style.product__circle}>
                    <span className={style.product__circleText}>{weight}</span>
                    <span className={style.product__circleSpan}>{value}</span>
                </div>
            </article>
            <div className={style.product__buy}>
                {isClick ? (<p className={style.product__buyText}> {text} </p>)
                    : (<><p className={style.product__buyText}>Чего сидишь? Порадуй котэ,</p>
                        <button onClick={onClickBuyButton} className={style.product__buyButton} type='button'>купи.
                        </button>
                    </>)
                    && isClickButton ? (
                            <p className={`${style.product__buyText} ${style.product__buyText_lost}`}> {lost} </p>)
                        : (<><p className={style.product__buyText}>Чего сидишь? Порадуй котэ,</p>
                            <button onClick={onClickBuyButton} className={style.product__buyButton}
                                    type='button'>купи.
                            </button>
                        </>)}

            </div>
        </div>

    );
}

export default Product;