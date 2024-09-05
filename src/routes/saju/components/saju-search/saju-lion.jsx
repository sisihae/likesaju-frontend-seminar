/* 추후 움직이는 사자로 교체해야 함. 퍼블리싱 단계에서는 이미지만 박아둠 */

import React from 'react';
import standinglion from '../../../../assets/images/standinglion.png';

export const SajuLion = () => {
  return (
    <div className="w-[615px] ">
      <img src={standinglion} alt="standinglion" />
    </div>
  );
};
