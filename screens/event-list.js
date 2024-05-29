import * as React from 'react';
import { DataTable, Button } from 'react-native-paper';
import { Text, ScrollView, View, } from 'react-native';


const MyComponent = () => {
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
    {
      id: 1,
      name: 'Cupcake',
      number: 356,
      address: 16,
    },
  ]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <ScrollView horizontal>
      <View style={{ flex: 1 }}>
        <DataTable>
          {/* Header */}
          <DataTable.Header>
            <DataTable.Title style={{ marginHorizontal: 5, width: 30 }}>
              <Text style={{ color: 'black', width: '100%' }}>S.No</Text>
            </DataTable.Title>
            <DataTable.Title style={{ marginHorizontal: 5, width: 60 }}>
              <Text style={{ color: 'black', width: '100%' }}>Event Title</Text>
            </DataTable.Title>
            <DataTable.Title style={{ marginHorizontal: 5, width: 100 }}>
              <Text style={{ color: 'black', width: '100%' }}>Description</Text>
            </DataTable.Title>
            <DataTable.Title style={{ marginHorizontal: 5, width: 80 }}>
              <Text style={{ color: 'black', width: '100%' }}>Location</Text>
            </DataTable.Title>
            <DataTable.Title style={{ marginHorizontal: 5, width: 100 }}>
              <Text style={{ color: 'black', width: '100%' }}>Date Time</Text>
            </DataTable.Title>
            <DataTable.Title style={{ marginHorizontal: 5, width: 100 }}>
              <Text style={{ color: 'black', width: '100%' }}>Action</Text>
            </DataTable.Title>
          </DataTable.Header>
          {/* Rows */}
          {items.map((item, index) => (
            <DataTable.Row key={index}>
              <DataTable.Cell style={{ marginHorizontal: 5, width: 30 }}>
                <Text style={{ color: 'black' }}>{index + 1}</Text>
              </DataTable.Cell>
              <DataTable.Cell style={{ marginHorizontal: 5, width: 60 }}>
                <Text style={{ color: 'black' }}>{item.name}</Text>
              </DataTable.Cell>
              <DataTable.Cell
                style={{
                  marginHorizontal: 5,
                  width: 100,
                }}>
                {' '}
                <Text style={{ color: 'black' }}>{item.number}</Text>{' '}
              </DataTable.Cell>
              <DataTable.Cell style={{ marginHorizontal: 5, width: 80 }}>
                <Text style={{ color: 'black' }}>{item.address}</Text>
              </DataTable.Cell>
              <DataTable.Cell
                style={{ marginHorizontal: 5, width: 115, marginTop: 7 }}>
                <Text style={{ color: 'black' }}>{item.number}</Text>{' '}
              </DataTable.Cell>
              <DataTable.Cell
                style={{ marginHorizontal: 5, width: 115, marginTop: 7 }}>
              </DataTable.Cell>
            </DataTable.Row>
          ))}
        </DataTable>
      </View>
    </ScrollView>
  );
};

export default MyComponent;
