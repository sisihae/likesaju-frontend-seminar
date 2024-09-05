import React, { useState } from 'react';
import SajuSearch from '../components/saju-search/search-template';
import { SearchOutputTheme } from '../components/saju-search/search-output-theme';
import SajuSearchOutput from '../components/saju-search/search-output';

const SajuPage = () => {
  const [isPurchaseModalOpen, setIsPurchaseModalOpen] = useState(false);
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  const openPurchaseModal = () => {
    setIsPurchaseModalOpen(true);
  };

  const openShareModal = () => {
    setIsShareModalOpen(true);
  };

  return (
    <div className="w-full py-24 bg-gradient-to-b from-neutral-400 to-neutral-200">
      {/* saju-search */}
      <SajuSearch />
      {/* <button onClick={openPurchaseModal}>결제 모달 열기</button>
      {isPurchaseModalOpen && (
        <SajuPurchaseModal setIsModalOpen={setIsPurchaseModalOpen} />
      )}

      <button onClick={openShareModal}>공유 모달 열기</button>
      {isShareModalOpen && (
        <SajuShareModal setIsModalOpen={setIsShareModalOpen} />
      )} */}
      {/* <SajuSearchOutput /> */}
      <SearchOutputTheme />
    </div>
  );
};

export default SajuPage;
