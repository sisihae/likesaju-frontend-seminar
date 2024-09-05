// src/components/Form.js
import React, { useState } from 'react';
import { Button } from '../../../../components/button';
import { TextField } from '../../../../components/textfield';
import { Divider } from '../divider';
import { KakaoButton } from '../kakao-button';

export const LoginForm = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = () => {
    setError('*계정 정보를 확인해주세요.');
  };

  const buttonVariant = id.length > 0 && password.length > 0 ? 'primary' : 'disabled';


  return (<div className="self-stretch w-[450px] flex flex-col justify-start items-start gap-5">
    <TextField label={'id'} placeholder={'아이디'} type={'text'} onChange={(e) => {
      setId(e.target.value);
    }} />
    <TextField label={'password'} placeholder={'비밀번호'} type={'password'} onChange={(e) => {
      setPassword(e.target.value);
    }} />
    {error && (
      <div className="h-6 px-[5px] justify-start items-start inline-flex mt-[8px]">
        <div className="text-red-400 text-base font-normal font-['Pretendard'] leading-normal">
          {error}
        </div>
      </div>
    )}
    <Button className="w-[450px] h-[58px]" variant={buttonVariant} onButtonClick={handleLogin}>
      로그인하기
    </Button>
    <Divider text="or continue with" />
    <KakaoButton isLogin={true} />
  </div>);
};
