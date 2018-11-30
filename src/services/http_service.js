
import app from '../app.module'

app.service(
    'httpService',
    [
        '$q', '$http', '$log', 'CONSTANTS',
        ($q, $http, $log, CONSTANTS) => {

            $log.log('http service - loaded')

            const get = url => {

                return $q((resolve, reject) => {

                    $http.get(CONSTANTS.backend.host + url)
                    .then(res => {
                        
                        if (!res.data.success) {

                            return reject(res.data)
                        }

                        resolve(res.data)
                    })
                    .catch(err => reject(err.data))
                })
            }

            return {
                get
            }
        }
    ]
)