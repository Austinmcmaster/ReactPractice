import PropTypes from 'prop-types'
import Button from './Button'

export const Header = ({title}) => {

    const onClick = () => {
        console.log("Temp")
    }


  return (
      <header className = 'header'>
          <h1>{title}</h1>
          <Button color = 'Purple' text = 'Add' onClick = {onClick} />

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