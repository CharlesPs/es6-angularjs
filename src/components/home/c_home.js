
import app from '../../app.module'

import './home.styl'

app.controller(
    'c_home',
    [
        '$scope',
        ($scope) => {

            console.log('Home')
        }
    ]
    
)
