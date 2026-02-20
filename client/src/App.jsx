import ImageGenerator from './components/ImageGenerator'
import ChatBot from './components/ChatBot'
import TextToSpeech from './components/TextToSpeech'
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>

      <header>
        <h1>AI Creative Studio</h1>
        <p>Your premium workshop for Image, Text, and Voice.</p>
      </header>

      <main className="dashboard-grid">
        <section className="image-section">
          <ImageGenerator />
        </section>

        <div className="dashboard-sidebar">
          <ChatBot />
          <TextToSpeech />
        </div>
      </main>
    </div>
  )
}

export default App
