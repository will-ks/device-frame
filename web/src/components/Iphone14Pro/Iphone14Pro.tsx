import { FC } from 'react'

import { useMedia } from 'react-use'

import Cutout from './IPhone_14_Pro_vector_cutout.svg'

const Iphone14Pro: FC = ({ children }) => {
  const darkMode = useMedia('(prefers-color-scheme: dark)')
  return (
    <div
      style={{
        display: 'flex',
        width: '440px',
        height: '892px',
        position: 'relative',
      }}
    >
      <Cutout
        style={{
          zIndex: 0,
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          position: 'absolute',
          filter: `drop-shadow(0px 0px 62px ${
            darkMode ? '#6d6780' : '#7d7d7d'
          }) drop-shadow(0px 0px 62px ${darkMode ? '#282230' : '#ffffff'})`,
        }}
      />
      <Cutout
        style={{
          zIndex: 2,
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
        }}
      >
        {children}
      </div>
    </div>
  )
}

export default Iphone14Pro
