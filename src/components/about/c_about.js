
import app from '../../app.module'

import './about.styl'

const c_about = app.controller(
    'c_about',
    [
        '$scope',
        ($scope) => {

            console.log('About')
        }
    ]
    
)

export { c_about }