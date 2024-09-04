// src/components/Form.js
import React, { useState } from 'react';
import { Button } from '../../../../components/button';
import { TextField } from '../../../../components/textfield';
import { Divider } from '../divider';
import { KakaoButton } from '../kakao-button';

export const SignUpForm = () => {
  const [checkId, setCheckId] = useState(false);
  const [idError, setIdError] = useState(null);
  const [idConfirm, setIdConfirm] = useState(null);
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordError, setPasswordError] = useState(null);
  const [passwordConfirmError, setPasswordConfirmError] = useState(null);

  const handelCheckId = () => {
    // if (checkId) {
    // setCheckId(true);
    // setIdError('*이미 존재하는 아이디입니다.');
    // } else {
    setCheckId(true);
    setIdConfirm('*사용 가능한 아이디입니다.');
    // }
  };

  const handleIdChange = (e) => {
    if (e.target.value.length > 0) {
      setCheckId(false);
      setIdError(null);
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    setPasswordError(null);
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
    setPasswordConfirmError(null);
  };

  const handleSignUp = () => {
    if (!checkId) {
      setIdError('*아이디 중복확인을 해주세요.');
    }
    if (password.length < 8) {
      setPasswordError('*8자 이상의 숫자, 영문자, 특수문자를 입력해주세요.');
      return;
    }
    if (password !== passwordConfirm) {
      setPasswordConfirmError('*비밀번호가 일치하지 않습니다.');
      return;
    }
  };

  const idCheckButtonVariant = checkId ? 'disabled' : 'primary';
  const buttonVariant = checkId && password.length > 0 && passwordConfirm.length > 0 ? 'primary' : 'disabled';

  return (
    <div className="self-stretch w-[450px] flex flex-col justify-start items-center gap-5">
      <div className="w-[450px] justify-start items-start gap-3 inline-flex">
        <TextField label={'id'} placeholder={'아이디'} type={'text'} error={idError} onChange={handleIdChange}
                   confirmText={idConfirm} />
        <Button className="w-[108px] h-[54px]" size={'small'} variant={idCheckButtonVariant}
                onButtonClick={handelCheckId}>
          중복확인
        </Button>
      </div>
      <TextField label={'password'} placeholder={'비밀번호'} type={'password'} onChange={handlePasswordChange}
                 error={passwordError} />
      <TextField label={'passwordConfirm'} placeholder={'비밀번호 확인'} type={'password'} error={passwordConfirmError}
                 onChange={handlePasswordConfirmChange} />
      <Button className="w-[450px] h-[58px]" variant={buttonVariant} onButtonClick={handleSignUp}>
        회원가입
      </Button>
      <Divider text="or continue with" />
      <KakaoButton isLogin={false} />
    </div>);
};
