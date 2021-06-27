import React, { useState, useEffect } from 'react'
import LunarPhaseHeader from '../../components/LunarPhaseHeader'
import Breadcrumb from '../../components/Breadcrumb'

import ScStepRow from './components/ScStepRow'
import ScContent1 from './components/ScContent1'
import BgMountain from './components/BgMountain'
import ScBtn from './components/ScBtn'
import ScLabel from './components/ScLabel'

//網址 /cart/item/step1
function CartItemStep1() {

  // const [prevUrl, setPrevUrl] = useState("#")
  // const [nextUrl, setNextUrl] = useState("#")

  return (
    <>
      <LunarPhaseHeader />
      <Breadcrumb />

      <BgMountain />
      <div className="container-fluid">
        <ScStepRow 
          step={1}
        />
        {/*-------------- 第一頁 --------------*/}
        <ScLabel />
        <div className="col-10 mx-auto px-0 shadow-sm ">
          <ScContent1 />
        </div>
        <ScBtn 
          prevUrl={"/cart/item/step1"}
          nextUrl={"/cart/item/step2"}
        />
      </div>
    </>
  )
}

export default CartItemStep1
