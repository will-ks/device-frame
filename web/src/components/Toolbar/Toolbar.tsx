import { CSSProperties, FC, useState } from 'react'

import { Form, InputField, Label, SelectField } from '@redwoodjs/forms'
import { navigate, routes } from '@redwoodjs/router'

import { DEFAULTS, devices, DisplayMode } from 'src/pages/FramePage/FramePage'

const Toolbar: FC<{
  url: string
  deviceId: string
  displayMode: DisplayMode
  themeColor: string
  style?: CSSProperties
}> = ({ url, style, deviceId, displayMode, themeColor }) => {
  const [showThemeColorInput, setShowThemeColorInput] = useState(
    displayMode === DisplayMode.Standalone
  )
  return (
    <section style={style}>
      <Form<{
        url: string
        deviceId: string
        displayMode: string
        themeColor: string
      }>
        onSubmit={(formValues) =>
          navigate(
            routes.frame({
              routeGlob: `${
                formValues.deviceId !== DEFAULTS.device
                  ? `${formValues.deviceId}/`
                  : ''
              }${
                formValues.displayMode !== DEFAULTS.displayMode
                  ? `${formValues.displayMode}/`
                  : ''
              }${
                formValues.displayMode !== DisplayMode.Fullscreen &&
                formValues.themeColor !== DEFAULTS.themeColor &&
                formValues.themeColor
                  ? `${encodeURIComponent(formValues.themeColor.trim())}/`
                  : ''
              }${formValues.url.trim()}`,
            })
          )
        }
      >
        <Label name={'url'}>URL to frame</Label>
        <InputField required type={'text'} name={'url'} defaultValue={url} />
        <Label name={'deviceId'}>Device</Label>
        <SelectField required name={'deviceId'} defaultValue={deviceId}>
          {Object.entries(devices).map(([id, device]) => (
            <option value={id} key={id}>
              {device.name}
            </option>
          ))}
        </SelectField>
        <Label name={'displayMode'}>Display mode</Label>
        <SelectField
          name={'displayMode'}
          defaultValue={displayMode}
          onChange={(e) =>
            setShowThemeColorInput(e.target.value === DisplayMode.Standalone)
          }
        >
          <option value={DisplayMode.Fullscreen}>Fullscreen</option>
          <option value={DisplayMode.Standalone}>Standalone</option>
        </SelectField>
        {showThemeColorInput && (
          <>
            <Label name={'themeColor'}>Theme color</Label>
            <InputField
              type={'text'}
              name={'themeColor'}
              defaultValue={themeColor}
            />
          </>
        )}
        <button type={'submit'}>OK</button>
      </Form>
    </section>
  )
}

export default Toolbar
