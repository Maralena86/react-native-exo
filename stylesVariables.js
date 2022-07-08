export const styles = (theme) => {
    const isLight = theme === 'light';
const colors= {
    primaryColorLight:'rgb(200,200,260)',
    primaryColorDark: 'rgb(50,50,50)',
    lightText: 'white',
    darkText: 'black'

}

    return{
        primaryColorLight: colors.primaryColorLight,
        primaryColorDark: colors.primaryColorDark,
        primaryColor: isLight
            ?colors.primaryColorLight
            :colors.primaryColorDark,
        lightText: colors.lightText,
        darktext: colors.darkText,
        themTextColor: isLight ? colors.darkText: colors.lightText,

        linkColor:'red'

        
    }
}