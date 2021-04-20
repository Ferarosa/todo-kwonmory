import * as React from 'react';

const Counter: React.FC<{name: string}> = (props) => {
  const { name } = props;
  return (
    <p>
      {name}
      테스트 해보기
    </p>
  );
};

export default Counter;
