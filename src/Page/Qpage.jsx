import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../component/Background';
import DatePicker from 'react-datepicker';
import { createPopper } from '@popperjs/core';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import kuma_logo from '../img/kuma-logo.png';

const Daddy_name = ["brandon", "chunk", "cooper"]
const Mommy_name = ["amy", "amiee"]

const Qpage = (props) => {
    let history = useHistory();
    const birthday = new Date('2021-11-12');
    const { verify } = props;
    // const [isAutheticated, setisAutheticated] = useState(false);
    const [failureNotification] = useState(true);
    const [failureNotification_msg, setfailureNotification_msg] = useState("Intimacy Questions");
    const [dad_name, enter_dad_name] = useState('');
    const [mum_name, enter_mum_name] = useState('');
    const [date, setDate] = useState("");
    const daddy_name_match = () =>{
        return Daddy_name.includes(dad_name.toLowerCase())
    }
    const mommy_name_match = () =>{
        return Mommy_name.includes(mum_name.toLowerCase())
    }

    const color = 'black';
    //   const isAuthenticated = localStorage.getItem("isAuthenticated");
    const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false);
    const btnDropdownRef = useRef();
    const popoverDropdownRef = useRef();
    const openDropdownPopover = () => {
        createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
            placement: 'top-end',
        });
        setDropdownPopoverShow(true);
    };
    const closeDropdownPopover = () => {
        setDropdownPopoverShow(false);
    };
    // bg colors
    let bgColor;
    color === 'white' ? (bgColor = 'bg-blueGray-700') : (bgColor = 'bg-' + color + '-500');
    const getDate = date.toString().substring(0, 11)
    const getBirthday =birthday.toString().substring(0, 11)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!daddy_name_match()) {
                console.log('dad name wrong')
                setfailureNotification_msg("hmm... Daddy's name?");
            } else if (!mommy_name_match()){
                console.log('mum name corret')
                setfailureNotification_msg("hmm... Mommy's name?");
            } else if (getDate !== getBirthday) {
                console.log('birthday correct')
                setfailureNotification_msg('Ahm... guess ?');
            } else {
                verify(true);
                history.push('/welcome');
            }
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <>
            <Layout />
            <div className="w-screen h-screen flex  justify-center ">
           
                <div className="h-full relative w-72 sm:w-80 md:w-96 flex  justify-center justify-items-center  items-center">
                    <button
                        className={(dropdownPopoverShow ? 'hidden ':"")+ 'absolute p-2.5 w-full h-20 text-black font-bold uppercase text-sm rounded-2xl shadow hover:shadow-2xl outline-none focus:outline-none ease-linear transition-all duration-150 ' + bgColor}
                        type="button"
                        ref={btnDropdownRef}
                        onClick={() => {
                            dropdownPopoverShow ? closeDropdownPopover() : openDropdownPopover();
                        }}
                    >
                        {/* <img className="w-60" src={kuma_logo} alt="kuma-logo"></img>
                         */}
                       <FontAwesomeIcon icon={faPaw} className='h-full' />  
                    </button>
                        <form 
                         ref={popoverDropdownRef}
                        className={(dropdownPopoverShow ? 'block ' : 'hidden ') +"Q-form w-full absolute"} onSubmit={handleSubmit}>
                        <div className="text-center text-2xl my-2">{failureNotification_msg}</div>
                            <div className="w-full my-1">What's my daddy's name ?</div>
                            <input
                                className="w-full my-1 rounded-lg"
                                type="text"
                                name="dad_name"
                                id="dad_name"
                                value={daddy_name_match()? dad_name + ' is ' + 'Correct!' : dad_name}
                                onChange={(e) => enter_dad_name(e.target.value)}
                            />
                            <div className="w-full my-1">What's my mommy's name ?</div>
                            <input
                                className="w-full my-1 rounded-lg"
                                type="text"
                                name="mum_name"
                                id="mum_name"
                                value={mommy_name_match()? mum_name + ' is ' + 'Correct!' : mum_name}
                                onChange={(e) => enter_mum_name(e.target.value)}
                            />
                            <div className="w-full my-1">What's my birthday ?</div>
                            <DatePicker className="w-full my-1 rounded-lg" 
                            dateFormat="dd/MM/yyyy"
                            selected={date} onChange={(date) => setDate(date)} 
                            />
                            <div className="w-full flex justify-center my-8">
                                <button className="enter-button place-items-center text-center w-full p-2 pl-5 pr-5 transition-colors duration-700 transform font-bold text-gray-100 text-lg rounded-lg">
                                    enter
                                </button>
                            </div>
                        </form>
                    </div>
            </div>
        </>
    );
};

export default Qpage;
