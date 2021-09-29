export const sendSms = (phones, latitude, longitude) => {
  console.log('inside sendsms');
  // convert phones to comma separated string
  var phoneString = phones.join(',');
  var locationURL = `Latitude%20:%20${latitude}%20Longitude%20:%20${longitude}`;

  console.log(phoneString);
  console.log(locationURL);
  var urlString = `https://www.fast2sms.com/dev/bulkV2?authorization=QGe1UnFvx6siYqkhSZ5rd3Vu4c7ajLApHwmITD90NbRzoOtX8KRI9hXzGWetsrvL1B3lCPxM40cJmYOQ&route=q&message=I%20am%20in%20danger,%20Help%20me!%20Here%20is%20my%20location%20${locationURL}&language=english&flash=0&numbers=${phoneString}`;
  console.log('====================================');
  console.log(urlString);
  console.log('====================================');

  var req = fetch(urlString)
    .then(response => response.json())
    .then(response => {
      console.log(response);
    })
    .catch(error => {
      console.log(error);
    });
};
