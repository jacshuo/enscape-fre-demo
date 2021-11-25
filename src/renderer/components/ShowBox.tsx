import React, { useRef, useEffect } from 'react';
import * as echarts from 'echarts';
import 'echarts-gl';

export interface IShowBoxProps {
  options: any;
  style: any;
}

const ShowBox: React.FC<React.PropsWithChildren<IShowBoxProps>> = (props) => {
  const boxRef = useRef<HTMLDivElement>(null);
  const { style, options } = props;
  useEffect(() => {
    const chart = boxRef.current && echarts.init(boxRef.current);
    if (chart) {
      chart.setOption(options);
    }
  }, [boxRef, options]);

  return <div ref={boxRef} style={style} />;
};

export default ShowBox;
