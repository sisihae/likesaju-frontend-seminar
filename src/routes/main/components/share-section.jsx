import { Button } from 'components/button';
import { SectionLayout } from './section-layout';

export const ShareSection = () => {
  const shareCardInfo = [
    {
      title: 'STEP 1',
      description: '오늘의 운세를 확인하세요',
      img: '/images/capture1.png',
    },
    {
      title: 'STEP 2',
      description: '공유할 친구를 선택하세요',
      img: '/images/capture2.png',
    },
  ];

  return (
    <SectionLayout>
      <div className="w-full h-full flex flex-col gap-[80px]">
        {/* Header */}
        <div className="w-full flex flex-col mobile:flex-row justify-between items-start mobile:items-center gap-6">
          <div className="space-y-4">
            <h3 className="text-left text-3xl mobile:text-4xl nanum-extra-bold text-neutral-800">
              사주 공유하기
            </h3>
            <p className="text-lg mobile:text-xl font-bold text-neutral-800">
              채팅으로 사주를 공유해보세요
            </p>
          </div>
          <a href="/chat">
            <Button
              className="w-full mobile:w-[250px] h-[50px]"
              isRounded={true}
            >
              1:1 채팅 하러가기
            </Button>
          </a>
        </div>

        {/* Cards */}
        <div className="flex flex-col mobile:flex-row gap-6 mobile:gap-10 justify-center">
          {shareCardInfo.map((card) => (
            <ShareCard
              key={card.title}
              title={card.title}
              description={card.description}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </SectionLayout>
  );
};

const ShareCard = ({ title, description, img }) => {
  return (
    <div className="flex flex-col rounded-xl shadow-md w-full max-w-[450px] overflow-hidden">
      <img src={img} alt={title} className="w-full h-auto" />
      <div className="p-5 flex flex-col items-start gap-1.5">
        <h4 className="text-base font-normal text-neutral-800">{title}</h4>
        <p className="text-lg mobile:text-xl font-extrabold text-neutral-800">
          {description}
        </p>
      </div>
    </div>
  );
};
