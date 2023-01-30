import React, { useState } from 'react'
import './send.scss'
import {v4 as uuidv4} from 'uuid'

import { SendOutlined, Call, VideoCall, Info, InfoRounded, AddCircle, 
         PhotoAlbum, InsertEmoticon  } from '@mui/icons-material'

const Send = () => {
 const [dataMess, setDataMess] = useState([
    {
        id: 1,
        mess: "e ong thuong co ghe qua khong ???",
        person: 'guest'
    },
    {
        id: 2,
        mess: "ong thuong nao ???",
        person: 'owner'
    },
    {
        id: 3,
        mess: "thuong cho tam than hao gay ???",
        person: 'guest'
    }
 ])

 const [input, setInput] = useState('')

 const handleSend = (e) => {
    setDataMess(prev => ([
        ...prev, {
            id: uuidv4(),
            mess: input,
            person: 'owner'
        }
    ]))
    setInput('')
 }

 //console.log(dataMess)

  return (
    <div className='send'>
        <div className='header-send'>
            <div className='userInfo'>
                <img src='https://i.pinimg.com/736x/3a/8f/8f/3a8f8fdb5d0282397d34b8af6698cfeb.jpg' alt=''/>
                <span>Li Oh no Messiu</span>
                <div className='online'></div>
            </div>
            <div className='actions'>
                <Call />
                <VideoCall />
                <InfoRounded />
            </div>
        </div>
        <div className='content-send'>
            {
                dataMess.map(mess => (
                    <div className='item-container' key={mess.id}>
                        <div className='item' style = {{ right: mess.person === 'owner' ? '0' : 'none', backgroundColor: mess.person === 'owner' ? '#e68585': 'lightGrey'}}>
                            <img src='https://i.pinimg.com/564x/b4/22/7f/b4227f4a4578d04a16bd4d33c93bbb6a.jpg' style={{display: mess.person === 'owner' ? 'none': '' }} alt=''/>
                                <p>{mess.mess}</p>
                        </div>
                    </div>
                ))
            }     
        </div>
        <div className='sendMess'>
            <div className='actions'>
                <AddCircle />
                <PhotoAlbum />
                <InsertEmoticon />
            </div>
            <input type='text' placeholder='send a messenger...' autoFocus value={input} onChange={e => setInput(e.target.value)}/>
            <button onClick={handleSend}><SendOutlined /></button>
            
        </div>
    </div>
  )
}

export default Send