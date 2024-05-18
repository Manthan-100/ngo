import { View, Text } from 'react-native';
import tw from 'twrnc';

export default function Dashboard() {
  const cards = [
    { count: 5000, label: 'Daily Donation', theme: '244, 161, 0' },
    { count: 10200, label: 'Monthly Donation', theme: '255, 65, 58' },
    { count: 105000, label: 'Yearly Donation', theme: '0, 172, 105' },
    { count: 5, label: 'Live Projects and Events', theme: '51, 102, 255' },
  ];

  return (
    <View>
      {cards.map((item) => (
        <View
          style={[
            {
              backgroundColor: 'rgb(255, 255, 255)',
              paddingTop: 14,
              marginHorizontal: 10,
              marginTop: 10,
              paddingBottom: 0,
            },
            tw`rounded-lg`,
          ]}>
          <View style={tw`flex flex-row justify-between px-4`}>
            <Text
              style={{
                color: `rgb(${item.theme})`,
                fontWeight: 800,
                fontSize: 25,
              }}>
              {item.count}
            </Text>
            <View
              style={{
                backgroundColor: `rgba(${item.theme} 0.5)`,
                borderRadius: 100,
                height: 30,
                width: 30,
                justifyContent: 'center',
                alignItems: 'center',
                borderWidth: 2,
                borderColor: `rgb(${item.theme})`,
              }}>
              <Text
                style={{
                  color: `rgb(${item.theme})`,
                  fontWeight: 800,
                  fontSize: 20,
                }}>
                $
              </Text>
            </View>
          </View>

          <View
            style={[
              tw`mt-10 rounded-b-lg`,
              {
                backgroundColor: `rgb(${item.theme})`,
                paddingVertical: 16,
                paddingHorizontal: 8,
              },
            ]}>
            <Text style={{ color: '#fff' }}>{item.label}</Text>
          </View>
        </View>
      ))}
    </View>
  );
}
