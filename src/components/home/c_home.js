
import app from '../../app.module'

import './home.styl'

const controllerFn = ($scope, httpService, CONSTANTS) => {

    console.log('Home')

    $scope.getResult = () => {

        httpService.get(CONSTANTS.backend.apis.users)
        .then(res => {

            console.log(res);
        })
        .catch(err => {

            console.error(err)
        })
    }
}

app.controller('c_home', ['$scope', 'httpService', 'CONSTANTS', controllerFn])
