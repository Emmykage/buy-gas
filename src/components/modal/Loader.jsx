import "./style.scss"
import Spinner from '../spiner/Spinner'
import PropTypes from 'prop-types'

const Loader = ({isLoaderOpen}) => {
  return (
    <div className={`loader ${isLoaderOpen ? "open" : "close"}`}>
        <Spinner/>
    </div>
  )
}
Loader.propTypes = {
    isLoaderOpen: PropTypes.bool
}
export default Loader