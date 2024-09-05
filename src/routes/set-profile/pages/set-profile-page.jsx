import React, { useState } from 'react';
import { ProfileImageModal } from '../../../components/modals/profile-image-modal';
import { ProfileImageEdit } from '../components/profile-image-edit';
import { TextField } from '../../../components/textfield';
import { Button } from '../../../components/button';

const SetProfilePage = () => {
  const getRandomNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
  };

  const [isModalOpen, setIsModalOpen] = useState(false); // 프로필 이미지 선택 모달 열기/닫기
  const [profileImg, setProfileImg] = useState(getRandomNumber()); // ProfileImageModal에서 1,2,3,4,5,6 중 선택하면 값 변경됨, 지금 기본값은 편의상 1로 설정하였지만, 1~6 중 랜덤값으로 설정하길 바람 (명세)
  const [nickname, setNickname] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [error, setError] = useState(null);

  const openModal = () => {
    // 모달 열기, 이후 프로필 설정 페이지에서 프로필 사진 클릭 시 모달 여는 것으로 대체 필요
    setIsModalOpen(true);
  };

  const handleNicknameChange = (e) => {
    if (e.target.value.length > 10) {
      setError('*10자 이내의 한글, 숫자, 영문자를 입력해주세요.');
      setIsButtonEnabled(false);
    } else {
      setError(null);
      setNickname(e.target.value);
      if (e.target.value.length > 0) {
        setIsButtonEnabled(true);
      }
    }
  };

  return (
    <div className={`w-screen h-screen flex justify-center items-center`}>
      <div className="w-[450px] h-[446px] flex flex-col justify-center items-center gap-12">
        <h3 className="text-4xl font-extrabold text-neutral-800">프로필 설정</h3>
        <ProfileImageEdit openModal={openModal} profileImg={profileImg} />
        <TextField placeholder={'닉네임 (10자 이내)'} onChange={handleNicknameChange} value={nickname} error={error} />
        <Button variant={isButtonEnabled ? 'primary' : 'disabled'} className="w-[450px] h-[58px]">
          멋사주 시작하기
        </Button>
        <div className="w-screen h-screen flex justify-center items-center">
          {isModalOpen && (
            <ProfileImageModal
              setIsModalOpen={setIsModalOpen}
              profileImg={profileImg}
              setProfileImg={setProfileImg}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default SetProfilePage;
