import React, { useState } from 'react';
import { SajuLion } from './saju-lion';
import { SajuSearchContainer } from './search-container';

const SajuSearch = () => {
  return (
    <div className="flex flex-row gap-5 items-end">
      <SajuLion />
      <SajuSearchContainer />
    </div>
  );
};

export default SajuSearch;
