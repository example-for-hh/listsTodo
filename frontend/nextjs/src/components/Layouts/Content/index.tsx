import { FC } from 'react';

type TLayoutProps = {
  children: React.ReactNode;
};

const Content: FC<TLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="container">{children}</div>
    </>
  );
};

export default Content;
