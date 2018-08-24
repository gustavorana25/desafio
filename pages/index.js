import ReduxWrapper from "../redux/ReduxWrapper"
import { connect } from 'react-redux';
import Header from  '../components/header'
import BannerHome from  '../components/banner-home'

const home = (props) =>{
  return(
    <div>
      <Header />
      <BannerHome />
    </div>
  )
}

export default ReduxWrapper(connect(state => state)(home));
