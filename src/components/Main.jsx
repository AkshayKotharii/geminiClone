import React, { useContext, useState } from 'react';
import { assets } from '../assets/assets';
import { Context } from '../context/Context';
import './styles.css';

const Main = () => {
    const { onSent, recentPrompt, showResult, loading, resultData, setInput, input } = useContext(Context);
    const [isInputEmpty, setIsInputEmpty] = useState(true);

    const handleInputChange = (e) => {
        setInput(e.target.value);
        setIsInputEmpty(e.target.value === '');
    };

    const handleSendClick = () => {
        if (!isInputEmpty) {
            onSent();
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !isInputEmpty) {
            onSent();
        }
    };

    return (
        <div className='main flex-1 min-h-[100vh] pb-[15vh] relative'>
            <div className="nav flex items-center justify-between text-[22px] p-[20px] text-customGray2">
                <p>Gemini</p>
                <img src={assets.user_icon} alt='' className='w-[40px] rounded-[50%]' />
            </div>

            <div className="main-container max-w-[900px] m-auto">
                {!showResult ? (
                    <>
                        <div className="greet my-[50px] mx-[0px] text-[56px] text-customGray3 font-medium p-[20px]">
                            <p>
                                <span
                                    className=""
                                    style={{
                                        backgroundColor: '#4b90ff',
                                        backgroundImage: 'linear-gradient(16deg, #4b90ff, #ff5546)',
                                        WebkitBackgroundClip: 'text',
                                        WebkitTextFillColor: 'transparent'
                                    }}
                                >
                                    Hello, Dev.
                                </span>
                            </p>
                            <p>How can I help you today?</p>
                        </div>

                        <div
                            className="cards "
                            style={{
                                display: 'grid',
                                gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))',
                                gap: '15px',
                                padding: '20px'
                            }}
                        >
                            {/* Your card components */}
                        </div>
                    </>
                ) : (
                    <div className='result py-[0px] px-[5%] max-h-[70vh] overflow-y-scroll '>
                        <div className="result-title">
                            <img src={assets.user_icon} alt="" />
                            <p>{recentPrompt}</p>
                        </div>
                        <div className="result-data">
                            <img src={assets.gemini_icon} alt="" />
                            {loading ? (
                                <div className='loader'>
                                    <hr />
                                    <hr />
                                    <hr />
                                </div>
                            ) : (
                                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
                            )}
                        </div>
                    </div>
                )}

                <div className="main-bottom absolute bottom-0 w-[100%] max-w-[900px] py-[0px] px-[20px] m-auto">
                    <div className="search-box flex items-center justify-between gap-[20px] bg-customGray4 py-[10px] px-[20px] rounded-[50px]">
                        <input
                            onChange={handleInputChange}
                            onKeyPress={handleKeyPress}
                            value={input}
                            type='text'
                            placeholder='Enter a prompt here'
                            className='flex-1 bg-transparent border-none outline-none p-[8px] text-[18px]'
                        />
                        <div className='flex items-center justify-between gap-[15px] bg-customGray4 py-[10px] px-[20px] '>
                            <img src={assets.gallery_icon} alt="" className='w-[24px] cursor-pointer' />
                            <img src={assets.mic_icon} alt="" className='w-[24px] cursor-pointer' />
                            {input ? (
                                <img onClick={handleSendClick} src={assets.send_icon} alt="" className='w-[24px] cursor-pointer' />
                            ) : null}
                        </div>
                    </div>

                    <p className="bottom-info text-[13px] m-[15px]  text-center font-light">
                        Gemini may display inaccurate info, including about people, so double-check its responses. Your privacy & Gemini Apps
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Main;
