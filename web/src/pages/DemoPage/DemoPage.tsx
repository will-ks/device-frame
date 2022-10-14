import BaseLayout from 'src/layouts/BaseLayout/BaseLayout'

const DemoPage = () => {
  return (
    <BaseLayout
      style={{
        background: 'linear-gradient(to bottom, #c6ffdd, #fbd786, #f7797d)',
        minHeight: '100vh',
      }}
    >
      <header>
        <h1 style={{ marginTop: 0, paddingTop: '8rem' }}>📱 🖼️</h1>
        <h2>
          Preview and share what your site looks like in a mobile device frame.
        </h2>
        <h3>Use the options to the left to set up your preview.</h3>
        <p>URLs are shareable.</p>
        <p>
          {`If the page is viewed on a mobile device, it'll just redirect to your
          site.`}
        </p>
      </header>
      <main style={{ textAlign: 'center' }}></main>
    </BaseLayout>
  )
}

export default DemoPage
