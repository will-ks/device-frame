import { FC } from 'react'

import Cutout from './IPhone_14_Pro_vector_cutout.svg'

const Iphone14Pro: FC = ({ children }) => {
  return (
    <div
      style={{
        display: 'flex',
        width: '440px',
        height: '892px',
        position: 'relative',
        zIndex: 0,
      }}
    >
      <Cutout
        style={{
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
        }}
      />
      <div
        id={'screen'}
        style={{
          width: '393px',
          height: '852px',
          maxWidth: '393px',
          maxHeight: '852px',
          position: 'absolute',
          display: 'flex',
          left: '23px',
          top: '20px',
          borderRadius: '20px',
          zIndex: -1,
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Iphone14Pro
