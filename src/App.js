import {Component} from 'react'
import Greetings from './components/Greetings'
import './App.css'

const languageGreetingsList = [
  {
    id: 'bfdf40eb-eec9-4a66-a493-752fe689f0d0',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/english-greetings-img.png',
    buttonText: 'English',
    imageAltText: 'english',
  },
  {
    id: '0ceda891-2a0c-49e2-8c62-68e78180bac6',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/tamil-greetings-img.png',
    buttonText: 'Tamil',
    imageAltText: 'tamil',
  },
  {
    id: '89537778-7a46-4c58-988c-0adc931d087c',
    imageUrl:
      'https://assets.ccbp.in/frontend/react-js/multilingual_greeting/telugu-greetings-img.png',
    buttonText: 'Telugu',
    imageAltText: 'telugu',
  },
]

// Replace your code here
class App extends Component {
  state = {activeId: languageGreetingsList[0].id}

  activeLanguage = id => {
    this.setState({activeId: id})
  }

  getActiveLanguage = () => {
    const {activeId} = this.state
    const filterLanguage = languageGreetingsList.find(
      eachLanguage => eachLanguage.id === activeId,
    )

    return filterLanguage
  }

  render() {
    const filterActiveLanguage = this.getActiveLanguage()
    const {imageUrl, imageAltText} = filterActiveLanguage
    const {activeId} = this.state

    return (
      <div className="main-container">
        <h1 className="heading">Multilingual Greetings</h1>
        <ul className="list-card">
          {languageGreetingsList.map(eachGreeting => (
            <Greetings
              key={eachGreeting.id}
              greetingLanguage={eachGreeting}
              activeLanguage={this.activeLanguage}
              isActive={eachGreeting.id === activeId}
            />
          ))}
        </ul>

        <img src={imageUrl} alt={imageAltText} className="active-image" />
      </div>
    )
  }
}

export default App
