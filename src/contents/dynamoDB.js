const dynamoDB = new AWS.DynamoDB();

const params = {
  TableName: 'YourTableName',
  Key: {
    'PrimaryKeyName': { S: 'PrimaryKeyValue' }
  }
};

dynamoDB.getItem(params, (err, data) => {
  if (err) {
    console.error('Error', err);
  } else {
    console.log('Success', data.Item);
  }
});