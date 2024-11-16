import { Button } from 'components/button';
import { SectionLayout } from './section-layout';

export const SajuSection = () => {
  const sajuCardInfo = [
    {
      title: '건강운',
      description: '오늘 하루도 건강하고 안전하게!',
      img: '/images/health.png',
    },
    {
      title: '취업/학업운',
      description: '하는 일 모두 잘 될거야 :)',
      img: '/images/career.png',
    },
    {
      title: '연애운',
      description: '여러분의 사랑은 안녕하신가요?',
      img: '/images/love.png',
    },
    {
      title: '재물운',
      description: '돈 많은 백수가 되는 그날까지',
      img: '/images/wealth.png',
    },
  ];

  return (
    <SectionLayout>
      <div className="w-full h-full flex flex-col gap-[80px]">
        <div className="space-y-10 mobile:space-y-4 mobile:mx-auto">
          <p className="text-xl mobile:text-base text-neutral-800 font-semibold dark:text-white">
            어떤 내용을 확인할 수 있나요?
          </p>
          <div className="grid grid-cols-2 mobile:grid-cols-1 gap-[30px] mobile:w-fit">
            {sajuCardInfo.map((card) => (
              <SajuCard
                key={card.title}
                title={card.title}
                description={card.description}
                img={card.img}
              />
            ))}
          </div>
        </div>
      </div>
    </SectionLayout>
  );
};

const SajuCard = ({ title, description, img }) => {
  return (
    <div className="flex mobile:flex-col items-center gap-5 bg-white p-5 rounded-xl shadow-md mobile:max-w-[340px]">
      <div className="size-[100px]">
        <img src={img} alt="Saju Card" className="object-contain" />
      </div>
      <div className="space-y-2 h-fit mobile:w-full">
        <h4 className="text-left text-xl font-bold text-neutral-800">
          {title}
        </h4>
        <p className="text-left text-base font-normal text-neutral-800">
          {description}
        </p>
      </div>
    </div>
  );
};