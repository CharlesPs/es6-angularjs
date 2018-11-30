
import app from '../../app.module'

import './about.styl'

const controllerFn = ($scope) => {

    console.log('About')
}

app.controller('c_about', ['$scope', controllerFn])
