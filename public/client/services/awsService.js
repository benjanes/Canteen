angular.module('canteen.awsService', [])

.factory('awsService', [
  '$http',
  function ($http) {
    function getSignedReq(file) {
      return $http({
        method: 'GET',
        url: '/sign_s3?file_name=' + file.name + '&file_type=' + file.type
      })
      .then(function (resp) {
        var response = resp.data;
        return response;
      })
      .catch(function (err) {
        console.error(err);
      });
    }

    function uploadFile(file, putObj, cb) {
      // return $http({
      //   method: 'PUT',
      //   url: putObj.signed_request,
      //   headers: {
      //     'x-amz-acl': 'public-read'
      //   },
      //   data: file
      // })
      // .then(function (resp) {
      //   console.log(resp);
      //   return;
      // })
      // .catch(function (err) {
      //   console.error(err);
      // })
      var xhr = new XMLHttpRequest();
      xhr.open('PUT', putObj.signed_request);
      xhr.setRequestHeader('x-amz-acl', 'public-read');
      xhr.onload = function() {
        if (xhr.status === 200) {
          cb(putObj.url);
        }
      };
      xhr.onerror = function() {
        console.log('ERROR');
      };
      xhr.send(file);
    }

    // Factory methods use promises
    return {
      getSignedReq: getSignedReq,
      uploadFile: uploadFile
    };
  }
]);
