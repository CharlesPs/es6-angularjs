
import app from '../../app.module'

import './home.styl'

const c_home = app.controller(
    'c_home',
    [
        '$scope',
        ($scope) => {

            console.log('Home')
        }
    ]
    
)

export { c_home }