
import app from '../../app.module'

import './about.styl'

app.controller(
    'c_about',
    [
        '$scope',
        ($scope) => {

            console.log('About')
        }
    ]
    
)
