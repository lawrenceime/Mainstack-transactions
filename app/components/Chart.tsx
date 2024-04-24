'use client'

import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Data {
  name: string;
  uv: number;
  pv: number;
  amt: number;
}

const data: Data[] = [
  {
    name: 'Page A',
    uv: 1890,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 6000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 3000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 5780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 2000,
    pv: 4800,
    amt: 2181,
  },
];


// const chartStyles = {
//   marginTop : "50px"
// }


const Chart: React.FC = () => {
  return (
    <div>

<ResponsiveContainer height={230} >
      <LineChart
      
        data={data}
        margin={{
          top: 50,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        
       {/* < XAxis /> */}
      
        
        <Line type="monotone" dataKey="uv" stroke="#FF5403" />
      </LineChart>
   
    </ResponsiveContainer>
    <hr className='w-[100%] mt-[-50] border-[2px]'/>

    </div>
    
  );
};

export default Chart;
