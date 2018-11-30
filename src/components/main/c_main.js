
import app from '../../app.module'

const c_main = app.controller(
    'c_main',
    [
        '$scope',
        ($scope) => {

            console.log('Hello')
        }
    ]
)

export { c_main }