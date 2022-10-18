import React from "react";
import vector from "../assets/images/Vector.png";
import vector1 from "../assets/images/Vector-1.png";
import vector2 from "../assets/images/Vector-2.png";
import vector3 from "../assets/images/Vector-3.png";
import vector4 from "../assets/images/Vector-4.png";
import vector5 from "../assets/images/Vector-5.png";
import vector6 from "../assets/images/Vector-6.png";
import vector7 from "../assets/images/Vector-7.png";
import ginger from '../assets/images/ginger.png';
import nootris from '../assets/images/nootris.png';
import Lemon from '../assets/images/Lemon.png'

export default function Dashboard() {
  return (
    <div className="dashboard">
      <div className="dashboard__vectors">
        <div className="v">
          <img src={vector} alt="" />
        </div>
        <div className="vector v-1">
          <img src={vector1} alt="" />
        </div>
        <div className="vector v-2">
          <img src={vector2} alt="" />
        </div>
        <div className="vector v-3">
          <img src={vector3} alt="" />
        </div>
        <div className="vector v-4">
          <img src={vector4} alt="" />
        </div>
        <div className="vector v-5">
          <img src={vector5} alt="" />
        </div>
        <div className="vector v-6">
          <img src={vector6} alt="" />
        </div>
        <div className="vector v-7">
          <img src={vector7} alt="" />
        </div>
      </div>
      <div className='dashboard__content'>
        <div className="dashboard__content--info">
            <p>АКТИВИРУЙ ИММУНИТЕТ!</p>
            <p>Всего пять секунд в день помогут укрепить иммунитет и повысить защитные силы организма</p>
            <p>NOOTRIS ПОМОГАЕТ</p>
            <p>Вашему организму во время пандемии и сезонных простуд</p>
        </div>
        <div className="dashboard__content--view">
            <img src={ginger} alt="" />
            <img src={nootris} alt=''/>
            <img src={Lemon} alt="" />
        </div>
      </div>
    </div>
  );
}
