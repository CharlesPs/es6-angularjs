
import app from '../../app.module'

import './home.styl'

const controllerFn = ($scope, httpService) => {

    console.log('Home')
}

app.controller('c_home', ['$scope', 'httpService', controllerFn])
