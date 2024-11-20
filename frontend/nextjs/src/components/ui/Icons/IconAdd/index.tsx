import { TIconSvg } from '@src/types';
import { FC } from 'react';

const IconAdd: FC<TIconSvg> = ({ ...rest }) => {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" {...rest}>
        <path d="M14.5 14.501H3.998a1.501 1.501 0 0 0 0 3H14.5l-.001 10.502a1.501 1.501 0 0 0 3 .001l.001-10.503h10.502a1.5 1.5 0 0 0 0-3H17.5L17.501 4a1.5 1.5 0 0 0-3-.001L14.5 14.501Z" />
      </svg>
    </>
  );
};

export default IconAdd;
