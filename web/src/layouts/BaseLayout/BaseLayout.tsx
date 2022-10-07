type BaseLayoutProps = {
  children?: React.ReactNode
}

const BaseLayout = ({ children }: BaseLayoutProps) => {
  return <main style={{ height: '100vh', width: '100vw' }}>{children}</main>
}

export default BaseLayout
