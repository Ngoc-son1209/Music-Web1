import React, { useState } from 'react'; // Thêm useState để quản lý trạng thái
import '../Styles/SignupStyle.css';
import { Link } from 'react-router-dom';

const Signup = () => {
    const [showPhoneForm, setShowPhoneForm] = useState(false); 

    const handlePhoneSignup = () => {
        setShowPhoneForm(true); // Thay đổi trạng thái để hiển thị form số điện thoại
    };

    return (
        <div className="signup_page">
            <div className='signup_form'>
                <img className='top_img' src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='' width="50px" height="50px" />
                <div className='signup_title'>
                    <strong>đăng ký để<br />bắt đầu nghe</strong>
                </div>

                <br />

                {!showPhoneForm ? ( // Kiểm tra trạng thái để hiển thị form đúng
                    <>
                        <div className='email_title'>
                            <strong>Địa chỉ Email</strong>
                        </div>
                        <input type='text' placeholder='name@domain.com' />
                        <div className='SignupWithPhoneNumber' onClick={handlePhoneSignup}> {/* Gọi hàm để hiển thị form số điện thoại */}
                            <strong><u>Đăng ký bằng số điện thoại</u></strong>
                        </div>

                        <Link>
                            <button className='next' type='button'>
                                <strong>Tiếp theo</strong>
                            </button>
                        </Link>

                        <hr className='hr' />

                        <button className='SignupWithGoogle' type='button'>
                            <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='Google Logo' />
                            <strong>Đăng ký bằng Google</strong>
                        </button>

                        <button className='SignupWithFacebook' type='button'>
                            <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='Facebook Logo' />
                            <strong>Đăng ký bằng Facebook</strong>
                        </button>

                        <button className='SignupWithApple' type='button'>
                            <img src='https://cdn-icons-png.flaticon.com/512/9280/9280598.png' alt='Apple Logo' />
                            <strong>Đăng ký bằng Apple</strong>
                        </button>

                        <hr className='hr' />

                        <div className='signuptologin'>
                            <span>
                                Bạn đã có tài khoản?
                                <Link to="/login">
                                    <span><u>đăng nhập tại đây</u></span>
                                </Link>
                            </span>
                        </div>
                    </>
                ) : (
                    // Form đăng ký số điện thoại
                    <div className='phone_signup_form'> {/* Component hiển thị form đăng ký số điện thoại */}
                        <div className='phone_title'>
                            <strong>Đăng ký bằng số điện thoại</strong>
                        </div>
                        <input type='text' placeholder='Số điện thoại của bạn' /> {/* Ô nhập số điện thoại */}
                        <button className='next' type='button'>
                            <strong>Tiếp theo</strong> {/* Nút để tiếp tục */}
                        </button>
                        <div className='back_to_signup' onClick={() => setShowPhoneForm(false)}> {/* Nút quay lại form email */}
                            <strong><u>Quay lại đăng ký bằng email</u></strong>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Signup;
