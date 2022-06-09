import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({title}) => {
  return (
      <header className = 'header'>
          <h1>{title}</h1>
          <Button color = 'Green' text = 'Hello' />
          <Button color = 'Red' text = 'Hello1' />
          <Button color = 'Yellow' text = 'Hello2' />
      </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

// CS in JS inline method
// const headingStyle = {
//     color: 'red', 
//     backgroundColor:'black'
// }

export default Header