import './index.css'

const Greetings = props => {
  const {greetingLanguage, activeLanguage, isActive} = props
  const {id, buttonText} = greetingLanguage

  const activeLanguageClassName = isActive ? 'active-button' : ''

  const onSelectLanguage = () => {
    activeLanguage(id)
  }

  return (
    <li className="list-item">
      <button
        type="button"
        className={`button-text ${activeLanguageClassName}`}
        onClick={onSelectLanguage}
      >
        {buttonText}
      </button>
    </li>
  )
}
export default Greetings
