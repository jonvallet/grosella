 var loginFinished = function(authResult) {
    if (authResult) {

      console.log(authResult);

      var label = '';
      if (authResult['status']['signed_in']) {
        toggleDiv('signin-button');
        label = 'User granted access:';
        gapi.auth.setToken(authResult);
        gapi.client.load('plus','v1', function(){
                  var request = gapi.client.plus.people.get({
                  'userId': 'me'
                  });
                  request.execute(function(resp) {
                      console.log('Retrieved profile for:' + resp.displayName);
                      console.log(resp);
                      document.getElementById('oauth2-results').innerHTML = label+'<br>Welcome to grosella menu creator, '+resp.displayName+'!'
                  });
              });
      }

    } else {
      document.getElementById('oauth2-results').innerHTML =
          'Empty authResult';
    }
  };

  function toggleDiv(id) {
    var div = document.getElementById(id);
    if (div.getAttribute('class') == 'hide') {
      div.setAttribute('class', 'show');
    } else {
      div.setAttribute('class', 'hide');
    }
  }