import PropTypes from 'prop-types'

export const Header = ({title}) => {
  return (
      <header>
          <h1 style = {headingStyle}>{title}</h1>
      </header>
  )
}

Header.defaultProps = {
    title: 'Task Tracker'
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
const headingStyle = {
    color: 'red', 
    backgroundColor:'black'
}

export default Header