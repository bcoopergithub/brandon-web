import React, { useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';

import Layout from '../component/Background';
import DatePicker,{registerLocale, getDefaultLocale } from 'react-datepicker';
import { createPopper } from '@popperjs/core';
import 'react-datepicker/dist/react-datepicker.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaw } from '@fortawesome/free-solid-svg-icons'
import kuma_logo from '../img/kuma-logo.png';

const Qpage = (props) => {
    let history = useHistory();
getDefaultLocale
    const daddy_name = 'brandon';
    const mommy_name1 = 'amy';
    const mommy_name2 = 'amiee';
    const birthday = new Date('2021-11-12');
    const { verify } = props;
    const [isAutheticated, setisAutheticated] = useState(false);
    const [date, setDate] = useState("");


    const [failureNotification, setfailureNotification] = useState(true);
    const [failureNotification_msg, setfailureNotification_msg] = useState("Intimacy Questions");

    const [dad_name, enter_dad_name] = useState('');
    const [mum_name, enter_mum_name] = useState('');
    console.log(dad_name);
    console.log(mum_name);
   
      console.log(date)
      console.log(birthday)
      console.log(date.toString().substring(0, 15));
    console.log(birthday.toString().substring(0, 15));

    
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
            // const response = await axios.post(serverURL + '/login',user,{withCredentials:true});
            localStorage.clear();
            console.log(dad_name.toLowerCase());
            console.log(daddy_name);
            if (dad_name.toLowerCase() !== daddy_name) {
                setfailureNotification(true);
                setfailureNotification_msg("hmm... Daddy's name?");

                // console.log('now push to private page')
            } else if (mum_name.toLowerCase() !== mommy_name1 && mum_name.toLowerCase() !== mommy_name2) {
                setfailureNotification(true);
                setfailureNotification_msg("hmm... Mommy's name?");
            } else if (getDate !== getBirthday) {
                setfailureNotification(true);
                setfailureNotification_msg('Ahm... guess ?');
            } else {
                // setisAutheticated(true);
                verify(true);

                // console.log('user logged in :', isAutheticated)

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
                            {failureNotification ? <div className="text-center text-2xl my-2">{failureNotification_msg}</div> : null}
                            <div className="w-full my-1">What's my daddy's name ?</div>
                            <input
                                className="w-full my-1 rounded-lg"
                                type="text"
                                name="dad_name"
                                id="dad_name"
                                value={dad_name.toLowerCase() === daddy_name ? dad_name + ' is ' + 'Correct!' : dad_name}
                                onChange={(e) => enter_dad_name(e.target.value)}
                            />
                            <div className="w-full my-1">What's my mommy's name ?</div>
                            <input
                                className="w-full my-1 rounded-lg"
                                type="text"
                                name="mum_name"
                                id="mum_name"
                                value={mum_name.toLowerCase() === mommy_name1 || mum_name.toLowerCase() === mommy_name2 ? mum_name + ' is ' + 'Correct!' : mum_name}
                                onChange={(e) => enter_mum_name(e.target.value)}
                            />
                            <div className="w-full my-1">What's my birthday ?</div>
                            <DatePicker className="w-full my-1 rounded-lg" 
                            dateFormat="dd/MM/yyyy"
                            selected={date} onChange={(date) => setDate(date)} 
                            />
                            <div className="w-full flex justify-center my-8">
                                <button className="enter-button place-items-center text-center w-full p-2 pl-5 pr-5 transition-colors duration-700 transform font-bold text-gray-100 text-lg rounded-lg focus:border-4">
                                    enter
                                </button>
                            </div>
                        </form>
                    </div>

                {/* </div> */}
            </div>
        </>
    );
};

export default Qpage;
