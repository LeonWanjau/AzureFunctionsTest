import Img from 'react-image'
import { connect } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles'
import {fetchImages} from '../Slices/imagesSlice'
import Spinner from './Spinner'

const useStyles = makeStyles({
    img:{
        position:'relative'
    }
})

const Images = ({ showImages, images,fetchImages }) => {
    showImages==false? fetchImages() :null
    const classes = useStyles()

    return (
        showImages &&
        <div>
            {
                Object.entries(images).map(([key, value]) => (
                    <Img className={classes.img} key={key} src={value} loader={<p>Loading</p>} />
                )
                )
            }
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        showImages: state.images.showImages,
        images: state.images.imageList
    }
}

export default connect(mapStateToProps,{fetchImages})(Images)