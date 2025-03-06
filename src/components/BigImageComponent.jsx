import Button from './Button'
function BigImageComponent({title, subtitle, img}){
    const imageUrl = `url(../private/images/res0${img}.jpg)`
    const bgImage = {
        backgroundImage: imageUrl
    }
    return(
        <div className="bigImageComponent">
            <div className='componentBg' style={bgImage}></div>
            <h3>{title}</h3>
            <h4>{subtitle}</h4>
            <Button text="Rezervovať skipas"/>
        </div>
    )
}
export default BigImageComponent