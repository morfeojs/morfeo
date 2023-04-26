import { Player } from '@lottiefiles/react-lottie-player';
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import desktopChartData from '@/lotties/bundleSize_chart_desktop.lottie.json';

export const DesktopPlayer: React.FC = () => {
  const { ref, inView } = useInView({ threshold: 0.8 });
  const playerRef = useRef<Player>(null);
  const [isCompleted, setIsCompleted] = useState(false);

  useEffect(() => {
    if (inView && !isCompleted) {
      playerRef.current?.play();
      setIsCompleted(true);
    }
  }, [inView, isCompleted, playerRef]);

  return (
    <div ref={ref}>
      <Player
        ref={playerRef}
        src={desktopChartData}
        loop={false}
        keepLastFrame
      />
    </div>
  );
};
