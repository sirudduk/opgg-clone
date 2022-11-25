import { useState } from 'react';
import { useRouter } from 'next/router';

const SearchInput = () => {
  const router = useRouter();
  const [value, setValue] = useState('');

  function handleOnChange(e: any) {
    setValue(e.target.value);
  }

  function handleOnKeyUp(e: any) {
    if (e.key === 'Enter') {
      router.push(value);
    }
  }

  function handleOnClick(e: any) {
    router.push(value);
  }

  return (
    <div className="flex items-center w-[260px] h-[32px] px-[14px] py-[9px] bg-[#ffffff] rounded-[4px]">
      <input
        className="w-full outline-0 text-12"
        type="text"
        placeholder="소환사명을 검색해주세요."
        onChange={handleOnChange}
        onKeyUp={handleOnKeyUp}
      />
      <button className="font-bold text-[#1ea1f7]" onClick={handleOnClick}>
        .GG
      </button>
    </div>
  );
};

export default SearchInput;
