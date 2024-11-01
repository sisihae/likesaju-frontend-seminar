export const ReceiveSpeechBubble = ({ text }) => {
  return (
    <p
      className="text-neutral-800 font-pretendard text-[18px] font-semibold leading-[27px]"
      dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br />') }}
    />
  );
};
