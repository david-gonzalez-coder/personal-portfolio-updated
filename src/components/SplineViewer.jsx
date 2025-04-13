import Spline from '@splinetool/react-spline';

export default function SplineScene({scene=""}) {
  return (
    <div className='w-full h-full'>
      <Spline
        className='w-full h-full'
      scene={scene} />
    </div>
  );
}