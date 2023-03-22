import React from 'react'

import {
  TbPencil,
  TbCode,
  TbBriefcase,
  TbPhoneCall,
  TbEditCircle,
  TbBuildingBank,
} from 'react-icons/tb'

const randomJobCount = () => {
  return Math.floor(Math.random() * 1000)
}

const jobData = [
  {
    name: 'UI/UX Design',
    icon: <TbPencil style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Development',
    icon: <TbCode style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Marketing',
    icon: <TbBriefcase style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Telemarketing',
    icon: <TbPhoneCall style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Editing',
    icon: <TbEditCircle style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
  {
    name: 'Accounting',
    icon: <TbBuildingBank style={{ height: '100%', width: '100%' }} />,
    count: randomJobCount(),
  },
]

export default jobData
